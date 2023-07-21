import React from "react";
import  ReactStars from "react-stars";
import wallpaper from "../assets/images/wallpaper-two.jpg";
export const Product = ({image,title,desc,price}) => {
    const ratingChanged = (newRating) => {
        console.log(newRating)
      }
  return (
    <div className="product__wrapper">
      <div className="product-image">
        <img src={image} alt="wallpaper" />
      </div>
      <div className="product-description">
        <h4>{title}</h4>
        <p>
          {desc}{" "}
        </p>

        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          color2={"#ffd700"}
        />
        <span>{price}</span>
      </div>
    </div>
  );
};
