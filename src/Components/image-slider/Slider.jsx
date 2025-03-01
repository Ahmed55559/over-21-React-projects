import React, { useState, useEffect } from "react";
import "./Slider.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

function Slider({ url, page, limit }) {
  const [images, setImages] = useState([]),
    [isLoading, setIsLoading] = useState(false),
    [currentImage, setCurrentImage] = useState(0);

  function handlePrevious() {
    setCurrentImage(currentImage === 0 ? images.length - 1 : currentImage - 1);
  }

  function handleNext() {
    setCurrentImage(currentImage === images.length - 1 ? 0 : currentImage + 1);
  }

  useEffect(() => {
    const fetchData = async (url, page, limit) => {
      setIsLoading(true);
      try {
        const response = await fetch(`${url}?page0=${page}&limit=${limit}`);
        const data = await response.json();
        setImages(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        return <div>Error occured {error}</div>;
      }
    };
    fetchData(url, page, limit);
  }, [url, page, limit]);
  return (
    <div className="slider">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={() => handlePrevious()}
      />
      {images && images.length ? (
        images.map((image, index) => (
          <img
            className={
              index === currentImage ? "current-img" : "current-img hidden"
            }
            src={image.download_url}
            alt={image.download_url}
            key={index}
          />
        ))
      ) : isLoading ? (
        <img
          src="https://placehold.co/600x450/?text=loading..."
          alt="loading"
          className="current-img"
        />
      ) : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() => handleNext()}
      />
      <span className="indicators">
        {images && images.length
          ? images.map((_, i) => (
              <button
                key={i}
                className={
                  i === currentImage
                    ? "current-indicator active"
                    : "current-indicator"
                }
                onClick={() => setCurrentImage(i)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

export default Slider;
