import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

const Menus = ({ item }) => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="menu__item">
          <div className="menu__img">
            <img src={item.image} alt={item.title}></img>
          </div>
          <div className="menu__detail">
            <div className="menu__title">{item.title}</div>
            <div className="menu__desc">{item.desc}</div>
            <div className="menu__harga">{item.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menus;
