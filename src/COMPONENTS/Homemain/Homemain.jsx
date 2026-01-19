import React from "react";
import "./Homemain.css";

import { GoArrowRight } from "react-icons/go";
import { IoStarSharp } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";

import dow from "../../SVG/dow.svg";
import do1 from "../../SVG/do1.svg";
import bro from "../../SVG/bro.svg";
import bro1 from "../../SVG/bro1.svg";
import bro2 from "../../SVG/bro2.svg";
import bro3 from "../../SVG/bro3.svg";
import bro4 from "../../SVG/bro4.svg";

const products = [bro, bro1, bro2, bro3];

function Homemain() {
  return (
    <>
      <section
        className="testimonial"
        style={{ backgroundImage: `url(${dow})` }}
      >
        <div className="container">
          <div className="testimonial-box">
            <span className="label">Testimonial</span>
            <h2>What Our Customer Saying?</h2>

            <img src={do1} alt="user" className="avatar" />

            <div className="stars">
              <IoStarSharp /><IoStarSharp /><IoStarSharp />
              <IoStarSharp /><IoStarSharp />
            </div>

            <p>
              Simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard.
            </p>

            <h5>Sara Taylor</h5>
            <small>Consumer</small>
          </div>

          <div className="stats">
            <div className="stat">
              <h3>100%</h3>
              <p>Organic</p>
            </div>
            <div className="stat">
              <h3>285</h3>
              <p>Active Product</p>
            </div>
            <div className="stat">
              <h3>350+</h3>
              <p>Organic Orchads</p>
            </div>
            <div className="stat">
              <h3>25+</h3>
              <p>Years of Farming</p>
            </div>
          </div>
        </div>
      </section>

      <section className="offer">
        <div className="container">
          <div className="offer-head">
            <div>
              <span className="label">Offer</span>
              <h2>We Offer Organic For You</h2>
            </div>
            <button>
              View All Product <GoArrowRight />
            </button>
          </div>

          <div className="products">
            {products.map((img, i) => (
              <div className="product-card" key={i}>
                <span className="tag">Vegetable</span>
                <FaCartShopping className="cart" />
                <img src={img} alt="product" />
                <h6>Organic Product</h6>
                <p>
                  <span>$20.00</span> $13.00
                </p>
                <div className="rating">
                  <CiStar /><CiStar /><CiStar />
                  <CiStar /><CiStar />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="eco">
        <div className="container eco-wrap">
          <img src={bro4} alt="eco" />
          <div className="eco-text">
            <span className="label">Eco Friendly</span>
            <h2>Econis is a Friendly Organic Store</h2>

            <h6>Start with Our Company First</h6>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <h6>Learn How to Grow Yourself</h6>
            <p>Lorem ipsum dolor sit amet consectetur.</p>

            <h6>Farming Strategies of Today</h6>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homemain;