import { ArrowLeft, ArrowRight } from '@phosphor-icons/react';
import { useState } from 'react';

const Gallery = () => {
  const slides = [
    {
      id: 1,
      image: '/images/20220306-donairia-001.jpg',
    },
    {
      id: 2,
      image: '/images/20211003-donairia-022.jpg',
    },
    {
      id: 3,
      image: '/images/20220319-donairia-006.jpg',
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
                index === slideIndex ? 'block' : 'hidden'
              }`}
              key={slide.id}
            >
              <img
                src={slide.image}
                className="aspect-5/4 object-cover lg:aspect-2/1 lg:max-w-(--breakpoint-lg)"
              ></img>
              <div className="flex flex-row justify-between px-6 text-2xl text-white lg:text-4xl lg:text-stone-900">
                <ArrowLeft
                  className="hover:text-foreground-brand-default absolute top-1/2 left-6 cursor-pointer duration-200 hover:scale-110 lg:left-12"
                  onClick={prevSlide}
                />
                <ArrowRight
                  className="hover:text-foreground-brand-default absolute top-1/2 right-6 cursor-pointer duration-200 hover:scale-110 lg:right-12"
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
