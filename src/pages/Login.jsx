import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import UserService from '../Service/UserService';
import Swal from "sweetalert2";

const Login = () => {
    const navigate = useNavigate(); // Corrected variable name
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState(''); // Corrected function name
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        UserService.Login(username, password)
            .then((response) => {
                console.log(response);
                localStorage.setItem("accessToken", response.data.token);
                window.dispatchEvent(new Event("storage"));
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "Đăng nhập thành công !",
                  showConfirmButton: false,
                  timer: 1500
                })
                console.log(response); // Log response nếu thành công
                navigate('/'); // Corrected navigation usage
                // window.location.reload(true);
            })
            .catch((error) => {
                console.log(error);

                if (error.response.status === 400) {
                    console.log(error);
                } else {
                    console.log("sai thong tin");
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Đăng nhập</h1>
                <hr />
                <div className="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form onSubmit={handleSubmit}> {/* Added onSubmit event */}
                            <div className="my-3">
                                <input
                                    id="username"
                                    type="text"
                                    className="form-control"
                                    placeholder="Tên username của bạn"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)} // Added onChange event
                                />
                            </div>
                            <div className="my-3">
                                <input
                                    id="password"
                                    type="password"
                                    className="form-control"
                                    placeholder="Mật khẩu dùng để xác thực"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)} // Added onChange event
                                />
                            </div>
                            <div className="my-3">
                                <p>Mới vào đây? Hãy <Link to="/register" className="text-decoration-underline text-info">đăng ký</Link> trước</p>
                            </div>
                            <div className="text-center">
                                <button className="my-2 mx-auto btn btn-primary" type="submit">
                                    Đăng nhập
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;
