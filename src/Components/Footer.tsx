import React from 'react'
import logo from '../image/pnj.png'

const Footer = () => {
  return (
    <footer>
      <>
        <hr />
        <div className='footer'>
          <div>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>
            <div>
              <h5>© 2017 Công Ty Cổ Phần Vàng Bạc Đá Quý Phú Nhuận</h5>
              <p>170E Phan Đăng Lưu , P3, Q.Phú Nhuận, TP.Hồ Chí Minh</p>
              <p>
                Giấy chứng nhận đăng ký doanh nghiệp: 0569232004 do Sở
                <p>Kế hoạch & Đầu tư HCM cấp lần đầu ngày</p>
                <p>02/01/2004. Ngành, nghề kinh doanh</p>
              </p>
            </div>
            <div>
              <h5>Kết nối với chúng tôi</h5>
              <div className='ftkn'>
                <img src='https://cdn.pnj.io/images/image-update/footer/facebook.svg' alt='' />
                <img src='https://cdn.pnj.io/images/image-update/footer/instagram.svg' alt='' />
                <img src='https://cdn.pnj.io/images/image-update/footer/youtube.svg' alt='' />
                <img src='https://cdn.pnj.io/images/image-update/footer/email.svg' alt='' />
              </div>
            </div>
            <div>
              <h5>Quan tâm Zalo OA PNJ</h5>
              <p>Nhận các thông tin khuyến mãi hấp dẫn</p>
            </div>
          </div>
          <div className='ft1'>
            <h4>Về PNJ</h4>
            <p>Câu chuyện PNJ</p>
            <p>Tuyển dụng</p>
            <p>Xuất khẩu</p>
            <p>Kinh doanh sỉ</p>
            <p>Kiểm định kim cương</p>
            <p>Kinh doanh vàng miếng</p>
          </div>
          <div className='ft2'>
            <div>
              <h4>Dịch vụ khách hàng</h4>
              <p>Hướng dẫn do size trang sức</p>
              <p>Mua hàng trả góp</p>
              <p>Hướng dẫn mua hàng và thanh toán</p>
              <p>Cẩm nang sử dụng trang sức</p>
              <h4>Chính sách</h4>
              <p>Chính sách hoàn tiền</p>
              <p>Chính sách giao hàng</p>
              <p>Chính sách bảo hành thu đổi</p>
              <p>Chính sách khách hàng thân thiết</p>
              <p>Chính sách xử lý dữ liệu cá nhân</p>

              <h4>Phương thức thanh toán</h4>
              <div className='fttt'>
                <img src='https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/visa.svg' alt='' />
                <img src='https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/mastercard.svg' alt='' />
                <img src='https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/jcb.svg' alt='' />
                <img
                  src='https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/thanhtoantienmat.svg'
                  alt=''
                />
                <img src='https://www.pnj.com.vn/design/themes/pnjrovski/media/images/payments/tragop.svg' alt='' />
              </div>
            </div>
          </div>
        </div>
      </>
    </footer>
  )
}

export default Footer
