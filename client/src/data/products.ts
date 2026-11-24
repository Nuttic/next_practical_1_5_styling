export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export const products: Product[] = [
  {
    id: 1,
    image: "/images/product_image.jpeg",
    title: "тарелка глубокая",
    description: "тарелка диаметром 30 см с высокими бортиками",
    price: 2500
  },
  {
    id: 2,
    image: "/images/product_image.jpeg",
    title: "кружка",
    description: "350 мл для самого вкусного кофе",
    price: 2000
  },
  {
    id: 3,
    image: "/images/product_image.jpeg",
    title: "ваза",
    description: "2 литра для ваших ярких букетов",
    price: 4000
  },
  {
    id: 4,
    image: "/images/product_image.jpeg",
    title: "тарелка объемная",
    description: "блюдце 20 см под разные вкусности",
    price: 3500
  }
];
