import React from "react";

import "./styles/index.scss";

function Test() {
  return (
    <section>
      <div className="main-container">
        <h1 className="test-name">Make me center aligned</h1>
        <p>Make me right aligned</p>
        <hr />
        <h4>Remove my bullet points and make me display on a line</h4>
        <ul>
          <li>Item one</li>
          <li>Item two</li>
          <li>Item three</li>
        </ul>
        <hr />
        <h4>Set my images up to be a grid layout</h4>
        <div class="gallery">
          <div class="gallery__item1">
            <img
              class="gallery--image"
              src="https://placehold.it/250"
              alt="none"
            />
          </div>
          <div class="gallery__item2">
            <img
              class="gallery gallery--image"
              src="https://placehold.it/250"
              alt="none"
            />
          </div>
          <div class="gallery__item3">
            <img
              class="gallery gallery--image"
              src="https://placehold.it/250"
              alt="none"
            />
          </div>
          <div class="gallery__item4">
            <img
              class="gallery gallery--image"
              src="https://placehold.it/250"
              alt="none"
            />
          </div>
          <div class="gallery__item5">
            <img
              class="gallery gallery--image"
              src="https://placehold.it/250"
              alt="none"
            />
          </div>
          <div class="gallery__item6">
            <img
              class="gallery gallery--image"
              src="https://placehold.it/250"
              alt="none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Test;
