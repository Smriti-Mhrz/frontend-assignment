import React from "react";
import { Link } from "react-router-dom";
import  ReactStars from "react-stars";


export const SingleProduct = () => {
  return (
    <div className="main-product-wrapper py-5 home-wrapper-2">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="main-product-image">
              <div>
                <img src="/image/digitalwatch.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="main-product-details">
              <div className="border-bottom">
                <h3 className="title"> Digital watch make your life easy</h3>
              </div>
              <div className="border-bottom py-3">
                <p className="price">$ 100</p>
              </div>
              <div className="d-flex align-items-center gap-10">
                <ReactStars
                  count={5}
                  size={24}
                  value={3}
                  edit={false}
                  activeColor="#ffd700"
                />
                <p className="mb-0">(2 reviews)</p>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Type:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Brand:</h3>
                  <p className="product-data">Apple</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Category:</h3>
                  <p className="product-data">Watch</p>
                </div>
                <div className="d-flex gap-10 align-items-center my-2">
                  <h3 className="product-heading">Tags:</h3>
                  <p className="product-data">Watch </p>
                </div>
                <div className="d-flex gap-15 align-items-center flex-row mt-2 mb-3">
                  <h3 className="product-heading">Quantity:</h3>
                  <div className="">
                    <input
                      type="number"
                      className="form-control"
                      min={1}
                      max={10}
                      style={{ width: "70px" }}
                    />
                  </div>
                  <div className="d-flex align-items-center gap-30 ms-5">
                    <a href="/cart">
                      <button className="button border-0" type="submit">
                        Add to cart
                      </button>
                    </a>
                    <Link to="">
                      <button className="button border-0" type="submit">
                        Buy Now
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="col-12">
                  <h4>Description</h4>
                  <div className="bg-white p-3">
                    <p>
                      description of the product is right here, details quality
                      of the product is described here along with its photo
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
