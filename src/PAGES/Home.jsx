import React from "react";
import "../STYLES/home.css";
import "../COMPONENTS/Homemain/Homemain"
import "../COMPONENTS/Homeban/Homeban"




import home from "../SVG/home.svg";
import home1 from "../SVG/home1.svg";
import home2 from "../SVG/home2.svg";
import home3 from "../SVG/home3.svg";
import or from "../SVG/or.svg";
import or1 from "../SVG/or1.svg";
import Homemain from "../COMPONENTS/Homemain/Homemain";
import Homeban from "../COMPONENTS/Homeban/Homeban";






function Home() {
  return (
    <main className="home">

      <section className="hero">
        <img src={home} alt="hero" className="hero-img" />

        <div className="hero-text">
          <span>100% 𝑁𝑎𝑡𝑢𝑟𝑎𝑙 𝐹𝑜𝑜𝑑</span>

          <h1>
            Choose the best <br />
            healthier way <br />
            of life
          </h1>

          <button>Explore Now</button>
        </div>
      </section>

      <section className="banners">
        <div className="banner pink">
          <img src={home1} alt="" />
          <div className="banner-text">
            <span>𝑁𝑎𝑡𝑢𝑟𝑎𝑙!!</span>
            <h3>
              Get Garden <br /> Fresh Fruits
            </h3>
          </div>
        </div>

        <div className="banner green">
          <img src={home2} alt="" />
          <div className="banner-text">
            <span>𝑂𝑓𝑓𝑒𝑟!!</span>
            <h3>
              Get 10% off <br /> on Vegetables
            </h3>
          </div>
        </div>
      </section>

      <section className="about-bn">
        <img src={home3} alt="about" />

        <div className="about-text">
          <span className="section-label">𝐴𝑏𝑜𝑢𝑡 𝑈𝑠</span>

          <h2>
            We Believe in Working <br />
            Accredited Farmers
          </h2>

          <p>
            Simply dummy text of the printing and typesetting industry.
            Lorem Ipsum had ceased to be the industry's standard dummy text.
          </p>

          <div className="about-list">

            <div className="about-item">
              <div className="about-icon">
                <img src={or} alt="" />
              </div>
              <div>
                <h4>Organic Foods Only</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>

            <div className="about-item">
              <div className="about-icon">
                <img src={or1} alt="" />
              </div>
              <div>
                <h4>Quality Standards</h4>
                <p>
                  Simply dummy text of the printing and typesetting industry.
                </p>
              </div>
            </div>

          </div>

          <button className="about-btn">Shop Now</button>
        </div>
            

            <div> <Homemain/></div>

           <div> <Homeban/> </div>

</section>
    </main>
  );
}

export default Home;