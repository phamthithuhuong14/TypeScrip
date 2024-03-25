import instance from './index'
export const getAllProducts = async () => {
  try {
    const { data } = await instance.get('/products') //đuôi http
    return data
  } catch (error) {
    console.log(error)
  }
}
