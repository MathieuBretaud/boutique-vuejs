import data from './data/product'
import { reactive } from 'vue'
import type { ProductInterface } from './interfaces'

// const products = reactive<ProductInterface[]>(data)
// const cart = reactive<ProductInterface[]>([])
export const state = reactive<{
  products: ProductInterface[]
  cart: ProductCartInterface[]
}>({
  products: data,
  cart: []
})
