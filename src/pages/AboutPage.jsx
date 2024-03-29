import React from 'react'
import {Footer, Navbar} from "../components";

const AboutPage = () => {
  return (
      <>
        <Navbar/>
        <div className="container my-3 py-3">
          <h1 className="text-center">VỀ CHÚNG TÔI</h1>
          <hr/>
          <div className="container mt-5">
            <h3>Về Tree Bonsai</h3>
            <p>Với kế hoạch mở rộng và phát triển hoạt động kinh doanh lĩnh vực cây xanh trên toàn quốc, Ego garden tuyển dụng nhân sự ở các vị trí khác nhau, tạo việc làm và cơ hội phát triển nghề nghiệp với thu nhập hấp dẫn.</p>

            <p>Đặc biệt rất phù hợp với các bạn có tình yêu với cây cối, thích làm việc trong môi trường xanh, đồng nghiệp tốt, quản lý giỏi để phát triển kỹ năng trở thành người bán hàng vĩ đại nhất.</p>
            <p>Địa chỉ làm việc: 22 Xuân Thủy, Cầu Giấy, Hà Nội.</p>
            <h4>I. VỊ TRÍ TUYỂN DỤNG:</h4>
            <p>– Kế toán nội bộ: 1 nhân sự (mức lương 6,5-8tr/tháng).</p>
            <p>– Nhân viên bán hàng/CSKH: 4 nhân sự (lương 6-8tr/tháng). </p>
            <p>– Nhân viên Partime (3 ca từ 8-19h hàng ngày): 4 nhân sự (lương 14-16k/h). </p>
            <p>*Mức lương tuỳ theo năng lực của ứng viên, khi phỏng vấn sẽ trao đổi cụ thể hơn.</p>
            <h4>II. YÊU CẦU CHUNG</h4>
            <p>1. Đối với kế toán: </p>
            <p>– Tốt nghiệp Đại học trở lên, chuyên ngành kế toán/kiểm toán.</p>
            <p>– Yêu cầu kinh nghiệm trên 1 năm, sử dụng thành thạo 1 số phần mềm kế toán thông dụng.</p>
            <p>– Quản lý, đối chiếu công nợ, lập báo cáo thu chi hàng tháng của công ty. </p>
            <p>– Nhanh nhẹn, thật thà, ý thức làm việc nhóm tốt.</p>
            <p>2. Đối với nhân viên bán hàng/CSKH: </p>
            <p>– Kỹ năng giao tiếp tốt, thái độ phục vụ tốt, năng động, nhiệt tình, chăm chỉ.</p>
            <p>– Yêu thích cây cảnh là một lợi thế.</p>
            <p>– Ưu tiên các bạn có kinh nghiệm bán hàng online.</p>
            <p>3. Đối với nhân viên Partime:</p>
            <p>– Không yêu cầu kinh nghiệm, ca làm việc linh động. </p>
            <p>– Hỗ trợ bán hàng, chăm sóc khách hàng, sắp xếp, chăm sóc cây.</p>
            <p>– Thời gian làm việc tối thiểu 4 buổi/tuần.</p>
            <h4>III. QUYỀN LỢI</h4>
            <p>– Thu nhập cạnh tranh, xét duyệt tăng lương theo năng lực.</p>
            <p>– Hưởng các chế độ BHXH, BHYT, BHTN đầy đủ theo luật định.</p>
            <p>– Có cơ hội đào tạo, phát triển năng lực cá nhân trong môi trường chuyên nghiệp, năng động.</p>
            <p>– Đào tạo từ A-Z về các phần mềm quản lý, kỹ năng bán hàng, chốt sale, Telesale…</p>
          </div>

          <h2 className="text-center py-4">SẢN PHẨM CỦA CHÚNG TÔI</h2>
          <div className="row">
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img className="card-img-top img-fluid"
                     src="https://media.loveitopcdn.com/6415/151908-cay-ngoc-bich-03.jpg"
                     alt="" height={160}/>
                <div className="card-body">
                  <h5 className="card-title text-center">Cây Ngọc Bích</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img className="card-img-top img-fluid"
                     src="https://vuoncayviet.com/data/items/868/trau-ba-sua-2-600x600.jpg"
                     alt="" height={160}/>
                <div className="card-body">
                  <h5 className="card-title text-center">Cây Trầu Bà Sữa</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img className="card-img-top img-fluid"
                     src="https://media.loveitopcdn.com/6415/cay-truc-phu-quy-de-ban.jpg"
                     alt="" height={160}/>
                <div className="card-body">
                  <h5 className="card-title text-center">Cây Trúc Phú Quý</h5>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 mb-3 px-3">
              <div className="card h-100">
                <img className="card-img-top img-fluid"
                     src="https://media.loveitopcdn.com/6415/151706-cay-tai-loc-02.jpg"
                     alt="" height={160}/>
                <div className="card-body">
                  <h5 className="card-title text-center">Cây Tài Lộc</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </>
  )
}

export default AboutPage