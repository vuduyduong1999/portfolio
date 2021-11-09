import React, { useState } from 'react';

import { slides } from '@constants';

import { Button } from './Button';
import { Slide } from './Slide';
import { Slider } from './Slider';

interface Props {}

export const LiquidSlider = ({}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = slides[currentIndex - 1];
  const next = slides[currentIndex + 1];
  return (
    <>
      <Slider
        key={currentIndex}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        next={next && <Slide slide={next} />}
        prev={prev && <Slide slide={prev} />}
      >
        <Slide slide={slides[currentIndex]!} />
      </Slider>
      <Button show={currentIndex === slides.length - 1} />
    </>
  );
};
