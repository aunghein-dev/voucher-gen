import { useState } from "react"
import PopupVouncher from "./PopupVouncher";

type Cart = {
  name: string;
  price: number;
  quantity: number;
  subTotal: number;
}

export default function VouncherGenerator() {

  const input = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none"

  const button ="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

  const form = "max-w-3xl mx-auto space-y-5"

  const initialCart: Cart[] = []

  
  const [myCart, setMyCart] = useState(initialCart);
  const [isVisibleVouncher, setIsVisibleVouncher] = useState(false);
  const grandTotal = myCart.reduce((total, item) => total + item.subTotal, 0);

  const handleGenerate = () => {
    setIsVisibleVouncher(!isVisibleVouncher);
  }

  function handleAddItem(formData: FormData) {
     const name = formData.get("item")? String(formData.get("item")) : "";
     const price = formData.get("unitPrice")? Number(formData.get("unitPrice")) : 0;
     const quantity = formData.get("qty")? Number(formData.get("qty")) : 0;
     const subTotal = price * quantity;
     const newCart = [...myCart, {name, price, quantity, subTotal}]
     setMyCart(newCart);
  }

  function handleDeleteItem(name: string) {
    const newCart = myCart.filter(item => item.name !== name);
    setMyCart(newCart);
  }

  return (
    <div className="text-center relative">
      <div className="flex flex-col items-center">
        <img className="h-20" src="./logo.png" alt="Mo Mo Clothing Logo" />
        <h1 className="text-3xl font-bold mb-6">Mo Mo Clothing</h1>
      </div>
      
      <form action={handleAddItem} className={form} >
        <input className={input} type="text" name="item" placeholder="Enter Item" />
        <input className={input} type="number" name="unitPrice" placeholder="Enter Unit Price" />
        <input className={input} type="number" name="qty" placeholder="Enter Quantity" />
         <button type="submit" className={button}>Add Items</button>
      </form>

      <div className="bg-gray-800 max-w-3xl mx-auto mt-10 rounded-md text-white text-sm">
        <ul>
          <li className="grid grid-cols-6 p-2 border-b border-gray-500 font-bold text-center">
            <span className="p-2">No</span>
            <span className="p-2">Item</span>
            <span className="p-2">Unit Price</span>
            <span className="p-2">Quantity</span>
            <span className="p-2">Sub Total</span>
            <span className="p-2">Action</span>
          </li>
          {myCart.map((item, index) => (
            <li
              key={item.name}
              className="grid grid-cols-6 p-2 border-b border-gray-600 text-center items-center"
            >
              <span>{index + 1}</span>
              <span>{item.name}</span>
              <span>{item.price}</span>
              <span>{item.quantity}</span>
              <span>{item.subTotal}</span>
              <button onClick={() => handleDeleteItem(item.name)} className="bg-red-800 px-2 py-1 rounded text-white hover:bg-red-700 font-medium rounded-lg text-sm">
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <button 
      onClick={handleGenerate}
      className="mt-10 
      text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Generate</button>


     {isVisibleVouncher && <PopupVouncher handleGenerate={handleGenerate} data={myCart} grandTotal={grandTotal}/>}
    </div>
  )
}