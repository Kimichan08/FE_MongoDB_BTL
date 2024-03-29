import React from "react";
import { FaMapMarkerAlt,FaPhone, FaEnvelope,FaFacebook,FaFacebookMessenger,FaInstagram} from "react-icons/fa";

const Footer = () => {
  return (
      <>
      <div>
       <hr/>
            <div className="bg-footer">
                <div className="container pt-5">
                    <div className="row">
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="footer-infor">
                                <h4 className="pb-4">Về chúng tôi</h4>
                                <p>Cây cảnh mini</p>
                                <p>Cây để bàn</p>
                                <p>Cây phong thủy</p>
                                <p>Cây văn phòng</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="footer-infor">
                                <h4 className="pb-4">Chính sách</h4>
                                <p>Chính sách hoàn trả và thanh toán</p>
                                <p>Chính sách vận chuyển</p>
                                <p>Chính sách bảo mật</p>
                                <p>Hợp tác kinh doanh</p>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="footer-infor">
                                <h4 className="pb-4">Hỗ trợ khách hàng</h4>
                                <p>Hướng dẫn đặt hàng</p>
                                <p>Giá hợp ní</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-3 col-sm-6">
                            <div className="footer-infor">
                                <h4 className="pb-4">Liên hệ</h4>
                                <div className="d-flex">
                                    <FaMapMarkerAlt className="footer-infor-icon m-2"/>
                                    <p className="footer-p">Tầng 6, 266 Đội Cấn, Ba Đình, Hà Nội</p>
                                </div>
                                <div className="d-flex">
                                    <FaPhone className="footer-infor-icon m-2"/>
                                    <p className="footer-p">1900 6750</p>
                                </div>
                                <div className="d-flex">
                                    <FaEnvelope className="footer-infor-icon m-2"/>
                                    <p  className="footer-p">treebonsai.deploy@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-link">
                <div className="container">
                    <h4 className="text-center text-white pt-2">Kết nối với chúng tôi</h4>
                    <div className="text-white text-center icons">
                        <FaFacebook className="mr-5"/>
                        <FaFacebookMessenger className="mr-5"/>
                        <FaInstagram/>
                    </div>
                </div>
            </div>
        </div>
        <footer className="mb-0 text-center">
          <div className="d-flex align-items-center justify-content-center pb-5">
            <div className="col-md-6">
              <p className="mb-3 mb-md-0">WELCOME TO THE {" "}
                <a href="https://github.com/Kimichan08" className="text-decoration-underline text-dark fs-5" target="_blank"
                   rel="noreferrer">KIMICHAN WEB</a>
              </p>
              <a className="text-dark fs-4" href="https://github.com/Kimichan08" target="_blank" rel="noreferrer">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
        </footer>
      </>
  );
};

export default Footer;
