import Product from '~/Components/Product'
import instance from './index'
import { Tproduct } from '~/interfaces/product'
export const getAllProducts = async () => {
  try {
    const { data } = await instance.get('/products') //đuôi http
    return data
  } catch (error) {
    console.log(error)
  }
}
export const createProduct = async (Product: Tproduct) => {
  try {
    const { data } = await instance.post('/products', Product)
    return data
  } catch (error) {
    console.log(error)
  }
}
