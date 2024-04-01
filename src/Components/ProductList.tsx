import { useEffect, useState } from 'react'
import { Tproduct } from '~/interfaces/product'
import instance from '~/Api'
import { getAllProducts } from '~/Api/product'
import { Link } from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState<Tproduct[]>([])
  useEffect(() => {
    // //cách 1
    // fetch('http://localhost:3000/products')
    // .then(res=>res.json())
    // .then(data => {setProducts(data)})

    //cách 2: nâng cao
    // (async () =>{
    //   const data = await getAllProducts()
    //   setProducts(data)
    // })()

  
    //cách 3
    const getAllProducts = async () => {
      try {
        const { data } = await instance.get('/products')
        setProducts(data)
      } catch (error) {
        console.log(error)
      }
    }
    getAllProducts()
  }, [])
  return (
    <div className='product'>
      {products.map((product: Tproduct) => (
        <div key={product.id}>
          <img width={150} src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  )
}

export default ProductList
