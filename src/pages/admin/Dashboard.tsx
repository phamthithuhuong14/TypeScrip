import { Tproduct } from '~/interfaces/product'
import { Link } from 'react-router-dom'

type Props = { products: Tproduct[] }

const Dashboard = ({ products }: Props) => {
  console.log(products)
  return (
    <div>
      <h1>Hello Admin!</h1>
      <Link className='btn btn-primary' to='/admin/add'>
        Add new product
      </Link>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Price</th>
            <th>Thumbnail</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((i) => (
            <tr key={i.id}>
              <td>{i.id}</td>
              <td>{i.title}</td>
              <td>{i.price}</td>
              <td>
                <img width={160} src={i.thumbnail} alt={i.title} />
              </td>
              <td>{i.description}</td>
              <td>
                <button className='btn btn-warning'>Edit</button>
                <button className='btn btn-danger'>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Dashboard
