import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export class MainSlideShow extends Component {
  render () {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="assets/img/r2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://static1.visitestonia.com/images/2890339/Estonian_forest_reasons_to_visit_Sven_Zacek.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-A5QyrXV1AVacBhagutJ05KbnXzfJHhb07vgSxr5rw17BwEIM"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
