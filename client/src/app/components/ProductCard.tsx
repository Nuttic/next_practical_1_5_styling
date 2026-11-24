import Image from "next/image";


export interface ProductCardProps {
  id: number;
  image?: string;
  title: string;
  description: string;
  price: number;
}

export default function ProductCard({ id, image, title, description, price }: ProductCardProps) {
  return (
    <div className="flex flex-col w-full h-full bg-white p-5 rounded-md shadow-sm">
      <Image
        src={image || '...'}
        width={250}
        height={250}
        alt={title}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <span className="text-black text-[20px] font-bold mb-[5px]">{title}</span>
      <p className="text-gray-500 mb-[5px]">{description}</p>
      <span className="text-gray-500 mb-4">{price} ₽</span>
      <button className="bg-blue-800 text-white rounded-full p-3 mt-auto cursor-pointer hover:bg-blue-700 transition">
        в корзину
      </button>
    </div>
  );
}
