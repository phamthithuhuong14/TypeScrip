import { useForm } from 'react-hook-form'
import { Tproduct } from '~/interfaces/product'

type Props = {
  onAdd: (product: Tproduct) => void
}

const ProductAdd = ({ onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Tproduct>({})
  const onSubmit = (data: Tproduct) => {
    onAdd(data)
  }
  return (
    <div>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h1>Them san pham</h1>
        <div className='form-group'>
          <label htmlFor='title'>title</label>
          <input
            className='form-control'
            type='text'
            placeholder='title...'
            id='title'
            {...register('title', { required: true })}
          />
          {errors.title && <span className='text-danger'>This field is required</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='price'>price</label>
          <input
            className='form-control'
            type='number'
            placeholder='price...'
            id='price'
            {...register('price', { required: true })}
          />
          {errors.price && <span className='text-danger'>This field is required</span>}
        </div>
        <div className='form-group'>
          <label htmlFor='description'>description</label>
          <input
            className='form-control'
            type='text'
            placeholder='description...'
            id='description'
            {...register('description')}
          />
        </div>
        <button className='btn btn-primary w-100'>Add product</button>
      </form>
    </div>
  )
}

export default ProductAdd
