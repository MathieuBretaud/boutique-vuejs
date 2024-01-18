import type {Category} from "@/interfaces/type";

export interface ProductInterface {
    id: number
    title: string
    image: string
    price: number
    description: string
    category: Category
}
