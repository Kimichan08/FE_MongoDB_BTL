import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="https://9xgarden.com/wp-content/uploads/2021/01/nguong-anh-sang-danh-cho-nguoi-moi-choi-9x-garden.jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h5 className="card-title fs-1 text badge badge-light text-dark font-weight-bolder">
                Mang Không Gian Xanh Đến Bên Bạn
              </h5>
              <p className="card-title fs-5 d-none d-sm-block badge badge-light text-dark font-weight-bolder">
              Trang trí cây xanh theo phong cách tự nhiên với những loại cây có hình thái tự nhiên và không gian sống gần gũi với thiên nhiên.
              </p>
              <p className="card-text fs-5 d-none d-sm-block badge badge-light text-dark font-weight-bolder">
              Sử dụng các loại cây có hình thái đơn giản, gọn gàng và phối hợp với kiến trúc hiện đại của căn nhà.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
