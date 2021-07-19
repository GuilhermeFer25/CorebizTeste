import ReactStars from 'react-stars/dist/react-stars'
import { price } from '../../utils/price'
import '../../assets/components/productCard.css'

export default function ProductCard({ product }) {
  return (
    <div className="relative flex flex-col items-center rounded-b-3xl ">
      <img className="" alt={product.productName} src={product.imageUrl} />

      <div className="flex flex-col items-center hover:bg-gray-200 h-auto">
        <h1 className="text-base font-medium leading-4 text-center text-gray-500 dark:text-gray-400 ">
          {product.productName}
        </h1>
        <ReactStars count={5} value={product.stars} color2={'#FF0000'} edit={false} size={24} />

        {product.listPrice && (
          <h2 className="text-sm line-through font-semibold leading-6 text-center pt-3 text-gray-500 dark:text-gray-100 ">
            de {price(product.listPrice)}
          </h2>
        )}
        <h3 className="text-2xl font-semibold leading-6 text-center pt-3 text-gray-800 dark:text-gray-100">
          Por {price(product.price)}
        </h3>

        {product.installments.map(({ quantity, value, index }) => (
          <h6
            key={index}
            className="text-xs font-semibold leading-6 text-center pt-3 text-gray-500 dark:text-gray-100"
          >
            ou em {quantity} x {price(value)}
          </h6>
        ))}
        <div className="flex flex-col items-center justify-center pb-10">
          <button className=" text-white bg-black border-black dark:text-white dark:bg-black border px-4 py-2 text-sm font-medium leading-3 rounded focus:outline-none mt-5 hover:opacity-50">
            Comprar
          </button>
        </div>

        {product.listPrice && (
          <div
            id="off"
            className="absolute right-1 top-0 w-20 h-20  bg-red-600 px-7 text-white font-bold text-2xl  "
          >
            <h1 className="">Off</h1>
          </div>
        )}
      </div>
    </div>
  )
}
