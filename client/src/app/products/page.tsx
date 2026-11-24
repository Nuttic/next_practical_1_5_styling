import { products } from "@/src/data/products";
import ProductCard from "../components/ProductCard";


export default function ProductList() 
{
    return (
        <div className="flex gap-20 p-20">
            {products.map(product => <ProductCard key={product.id} {...product}/>)}
        </div>
    )
}
