export interface IProduct {
  id: string;
  name: string;
  price?: number;
  size?: Array<number>;
  releaseYear?: string;
  manufacturer?: string;
  images?: Array<string>;
}

export const products: Array<IProduct> = [
  {
    id: "1",
    name: "Nike Shoes 1",
    price: 9990,
    size: [41,42],
    releaseYear: "1981",
    manufacturer: "Nike",
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5a6c6d3a-1b1a-4b1a-8b0a-0a0a0a0a0a0a/air-max-90-shoe-2XjJz3.jpg",
    ],
  },
  {
    id: "2",
    name: "Nike Shoes 2",
    price: 19990,
    size: [42],
    releaseYear: "2001",
    manufacturer: "Nike",
    images: [
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/5a6c6d3a-1b1a-4b1a-8b0a-0a0a0a0a0a0a/air-max-90-shoe-2XjJz3.jpg",
    ],
  },
  {
    id: "3",
    name: "Reebok Shoes 2",
    size: [42, 43],
    releaseYear: "2001",
    manufacturer: "Reebok",
    images: [
      "https://archiwum.allegro.pl/ns-old-650/48c060cd071ab159e1807fdaa775ed62488df80728b16c0147ec78c9165de650"
    ]
  }
]