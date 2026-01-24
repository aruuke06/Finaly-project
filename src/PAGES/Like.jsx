import React, { useState } from "react";
import "../STYLES/like.css"
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { FaTrashAlt } from "react-icons/fa";

export default function Like() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Walnuts",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRhnAkZfhDC9c_et_PqUZwj88k3hYtQM8BvA&s",
      fats: "65 g fats",
      price: "$14.20",
    },
    
  ]);

  const removeItem = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <section className="like-wrapper">
      {products.map((item) => (
        <div className="like-card" key={item.id}>
          
          <div className="card-header">
            <h5>{item.title}</h5>

            <button
              className="icon-btn delete"
              onClick={() => removeItem(item.id)}
            >
              <FaTrashAlt />
            </button>
          </div>

          <img src={item.img} alt={item.title} />

          <h6>{item.fats}</h6>
          <p className="price">{item.price}</p>

          <button className="add-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>
      ))}
    </section>
  );
}
