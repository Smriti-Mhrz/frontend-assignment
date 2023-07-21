import React, { useState, useEffect } from "react";
import { Product } from "../components/Product";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Button } from "../components/Button";

const collectionList = [
  "men's clothing",
  "jewelery",
  "electronics",
  "women's clothing",
];
export const ProductPage = () => {
  const [productInfo, setProductInfo] = useState({});
  const [productCategory, setProductCategory] = useState([]);

  const productDetailFetching = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductInfo(data);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSubmit = (e) => {
      e.preventDefaultValue();
    setProductCategory(e.target.value);
  };
  const handleChange = (e) => {};
  useEffect(() => {
    console.log(productInfo);
    productDetailFetching();
  }, []);
  return (
    <div className="productpage__wrapper">
      <h2>Available Products</h2>
      <div className="productpage-search">
        <form onSubmit={handleSubmit}>
          <select id="productSelect">
            <option value="men's clothing">Men's Clothing</option>
            <option value="jewelery">Jewelery</option>
            <option value="electronics">Electronics</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <Button name="Submit" type="Submit" />
        </form>
        <div className="box">
        {collectionList
          .filter((item) => {
            return item.category === productCategory;
          })
          .map((item) => {
            return (
              <>
                <div className="display-singleImage" key={item.title}>
                  <div className="product-image">
                    <img src={item.image} alt="furniture" />
                  </div>
                  <p>{item.title}</p>
                  <p>{item.rating.rate}</p>
                  <span>{item.price}</span>
                </div>
              </>
            );
          })}
          </div>
                  {/* <Product
                    image={productInfo[6]?.image}
                    title={productInfo[6]?.title}
                    desc={productInfo[6]?.description}
                    price={productInfo[6]?.price}
                  />
                </div>
                <div className="box">
                  <Product
                    image={productInfo[2]?.image}
                    title={productInfo[2]?.title}
                    desc={productInfo[2]?.description}
                    price={productInfo[2]?.price}
                  />
                </div> */}
        {/* {productInfo.map((option) => {
          <div key={option.category} value={option.category}>
            <Product image={option.image} title={option.title} />{" "}
          </div>;
        })} */}
        {/* <input type="text" placeholder="Search Items....." /> */}
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} /> */}
      </div>

      {/* .....List for searching..... */}
      <div className="productpage-list">
        {/* <div className="list-box"> */}
        {/* {collectionList.map((item, index) => {
          return (
            <NavLink
              className="active"
              key={index}
              onClick={(e) => getproductCategory(e, item)}
            >
              {item}
            </NavLink>
          );
        })} */}
      </div>

      {/* .....Display list acc to searched item... */}
      <div className="productpage-display">
        
        {collectionList
          .filter((item) => {
            return item.category === productCategory;
          })
          .map((item) => {
            return (
              <>
                <div className="display-singleImage" key={item.title}>
                  <div className="product-image">
                    <img src={item.image} alt="furniture" />
                  </div>
                  <p>{item.title}</p>
                  <p>{item.rating.rate}</p>
                  <span>{item.price}</span>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};
