import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

const Gallery = () => {
  const slides = [
    {
      id: 1,
      image: "/images/20220306-donairia-001.jpg",
    },
    {
      id: 2,
      image: "/images/20211003-donairia-022.jpg",
    },
    {
      id: 3,
      image: "/images/20220319-donairia-006.jpg",
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
              className={`relative flex flex-col gap-6 lg:px-32 ${
                index === slideIndex ? "block" : "hidden"
              }`}
              key={slide.id}
            >
              <img
                src={slide.image}
                className="aspect-[5/4] lg:aspect-[2/1] object-cover lg:max-w-screen-lg"
              ></img>
              <div className="flex flex-row justify-between px-6 text-white lg:text-neutral-900 text-2xl lg:text-4xl">
                <BsArrowLeft
                  className="absolute left-6 lg:left-12 top-1/2 hover:scale-110 duration-200 hover:text-olive-500 cursor-pointer"
                  onClick={prevSlide}
                />
                <BsArrowRight
                  className="absolute right-6 lg:right-12 top-1/2 hover:scale-110 duration-200 hover:text-olive-500 cursor-pointer"
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
