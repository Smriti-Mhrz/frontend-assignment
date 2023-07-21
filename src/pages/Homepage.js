import React, {useEffect, useState} from "react";
import wallpaper from "../assets/images/wallpaper-one.jpg";
import { Button } from "../components/Button";
import { BackgroundChanger } from "../components/BackgroundChanger";
import { ServiceCard } from "../components/ServiceCard";
import {
  faHeadphones,
  faShieldHalved,
  faToolbox,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { Product } from "../components/Product";
import { useNavigate } from "react-router-dom";

export const Homepage = () => {
  const [productInfo, setProductInfo] = useState({});
  const navigate= useNavigate();
  const productDetailFetching = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );
      const data = await response.json();
      setProductInfo(data);
    } catch (e) {
      console.log(e);
    }
  };

  const handleProductClick=(e)=>{
    navigate('/products/SingleProduct/:id');
  }
  useEffect(() => {
    console.log(productInfo);
    productDetailFetching();
  }, []);
  return (
    <div className="homepage__wrapper">
      {/* ........ Background Wallpaper.......... */}
      <div className="homepage-background">
        <img src={wallpaper} alt="bakcground image" />
        {/* <BackgroundChanger/> */}
        {/* <div className='overlay-image'></div> */}
        <div className="homepage-text">
          <h1>Online Shopping</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </p>
          <Button name="read more" />
        </div>
      </div>
      {/* .......... Service Section.............. */}
      <div className="homepage-servicesection">
        <ServiceCard
          icons={faTruckFast}
          title="Free Shipping"
          desc="From all orders over $100"
        />
        <ServiceCard
          icons={faHeadphones}
          title="Support 24/7"
          desc="Shop with an expert"
        />
        <ServiceCard
          icons={faToolbox}
          title="Affordable Prices"
          desc="Get Factory direct price"
        />
        <ServiceCard
          icons={faShieldHalved}
          title="Secure Payments"
          desc="100% Protected Payment"
        />
      </div>

      {/* ....... Featured Collection Section...... */}
      <div className="homepage__feature">
        <h2>Our Featured Collection</h2>
        <div className="feature-box">
            {/* .......Fetching data from API....... */}
                <div className="box">
                  <Product
                    image={productInfo[0]?.image}
                    onClick={handleProductClick}
                    title={productInfo[0]?.title}
                    desc={productInfo[0]?.description.slice(0,80)}
                    price={productInfo[0]?.price}
                  />
                </div>
                <div className="box">
                  <Product
                    image={productInfo[6]?.image}
                    title={productInfo[6]?.title}
                    desc={productInfo[6]?.description.slice(0,80)}
                    price={productInfo[6]?.price}
                  />
                </div>
                <div className="box">
                  <Product
                    image={productInfo[2]?.image}
                    title={productInfo[2]?.title}
                    desc={productInfo[2]?.description.slice(0,80)}
                    price={productInfo[2]?.price}
                  />
                </div>
                <div className="box">
                  <Product
                    image={productInfo[3]?.image}
                    title={productInfo[3]?.title}
                    desc={productInfo[3]?.description.slice(0,80)}
                    price={productInfo[3]?.price}
                  />
                </div>
                <div className="box">
                  <Product
                    image={productInfo[8]?.image}
                    title={productInfo[8]?.title}
                    desc={productInfo[8]?.description.slice(0,80)}
                    price={productInfo[8]?.price}
                  />
                </div>
                <div className="box">
                  <Product
                    image={productInfo[15]?.image}
                    title={productInfo[15]?.title}
                    desc={productInfo[15]?.description.slice(0,80)}
                    price={productInfo[15]?.price}
                  />
                </div>
                
            
        </div>
      </div>
    </div>
  );
};
