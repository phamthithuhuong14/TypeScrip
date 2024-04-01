import { NavLink } from 'react-router-dom'

import logo from '../image/pnj.png'

const Header = () => {
  return (
    <>
      <ul className='nav'>
        <div className='search'>
          <img src='https://cdn-icons-png.flaticon.com/128/476/476863.png' alt='' />
          <p>Quan hệ cổ đông</p>
          <img src='https://cdn-icons-png.flaticon.com/128/854/854878.png' alt='' />
          <p>Cửa hàng</p>
          <img src='https://cdn-icons-png.flaticon.com/128/950/950237.png' alt='' />
          <p>569232004</p>
        </div>
        <div className='logo'>
          <img src={logo} alt='' />
        </div>

        <li>
          <NavLink to='/' className='nav-link'>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to='/login' className='nav-link'>
            Login
          </NavLink>
        </li>
        <li>
          <NavLink to='/register' className='nav-link'>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to='/admin' className='nav-link'>
            Admin
          </NavLink>
        </li>

        <div>
          <marquee behavior='' direction=''>
            Chào mừng đến với PNJ, chúng tôi sẵn sàng phục vụ quý khách hết mình❤️.
          </marquee>
        </div>
      </ul>
    </>
  )
}

export default Header
