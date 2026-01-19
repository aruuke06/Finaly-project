import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import "../STYLES/fruits.css";

export default function Fruits() {
  const [openRecipe, setOpenRecipe] = useState({
    first: false,
    second: false,
    third: false,
  });

  const toggleRecipe = (key) => {
    setOpenRecipe((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="breakfast-page">
      <h2 className="title">Fresh fruit</h2>

      <section className="breakfast-grid">

        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://i.pinimg.com/736x/52/72/3d/52723d87b2d0639480a833690f56aadc.jpg"
            className="card-img"
            alt="Strawberry"
          />

          <h6 className="card-title">Strawberry</h6>
          <p className="price">$5.00</p>

          <button onClick={() => toggleRecipe("first")}>
            {openRecipe.first ? "Hide benefits" : "Show benefits"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.first ? "open" : ""}`}>
            <div className="recipe-box">
              Strawberries are rich in vitamin C, antioxidants, and support healthy skin.
            </div>
          </div>

          <button className="cart-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>

        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://i.pinimg.com/736x/84/72/2c/84722ca871d423495059ad79782dfafe.jpg"
            className="card-img"
            alt="Apple"
          />

          <h6 className="card-title">Apple</h6>
          <p className="price">$3.49</p>

          <button onClick={() => toggleRecipe("second")}>
            {openRecipe.second ? "Hide benefits" : "Show benefits"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.second ? "open" : ""}`}>
            <div className="recipe-box">
              Apples improve digestion and are rich in fiber and antioxidants.
            </div>
          </div>

          <button className="cart-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>

        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://i.pinimg.com/736x/4c/0e/cc/4c0eccf7767ce276395e8628711fc06d.jpg"
            className="card-img"
            alt="Banana"
          />

          <h6 className="card-title">Banana</h6>
          <p className="price">$4.99</p>

          <button onClick={() => toggleRecipe("third")}>
            {openRecipe.third ? "Hide benefits" : "Show benefits"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.third ? "open" : ""}`}>
            <div className="recipe-box">
              Bananas give energy and are high in potassium, great for muscles.
            </div>
          </div>

          <button className="cart-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>

      </section>
    </div>
  );
}
