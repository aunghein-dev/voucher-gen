import { generateOrderCode, customDateFormat } from "./custom"; // Import customDateFormat from "./custom"
type Cart = {
  name: string;
  price: number;
  quantity: number;
  subTotal: number;
}
type PopupVouncherProps = {
  handleGenerate: () => void;
  data: Array<Cart>;
  grandTotal: number;
};


export default function PopupVouncher(props: PopupVouncherProps)  {
  
  return (
    <div className="max-w-3xl mx-auto bg-white absolute 
                    top-1/2 left-1/2 
                    transform -translate-x-1/2 -translate-y-1/2
                    flex flex-col w-full h-full rounded"
          style={{
            color:"rgb(56, 57, 60)" 
          }}>
      
      <img className="absolute top-2 right-2 w-[75px]" src="./qr-code.png" alt="MoMo QR Facebook" />

      <div className="flex flex-col items-center">
        <img className="h-20" src="./logo.png" alt="Mo Mo Clothing Logo" />
        <h1 className="text-2xl font-bold mb-6 ">Mo Mo Clothing</h1>
        <p className="text-xs -mt-5 mb-2">
          <span>၅၇(A)လမ်း၊ ၁၂၀ ⨯ ၁၂၁လမ်းကြား၊ </span>
        </p>
       <p className="text-xs mb-2">
          <span>ပြည်ကြီးတံခွန်မြို့နယ်၊​ မန္တလေးမြို့</span>
        </p>
         <p className="text-xs font-mono">
          <span className="text-xs space-y-1">09-965575892၊  09-799103451</span>
        </p>
      </div>

      
      {
      <ul className="mt-6">
        <div style={{
          color:"rgba(56, 57, 60, 75%)"
        }}>
         <div className="flex justify-between px-1.5 text-center text-xs font-bold">
            <span className="p-2">Slip: {generateOrderCode()}</span>
            <span className="p-2">{customDateFormat(new Date())}</span>
          </div>
          <div className="flex justify-between px-1.5 border-b border-gray-400 text-center text-xs border-dashed font-bold -mt-4">
            <span className="p-2">Ordered</span>
            <span className="p-2">Delivery</span>
          </div>
        </div>
        

        <li className="grid grid-cols-[12%_38%_20%_10%_20%] p-1 border-b border-gray-400 font-bold text-center text-xs border-dashed">
          <span className="p-2 text-center">No</span>
          <span className="p-2 text-left">Item</span>
          <span className="p-2">Unit</span>
          <span className="p-2">Qty.</span>
          <span className="p-2 text-right">Amount</span>
        </li>

        {props.data.map((item: any, index: number) => (
          <li key={index} className="grid grid-cols-[12%_38%_20%_10%_20%] p-2 border-b border-gray-400 border-dotted text-center items-center text-xs px-3">
            <span>{index + 1}</span>
            <span className="text-left break-words">{item.name}</span>
            <span>{Number(item.price).toLocaleString()}</span>
            <span>{Number(item.quantity).toLocaleString()}</span>
            <span className="text-right">{Number(item.subTotal).toLocaleString()}</span>
          </li>
        ))}

        <li className="grid grid-cols-[30%_10%_20%_10%_30%] p-1 border-b border-gray-400 font-bold text-center text-sm border-dashed">
          <span className="p-2">Grand Total</span>
          <span className="p-2"></span>
          <span className="p-2"></span>
          <span className="p-2"></span>
          <span className="p-2 text-right">{Number(props.grandTotal).toLocaleString()}</span>
        </li>
      </ul>

      }

      <p className="text-xs mt-4">ဝယ်ယူအားပေးမှုအတွက် ကျေးဇူးအထူးတင်ရှိပါသည်</p>

      
      
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