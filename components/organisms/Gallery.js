import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Gallery = () => {
  const slides = [
    {
      id: 1,
      image: "images/20211003-donairia-024.jpg",
      caption: "Guided Tours",
    },
    {
      id: 2,
      image: "images/20211003-donairia-048.jpg",
      caption: "Visit and Lunch",
    },
    {
      id: 3,
      image: "images/20211003-donairia-022.jpg",
      caption: "Picnic at the Farm",
    },
    {
      id: 4,
      image: "images/20210928-donairia-027.jpg",
      caption: "Grape Harvest",
    },
  ];

  const [slideIndex, setSlideIndex] = useState(0);
  const length = slides.length;

  const prevSlide = () => {
    setSlideIndex(slideIndex === 0 ? length - 1 : slideIndex - 1);
  };
  const nextSlide = () => {
    setSlideIndex(slideIndex === length - 1 ? 0 : slideIndex + 1);
  };

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-row">
        {slides.map((slide, index) => {
          return (
            <div
              className={`flex flex-col gap-6 lg:px-32 ${
                index === slideIndex ? "block" : "hidden"
              }`}
              key={slide.id}
            >
              <img
                src={slide.image}
                className="lg:aspect-[2/1] object-cover"
              ></img>
              <div className="flex flex-row justify-between px-6">
                <BsArrowLeft
                  className="hover:scale-125 duration-100 hover:text-tan-500 cursor-pointer"
                  onClick={prevSlide}
                />
                <p className="text-sm">{slide.caption}</p>
                <BsArrowRight
                  className="hover:scale-125 duration-100 hover:text-tan-500 cursor-pointer"
                  onClick={nextSlide}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
