import React from "react";
import "./Raspberry.css";

import barry from "../../SVG/barry.svg";
import barry1 from "../../SVG/barry1.svg";

function Raspberry() {
    return (
        <section className="raspberry">

            <div className="raspberry-hero">
                <img src={barry} alt="Black Raspberry" />
            </div>

            <div className="raspberry-info">
                <div className="info-left">
                    <h1>Black Raspberry</h1>
                    <p>
                        Established fact that a reader will be distracted by the readable
                        content of a page when looking a layout. The point of using Lorem
                        Ipsum is that it has a more-or-less normal distribution of letters.
                    </p>
                </div>

                <div className="info-right">
                    <p><span>Date :</span> December 4, 2022</p>
                    <p><span>Client :</span> Kevin Martin</p>
                    <p><span>Category :</span> Agriculture, Eco</p>
                    <p><span>Service :</span> Organic Products</p>
                </div>
            </div>

            <div className="raspberry-body">
                <img src={barry1} alt="Organic Products" />
                <span className="caption">The Organic Products</span>

                <h3>About The Farm:</h3>
                <p>
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years
                </p>

                <h3>How To Farm:</h3>
                <p>
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years
                </p>

                <h3>Conclusion:</h3>
                <p>
                    t is a long established fact that a reader will be distracted by the readable content of a page when looking a layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.

                    Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and auncover many web sites still in their infancy. Various versions have evolved over the years
                </p>
            </div>

        </section>
    );
}

export default Raspberry;