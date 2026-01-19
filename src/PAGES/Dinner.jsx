import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import "../STYLES/breakfast.css";

export default function Dinner() {
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
      <h2 className="title">Dinner</h2>

      <section className="breakfast-grid">

        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://i.pinimg.com/736x/18/f3/a7/18f3a70698a5ef6ed2a1bcaffd9cdbd2.jpg"
            className="card-img"
            alt="Stewed chicken"
          />

          <h6 className="card-title">Stewed chicken with vegetables</h6>
          <p className="price">$10.99</p>

          <button onClick={() => toggleRecipe("first")}>
            {openRecipe.first ? "Hide recipe" : "Show recipe"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.first ? "open" : ""}`}>
            <div className="recipe-box">
              Chicken - 600 g <br />
              Cauliflower - 400 g <br />
              Onion - 1 <br />
              Carrot - 1 <br />
              Bell pepper - 1 <br />
              Tomatoes - 2 <br />
              Garlic - 3 cloves <br />
              Seasoning, pepper, dill
            </div>
          </div>

          <button className="cart-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>

        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://i.pinimg.com/1200x/4a/10/af/4a10af9989ccde657750eaa70b6fd638.jpg"
            className="card-img"
            alt="Mushroom soup"
          />

          <h6 className="card-title">Mushroom soup with champignons</h6>
          <p className="price">$12.49</p>

          <button onClick={() => toggleRecipe("second")}>
            {openRecipe.second ? "Hide recipe" : "Show recipe"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.second ? "open" : ""}`}>
            <div className="recipe-box">
              Mushrooms - 250 g <br />
              Potatoes - 3 <br />
              Carrots - 1 <br />
              Onion - 1 <br />
              Vegetable oil - 2 tbsp
            </div>
          </div>

          <button className="cart-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>

        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://i.pinimg.com/1200x/c1/45/48/c14548bb64dad7117259bf688dc4121d.jpg"
            className="card-img"
            alt="Healthy cabbage soup"
          />

          <h6 className="card-title">Healthy cabbage soup</h6>
          <p className="price">$12.99</p>

          <button onClick={() => toggleRecipe("third")}>
            {openRecipe.third ? "Hide recipe" : "Show recipe"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.third ? "open" : ""}`}>
            <div className="recipe-box">
              Chicken - 350 g <br />
              Carrots - 1 <br />
              Onion - 1 <br />
              Cabbage - 200 g <br />
              Water - 700 ml <br />
              Salt, pepper
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
