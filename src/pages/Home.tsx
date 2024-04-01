import { Tproduct } from '~/interfaces/product'
import { Link } from 'react-router-dom'
import Banner from '~/Components/banner'
import Product from '~/Components/Product'


type Props ={
  products: Tproduct[]
}
const Home = () => {
  return (
    <>
      <Banner />
      <div className="row">
        {
          Product.map(item => (
            <div className="col col-sm-12 col-md-6 col-lg-4">
              <div className="productCard">
                <Link to={`/shop/${item.id}`}>
                  <img src={item.thumbnail} alt={item.title} />
                </Link>
                <div className="productContent">
                  <h2>{item.title}</h2>
                  <p>Gia san pham: {item.price}</p>
                  <p>{item.description}</p>
                  <button className="btn btn-primary">Add to card</button>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      
    </>
  )
}
export default Home
