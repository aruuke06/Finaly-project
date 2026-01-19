import React from "react";
import "./Homeban.css";

import { GoArrowRight } from "react-icons/go";
import { IoPersonCircleOutline } from "react-icons/io5";

import bro5 from "../../SVG/bro5.svg";
import bro6 from "../../SVG/bro6.svg";
import bro7 from "../../SVG/bro7.svg";
import bro8 from "../../SVG/bro8.svg";
import bro9 from "../../SVG/bro9.svg";

const categories = [
  { img: bro5, title: "Organic Juice" },
  { img: bro6, title: "Organic Food" },
  { img: bro7, title: "Nuts Cookies" },
];

const news = [bro8, bro9];

function Homeban() {
  return (
    <>
      <section className="categories">
        <div className="container categories-wrap">
          {categories.map((item, i) => (
            <div className="category-card" key={i}>
              <img src={item.img} alt="" />
              <button>{item.title}</button>
            </div>
          ))}
        </div>
      </section>

      {/* ===== News ===== */}
      <section className="news">
        <div className="container">
          <div className="news-head">
            <div>
              <span className="label">News</span>
              <h2>Discover weekly content about organic food</h2>
            </div>
            <button>More News</button>
          </div>

          <div className="news-list">
            {news.map((img, i) => (
              <div className="news-card" key={i}>
                <img src={img} alt="" />
                <span className="date">25 Nov</span>

                <div className="news-body">
                  <h6><IoPersonCircleOutline /> By Raich Card</h6>
                  <h4>Organic Food Benefits</h4>
                  <p>Lorem Ipsum is simply dummy text.</p>
                  <button>
                    Read More <GoArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Homeban;