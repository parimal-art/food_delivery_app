import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css"

const Header=()=>{
    return(
        <div className="header">
            <div className="logo-container">
              <img className="logo" src="https://s3.amazonaws.com/cdn.designcrowd.com/blog/39-Food-Delivery-Logos-That-Will-Leave-You-Hungry-For-More/food-delivery-by-simplepixelsl-brandcrowd.png"/>
            </div>
            <div className="nav-items">
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
              </ul>
            </div>

        </div>
    )
};

const Search=()=>{
  return(
    <h1>Search Here...</h1>
  )
}

const Cart=()=>{
  return(
    <div className="res-card">
      <img className="cart-Img"src="https://www.pavaniskitchen.com/wp-content/uploads/2021/04/egg-biryani-recipe-1024x1024.jpg" />
      <h3>Meghna Foods</h3>
      <h4>Biriyani, North Indian, Asian</h4>
      <h4>4.4 Stars</h4>
      <h4>38 Minutes</h4>
    </div>
  )
}

const App = () => {
  return(
    <div className="body">
      <Header/>
      <Search/>
      <div className="cartAll">
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
        <Cart/>
      </div>
    </div>
  )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

