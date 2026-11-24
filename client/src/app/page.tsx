import ProductCard from "./components/ProductCard"
import { products } from "../data/products"


export default function ListPage(){
     return (
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button
          type="button"
          className="bg-blue-800 hover:bg-blue-700 text-white uppercase font-medium px-10 py-3.5 rounded-full transition-colors duration-200 cursor-pointer"
        >
          Смотреть всю коллекцию
        </button>
      </div>
    </section>
    )
}