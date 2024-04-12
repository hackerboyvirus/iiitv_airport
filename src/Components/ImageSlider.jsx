import React, { useState, useEffect } from 'react';
import './ImageSlider.css';

const images = [
  'src/assets/Frame1.png',
  'src/assets/Frame2.png',
  'src/assets/Frame3.png',
  'src/assets/Frame4.png',
  'src/assets/airportservices.webp',
   // Make sure these paths are correct
];

function ImageSlider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Interval for changing images
    return () => clearInterval(timer);
  }, []);

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <div
        className="slide"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>
      <button className="prev" onClick={goToPrevious}>&#10094;</button>
      <button className="next" onClick={goToNext}>&#10095;</button>
    </div>
  );
}

export default ImageSlider;
