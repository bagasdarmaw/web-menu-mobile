import React from "react";

const Header = () => {
  return (
    <div className="container">
      <div className="app__center">
        <img
          src="https://puu.sh/IPwZL/d79a6a25da.png"
          className="logo__app"
          style={{ width: 110, marginTop: 20, marginBottom: 20 }}
        />
        <div className="app__name">
          <h4>Kedai Kopi Jangka</h4>
        </div>
        <div className="app__cafe-detail">
          <h6 style={{ color: "#5559", fontWeight: "bold", fontSize: 14 }}>
            Jl.Ahmad Yani No.321 Bogor Utara
          </h6>
          <a href="tel:08138279985">08138279985</a>
          <a href="mailto:kedaikopi.jangka@gmail.com">
            kedaikopi.jangka@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
