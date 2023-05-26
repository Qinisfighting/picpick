import "../App.css";
import React, { useState, useContext } from "react";
import { Context } from "../Context";
import PropTypes from "prop-types";
import trash_bin from "../assets/trash_bin.png";

export default function ItemInCart({img}) {
  //mean shit! forget {} for img and debugged for 2 hours...
  const [hovered, setHovered] = useState(false);
  const { removeFromCart, counter } = useContext(Context);

  const handleMouseEnter = () => {
    setHovered(true);
  };
  const handleMouseLeave = () => {
    setHovered(false);
  };

  const itemStyle = {
    marginLeft: 0,
    border: hovered ? "2px ridge lightgray" : "1px solid lightgray",
    height: "auto",
    width: "100%",
    borderRadius: 8,
    padding: 15,
    position: "relative"
  };

  const imageStyle = {
    float: "left",
    width: 80,
    height: 80,
    objectFit: "fit",
    borderRadius: 3,
    boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.644)"
  };

  const trashBinStyle = {
    float: "right",
    width: 30,
    paddingTop: 30,
    cursor: "pointer"
  };

  return (
    <div
      style={itemStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img alt="img" src={img.url} style={imageStyle} />

      {counter(img.id, img.quantity)}
      <img
        src={trash_bin}
        alt="trash_bin"
        style={trashBinStyle}
        onClick={() => removeFromCart(img.id)}
      ></img>
    </div>
  );
}

ItemInCart.propTypes = {
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  })
};
