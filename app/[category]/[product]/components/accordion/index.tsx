import "./style.scss";

import React, { useState } from "react";

function Accordion() {
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);

  return (
    <div className="accordion-wrapper">
      <div className="accordion__description">
        <div className="accordion-description__heading">
          <button onClick={() => setDescriptionVisible(!descriptionVisible)}>
            {descriptionVisible ? "+" : "-"}
          </button>
          <span>Description</span>
        </div>
        <div className="accordion-description__content">
          <div
            style={{
              display: descriptionVisible ? "none" : "block",
              height: descriptionVisible ? "0px" : "100%",
            }}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              qui in unde laudantium esse maxime! Possimus sit minima laboriosam
              corporis accusantium repudiandae et odio nesciunt voluptate
              tempore, voluptas illum numquam deserunt amet modi autem
              reprehenderit at ratione a eum, quod vel, voluptatum iusto!
              Doloribus provident quod.
            </p>
            <ul>
              <li>Lorem ipsum </li>
              <li>Lorem </li>
              <li>Lorem ipsum dolor 3x</li>
              <li>Quod ipsum dolor 2x</li>
              <li>Doloribu</li>
              <li>Odio nesciunt </li>
            </ul>
            <p className="content_gift">
              Is this a gift? Product may arrive in manufacturer packaging and
              may display brand name and contents.
            </p>
          </div>
        </div>
      </div>
      <div className="accordion__about-brand">
        <div className="accordion-about-brand__heading">
          <button onClick={() => setBrandVisible(!brandVisible)}>
            {brandVisible ? "+" : "-"}
          </button>
          <span>About Brand</span>
        </div>
        <div className="accordion-about-brand__content">
          <p
            style={{
              display: brandVisible ? "none" : "block",
              height: brandVisible ? "0px" : "100%",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, qui
            in unde laudantium esse maxime! Possimus sit minima laboriosam
            corporis accusantium repudiandae et odio nesciunt voluptate tempore,
            voluptas illum numquam deserunt amet modi autem reprehenderit at
            ratione a eum, quod vel, voluptatum iusto! Doloribus provident quod.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Accordion;
