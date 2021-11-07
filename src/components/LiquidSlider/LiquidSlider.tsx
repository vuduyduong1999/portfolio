import React, { useState } from 'react';

import { Slide } from './Slide';
import { Slider } from './Slider';
import { slides } from './constant';

interface Props {}

export const LiquidSlider = ({}: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = slides[currentIndex - 1];
  const next = slides[currentIndex + 1];
  return (
    <Slider
      key={currentIndex}
      currentIndex={currentIndex}
      setCurrentIndex={setCurrentIndex}
      next={next && <Slide slide={next} />}
      prev={prev && <Slide slide={prev} />}
    >
      <Slide slide={slides[currentIndex]!} />
    </Slider>
  );
};
