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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRx_29nGBqqif0N5yqR3k0GpJjOVOL-PkC5w&s"
            className="card-img"
            alt="Strawberry"
          />

          <h6 className="card-title">Pistachios</h6>
          <p className="price">$8.00</p>

          <button onClick={() => toggleRecipe("first")}>
            {openRecipe.first ? "Hide benefits" : "Show benefits"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.first ? "open" : ""}`}>
            <div className="recipe-box">
              Pistachios support heart health, improve digestion, contain healthy fats,
              and provide vitamin B6 which helps the nervous system and energy balance.
            </div>
          </div>

          <button className="cart-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>

        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/W_Nuss_Gr_99.jpg/500px-W_Nuss_Gr_99.jpg"
            className="card-img"
            alt="Walnut"
          />

          <h6 className="card-title">Walnut</h6>
          <p className="price">$8.49</p>

          <button onClick={() => toggleRecipe("second")}>
            {openRecipe.second ? "Hide benefits" : "Show benefits"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.second ? "open" : ""}`}>
            <div className="recipe-box">
              Walnuts are rich in omega-3 fatty acids, support brain function,
              lower inflammation, stabilize cholesterol levels, and improve memory.
            </div>
          </div>

          <button className="cart-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>
        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9wSYhsFP_RsQgYAwNNVwgUKlM1LCXsEiffQ&s"
            className="card-img"
            alt="Dates"
          />

          <h6 className="card-title">Dates</h6>
          <p className="price">$4.99</p>

          <button onClick={() => toggleRecipe("third")}>
            {openRecipe.third ? "Hide benefits" : "Show benefits"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.third ? "open" : ""}`}>
            <div className="recipe-box">
              Dates give quick natural energy, support healthy digestion due to fiber,
              strengthen bones with calcium and magnesium, improve heart and muscle
              function thanks to potassium, boost immunity with antioxidants, and help
              the brain with vitamins B6 and minerals.
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
