import { useEffect, useState } from 'react'
import {  useParams } from 'react-router-dom'
import instance from '~/Api'
import { Tproduct } from '~/interfaces/product'

type Props = {}

const ProductDetail = (props: Props) => {
  const { id } = useParams()
  const [products, setProducts] = useState<Tproduct | null>(null)
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await instance.get(`/products/${id}`)
      console.log(data)
      setProducts(data)
    }
    getProduct()
  }, [])
  return (
    <div>
    <h2>{products?.title}</h2>
    <img src={products?.thumbnail} alt={products?.title} />
    <div>{products?.images && products.images.map((item) => <img width={100} src={item} />)}</div>
    <p>Gia: {products?.price}</p>
    <p>Mo ta: {products?.description}</p>
  </div>
  )
}

export default ProductDetail
