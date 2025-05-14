import { useState, useEffect } from 'react';
import { Box, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import './Carousel.css';

const images = [
  "https://d4t7t8y8xqo0t.cloudfront.net/app/resized/1080X/pages/850/image20190304100621.jpg",
  "https://cdn2.gofoodservice.com/cms/restaurant-coupons-and-promotions-guide-large.5fca8cb9ed0bd.jpg",
  "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/burger-restaurant-discount-voucher-template-design-0d7f065673431198a0f318fe0735bb1f_screen.jpg?ts=1627502643"
];

const SimpleCarousel = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // Auto-slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box className="carousel">
      {/* Image */}
      <Box className="carousel-image-wrapper">
        <img src={images[index]} alt={`slide-${index}`} className="carousel-image" />
      </Box>

      {/* Navigation Buttons */}
      <IconButton className="carousel-button prev" onClick={prevSlide}>
        <ArrowBackIos />
      </IconButton>
      <IconButton className="carousel-button next" onClick={nextSlide}>
        <ArrowForwardIos />
      </IconButton>

      {/* Indicator Dots */}
      <Box className="carousel-indicators">
        {images.map((_, i) => (
          <span
            key={i}
            className={`indicator ${i === index ? 'active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default SimpleCarousel;
