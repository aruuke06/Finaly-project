import React from "react";
import "./ouylity.css";

import kl from "../../SVG/kl.svg";
import kl1 from "../../SVG/kl1.svg";
import kl2 from "../../SVG/kl2.svg";
import kl3 from "../../SVG/kl3.svg";

function Ouylity() {
  return (
    <section className="quality">

      <div className="quality-banner">
        <img src={kl} alt="Quality banner" />
        <h1>Quality Standard</h1>
      </div>

      <div className="quality-main">
        <img src={kl1} alt="Organic service" />

        <div className="quality-text">
          <h2>Organic Store Services</h2>
          <p>
            It is a long established fact that a reader will be distracted by the
            readable content of a page when looking a layout. The point of using
            Lorem Ipsum is that it has a more-or-less normal distribution of letters,
            as opposed to using 'Content here, content here', making it look like
            readable English.
            <br /><br />
            Many desktop publishing packages and web page editors now use Lorem Ipsum
            as their default model text, and uncover many web sites still in their
            infancy. Various versions have evolved over the years.
          </p>
        </div>
      </div>

      <div className="quality-cards">

        <div className="quality-card">
          <img src={kl2} alt="Why Organic" />
          <div>
            <h4>Why Organic</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat.
              Page editors now use Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>

        <div className="quality-card reverse">
          <img src={kl3} alt="Speciality Produce" />
          <div>
            <h4>Speciality Produce</h4>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat.
              Page editors now use Lorem Ipsum as their default model text.
            </p>
          </div>
        </div>

      </div>

      <div className="quality-bottom">
        <h3>We farm your land</h3>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking a layout. The point of using
          Lorem Ipsum is that it has a more-or-less normal distribution of letters.
        </p>
      </div>

      <div className="quality-actions">
        <button>
          <span className="num">01</span>
          <span>Best quality support</span>
        </button>
        <button>
          <span className="num">02</span>
          <span>Money back guarantee</span>
        </button>
      </div>

    </section>
  );
}

export default Ouylity;