import React, { useState } from "react"; // Nhập React và useState từ thư viện 'react'
import { Footer, Navbar } from "../components"; // Nhập các thành phần Footer và Navbar từ thư mục 'components'
import { Link, useNavigate } from "react-router-dom"; // Nhập Link từ thư viện 'react-router-dom'
import UserService from "../Service/UserService"; // Nhập UserService từ file UserService
import Swal from "sweetalert2";

const Register = () => {
  const [loading, setLoading] = useState(false); // Tạo state loading với giá trị ban đầu là false
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault(); // Ngăn chặn hành động mặc định của form khi nhấn submit

    // Kiểm tra điều kiện hợp lệ trước khi gửi dữ liệu
    const isValid = validateForm(e);

    if (isValid) {
        setLoading(true); // Đặt loading thành true khi bắt đầu gửi dữ liệu

        // Tạo đối tượng userData từ dữ liệu nhập vào từ form
        const userData = {
            name: e.target.elements.Name.value,
            username: e.target.elements.Email.value,
            phone: "", // Bổ sung dữ liệu điện thoại khi có
            password: e.target.elements.Password.value,
        };

        // Gọi phương thức createUser từ UserService để tạo người dùng mới
        UserService.createUser(userData)
            .then(response => {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: response.data,
                  showConfirmButton: false,
                  timer: 1500
                })
                console.log(response); // Log response nếu thành công
                navigate("/login")
            })
            .catch(error => {
                console.error(error); // Log error nếu có lỗi
            }).finally(() => {
                setLoading(false); // Đặt loading thành false sau khi hoàn thành xử lý
            })
    }
};

// Hàm kiểm tra tính hợp lệ của form
const validateForm = (e) => {
    // Kiểm tra nếu các trường không được bỏ trống
    if (!e.target.elements.Name.value || !e.target.elements.Email.value || !e.target.elements.Password.value) {
        console.log("Vui lòng điền đầy đủ thông tin"); // Hiển thị thông báo lỗi
        return false; // Trả về false nếu có lỗi
    }
    return true; // Trả về true nếu không có lỗi
};


 

  return (
    <>
      <Navbar /> {/* Sử dụng Navbar component */}
      <div className="container my-3 py-3">
        <h1 className="text-center">Đăng ký người dùng</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form onSubmit={onSubmit}> {/* Gọi hàm onSubmit khi form được gửi */}
              <div className="form my-3">
                <label htmlFor="Name">Tên hiển thị</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  placeholder="Tên đầy đủ hoặc tên tùy ý để hiển thị"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Tên người dùng</label>
                <input
                  type="text"
                  className="form-control"
                  id="Email"
                  placeholder="admin, user, etc."
                />
              </div>
              <div className="form  my-3">
                <label htmlFor="Password">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  placeholder="Mật khẩu tùy ý"
                />
              </div>
              <div className="my-3">
                <p>
                  Đã có tài khoản? Hãy tới trang{" "}
                  <Link
                    to="/login"
                    className="text-decoration-underline text-info"
                  >
                    đăng nhập
                  </Link>{" "}
                  để tiếp tục
                </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer /> {/* Sử dụng Footer component */}
    </>
  );
};

export default Register; // Xuất component Register
