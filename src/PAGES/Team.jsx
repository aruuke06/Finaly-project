import React from "react";
import "../STYLES/team.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
 import "../COMPONENTS/Food/Food"


import team from "../SVG/team.svg";
import about9 from "../SVG/about9.svg";
import about10 from "../SVG/about10.svg";
import about11 from "../SVG/about11.svg";
import team1 from "../SVG/team1.svg";
import team2 from "../SVG/team2.svg";
import team3 from "../SVG/team3.svg";

function Team() {
  return (
    <section className="zoo">
      <div className="lion">
        <img src={team} alt="" />
        <h1>Our Team</h1>
      </div>

      <div className="owl">
        <span>Team</span>
        <h2>Our Organic Experts</h2>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had
          ceased to been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      <div className="herd">
        <Link to="/food" className="fox">
          <img src={about9} alt="" />
          <div className="paw">
            <h4>Giovani Bacardo</h4>
            <span>Farmer</span>
            <div className="claws">
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>
        </Link>

        <div className="fox">
          <img src={about10} alt="" />
          <div className="paw">
            <h4>Marianne Loreno</h4>
            <span>Designer</span>
            <div className="claws">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="fox">
          <img src={about11} alt="" />
          <div className="paw">
            <h4>Riga Pelore</h4>
            <span>Farmer</span>
            <div className="claws">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="fox">
          <img src={team1} alt="" />
          <div className="paw">
            <h4>Keira Knightley</h4>
            <span>Farmer</span>
            <div className="claws">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="fox">
          <img src={team2} alt="" />
          <div className="paw">
            <h4>Scott Lawrence</h4>
            <span>Designer</span>
            <div className="claws">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>
        </div>

        <div className="fox">
          <img src={team3} alt="" />
          <div className="paw">
            <h4>Karen Allen</h4>
            <span>Farmer</span>
            <div className="claws">
              <FaInstagram />
              <FaFacebookF />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;