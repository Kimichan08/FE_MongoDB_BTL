import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { Link, useParams } from "react-router-dom";
import Marquee from "react-fast-marquee";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import ProductService from "../Service/ProductService";
import { Footer, Navbar } from "../components";

const Product = () => {
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  let componentMounted = true;
  let componentMounted2 = true;
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async (id) => {
      setLoading(true);
      const response = await fetch(
        `http://localhost:8080/api/v1/product/${id}`
      );
      if (componentMounted2) {
        setProduct(await response.clone().json());
        console.log(await response.clone().json());
        console.log(product);
        setLoading(false);
      }

      return () => {
        componentMounted2 = false;
      };
    };
    getProduct(id);
  }, [id]);

  useEffect(() => {
    const getProducts = async () => {
      setLoading2(true);
      const response = await fetch("http://localhost:8080/api/v1/product");
      if (componentMounted) {
        setProducts(await response.clone().json());
        console.log(products);
        setLoading2(false);
      }

      return () => {
        componentMounted = false;
      };
    };

    getProducts();
  }, []);

  const Loading = () => {
    return (
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 py-3">
            <Skeleton height={400} width={400} />
          </div>
          <div className="col-md-6 py-5">
            <Skeleton height={30} width={250} />
            <Skeleton height={90} />
            <Skeleton height={40} width={70} />
            <Skeleton height={50} width={110} />
            <Skeleton height={120} />
            <Skeleton height={40} width={110} inline={true} />
            <Skeleton className="mx-3" height={40} width={110} />
          </div>
        </div>
      </div>
    );
  };

  const ShowProduct = () => {
    return (
      <div className="container my-5 py-2">
        <div className="row">
          <div className="col-md-6 col-sm-12 py-3">
            <img
              className="img-fluid"
              src={product.image}
              alt={product.name}
              width="400px"
              height="400px"
            />
          </div>
          <div className="col-md-6 col-md-6 py-5">
            <h4 className="text-uppercase text-muted">
              {product.category.name}
            </h4>
            <h1 className="display-5">{product.name}</h1>
            <h3 className="display-6 my-4">${product.price}</h3>
            <p className="lead">{product.description}</p>
            <button
              className="btn btn-outline-success"
              onClick={() => addProduct(product)}
            >
              Thêm vào giỏ hàng
            </button>
            <Link to="/cart" className="btn btn-danger mx-3">
              Đi đến giỏ hàng
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const Loading2 = () => {
    return (
      <div className="my-4 py-4">
        <div className="d-flex">
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
          <div className="mx-4">
            <Skeleton height={400} width={250} />
          </div>
        </div>
      </div>
    );
  };

  const ShowSimilarProduct = () => {
    return (
      <div className="py-4 my-4">
        <div className="d-flex">
          {products.map((item) => {
            return (
              <div key={item._id} className="card mx-4 text-center">
                <img
                  className="card-img-top p-3"
                  src={item.image}
                  alt="Card"
                  height={300}
                  width={300}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {item.name.substring(0, 15)}...
                  </h5>
                </div>
                <div className="card-body">
                  <Link
                    to={"/product/" + item._id}
                    className="btn btn-info m-1"
                  >
                    Chi tiết
                  </Link>
                  <button
                    className="btn btn-success m-1"
                    onClick={() => addProduct(item)}
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-5 py-5">
          <div className="d-none d-md-block">
            <h2 className="">You may also Like</h2>
            <Marquee pauseOnHover={true} pauseOnClick={true} speed={50}>
              {loading2 ? <Loading2 /> : <ShowSimilarProduct />}
            </Marquee>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
