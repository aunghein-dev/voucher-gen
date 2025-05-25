import { generateOrderCode, customDateFormat } from "./custom"; // Import customDateFormat from "./custom"
export default function PopupVouncher(props: any) {
  
  return (
    <div className="bg-gray-100 absolute 
                    top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2
                    flex flex-col w-full h-full rounded"
          style={{
            color:"rgb(56, 57, 60)" 
          }}>
      
      <img className="absolute top-2 right-2 w-[100px]" src="./qr-code.png" alt="MoMo QR Facebook" />

      <div className="flex flex-col items-center">
        <img className="h-20" src="./logo.png" alt="Mo Mo Clothing Logo" />
        <h1 className="text-2xl font-bold mb-6 ">Mo Mo Clothing</h1>
        <p className="text-xs -mt-5 mb-2">
          <span>၅၇လမ်း(A)၊ ၁၂၀၊ ၁၂၁လမ်းကြား၊ </span>
          
        </p>
       <p className="text-xs mb-2">
         
          <span>ပြည်ကြီးတံခွန်မြို့နယ်၊​ မန္တလေးမြို့</span>
        </p>
         <p className="text-xs ">
         
          <span className="font-mono text-xs space-y-1">09965575892၊ 09799103451</span>
        </p>
      </div>

      
      {
      <ul className="mt-6">
        <div style={{
          color:"rgba(56, 57, 60, 75%)"
        }}>
         <div className="flex justify-between px-4 text-center text-xs font-bold">
            <span className="p-2">Order: {generateOrderCode()}</span>
            <span className="p-2">{customDateFormat(new Date())}</span>
          </div>
          <div className="flex justify-between px-4 border-b border-gray-400 text-center text-xs border-dashed font-bold -mt-4">
            <span className="p-2">Status: Ordered</span>
            <span className="p-2">Delivery</span>
          </div>
        </div>
        

        <li className="grid grid-cols-[10%_30%_20%_20%_20%] p-1 border-b border-gray-400 font-bold text-center text-sm border-dashed">
          <span className="p-2">No</span>
          <span className="p-2">Item</span>
          <span className="p-2">Unit</span>
          <span className="p-2">Qty.</span>
          <span className="p-2">Amount</span>
        </li>

        {props.data.map((item: any, index: number) => (
          <li key={index} className="grid grid-cols-[10%_30%_20%_20%_20%] p-2 border-b border-gray-400 border-dotted text-center items-center text-xs">
            <span>{index + 1}</span>
            <span>{item.name}</span>
            <span>{item.price}</span>
            <span>{item.quantity}</span>
            <span>{item.subTotal}</span>
          </li>
        ))}

        <li className="grid grid-cols-[10%_30%_20%_20%_20%] p-1 border-b border-gray-400 font-bold text-center text-sm border-dashed">
          <span className="p-2"></span>
          <span className="p-2"></span>
          <span className="p-2"></span>
          <span className="p-2">Total</span>
          <span className="p-2">{props.grandTotal}</span>
        </li>
      </ul>

      }

      <p className="text-sm mt-12">ဝယ်ယူအားပေးမှုအတွက် ကျေးဇူးအထူးတင်ရှိပါသည်</p>

      
      
      <button 
          className="bg-blue-500 
                     hover:bg-blue-700 
                     text-white 
                     font-medium rounded-lg text-sm
                     py-2 px-4 
                     absolute bottom-2 right-2"
          onClick={props.handleGenerate}>Close</button>
    </div>
  )
}