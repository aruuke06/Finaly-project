import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { GoHeartFill } from "react-icons/go";
import { useState } from "react";
import "../STYLES/breakfast.css";

export default function Breakfast() {
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

        {/* CARD 1 */}
        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://mrdjemiuszero.com/upload/medialibrary/20c/20ce77ac4428e4f0abb973ed23470038.png"
            className="card-img"
            alt="Stewed chicken"
          />

          <h6 className="card-title">Apple pancakes</h6>
          <p className="price">$6.99</p>

          <button onClick={() => toggleRecipe("first")}>
            {openRecipe.first ? "Hide recipe" : "Show recipe"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.first ? "open" : ""}`}>
            <div className="recipe-box">
              1 egg, room temperature <br />
              4 tablespoons rice flour <br />
              5 grams vegetable oil <br />
              sweetener to taste <br />
            </div>
          </div>

          <button className="cart-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>

        {/* CARD 2 */}
        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://mrdjemiuszero.com/upload/medialibrary/e39/e396d0e251549c3869514dc0e2f177fb.png"
            className="card-img"
            alt="Mushroom soup"
          />

          <h6 className="card-title">Low-calorie shawarma</h6>
          <p className="price">$10.49</p>

          <button onClick={() => toggleRecipe("second")}>
            {openRecipe.second ? "Hide recipe" : "Show recipe"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.second ? "open" : ""}`}>
            <div className="recipe-box">
              189 grams of thin Armenian lavash <br />
              100 grams of boiled chicken breast <br />
              59 grams of low-fat hard chees <br />
              50 grams of sour cream <br />
              Chinese cabbage, tomato, and cucumber to taste <br />
            </div>
          </div>


          <button className="cart-btn">
            Add to cart <PiShoppingCartSimpleFill />
          </button>
        </div>

        <div className="card">
          <GoHeartFill className="heart" />

          <img
            src="https://mrdjemiuszero.com/upload/medialibrary/71a/71aa6a3cdcc48f8a080954a2b31394dc.png"
            className="card-img"
            alt="Healthy cabbage soup"
          />

          <h6 className="card-title">Oatmeal pancake</h6>
          <p className="price">$9.99</p>

          <button onClick={() => toggleRecipe("third")}>
            {openRecipe.third ? "Hide recipe" : "Show recipe"}
          </button>

          <div className={`recipe-wrapper ${openRecipe.third ? "open" : ""}`}>
            <div className="recipe-box">
              3 tablespoons of rolled oats <br />
              60 milliliters of milk <br />
              1 egg <br />
              - any filling of your choice: for example, berries, fruit, jam, cream, or fish and cream cheese.
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
