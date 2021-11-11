import React, { Dispatch, SetStateAction, useEffect } from 'react';

import { StyleSheet } from 'react-native';

import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { snapPoint, useVector } from 'react-native-redash';

import { HEIGHT, WIDTH } from '@styles';
import { ESide } from '@types';

import { Wave } from './Wave';
import { MARGIN_WIDTH, MIN_LEDGE } from './constant';

interface Props {
  children: React.ReactNode;
  setCurrentIndex: Dispatch<SetStateAction<number>>;
  currentIndex: number;
  prev?: React.ReactNode;
  next?: React.ReactNode;
}
export const Slider = ({
  children,
  setCurrentIndex,
  next,
  prev,
  currentIndex,
}: Props) => {
  const sideAnimated = useSharedValue(ESide.NONE);
  const hasPrev = !!prev;
  const hasNext = !!next;
  const zIndex = useSharedValue(0);

  const left = useVector();
  const right = useVector();

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: ({ x }) => {
      if (x <= MARGIN_WIDTH && hasPrev) {
        sideAnimated.value = ESide.LEFT;
        zIndex.value = 100;
      } else if (x > WIDTH - MARGIN_WIDTH && hasNext) {
        sideAnimated.value = ESide.RIGHT;
      }
    },
    onActive: ({ x, y }) => {
      if (sideAnimated.value === ESide.LEFT) {
        left.x.value = x;
        left.y.value = y;
      } else if (sideAnimated.value === ESide.RIGHT) {
        right.x.value = WIDTH - x;
        right.y.value = y;
      }
    },
    onEnd: ({ x, y, velocityX }) => {
      const points = [MIN_LEDGE, WIDTH];
      const option = {
        velocity: velocityX,
        overshootClamping: true,
        restSpeedThreshold: 0.01,
        restDisplacementThreshold: 0.01,
      };
      if (sideAnimated.value === ESide.LEFT) {
        if (x >= WIDTH / 3) {
          const dest = snapPoint(left.x.value, velocityX, points);
          left.x.value = withSpring(dest, option, () => {
            if (dest === WIDTH) {
              runOnJS(setCurrentIndex)(currentIndex - 1);
            }
            sideAnimated.value = ESide.NONE;
          });
        } else {
          left.x.value = withSpring(MIN_LEDGE, { velocity: velocityX });
          left.y.value = withSpring(HEIGHT / 2);
        }
      } else if (sideAnimated.value === ESide.RIGHT) {
        if (x <= (WIDTH * 3) / 4) {
          const dest = snapPoint(right.x.value, velocityX, points);
          right.x.value = withSpring(dest, option, () => {
            if (dest === WIDTH) {
              runOnJS(setCurrentIndex)(currentIndex + 1);
            }
            sideAnimated.value = ESide.NONE;
          });
        } else {
          right.x.value = withSpring(MIN_LEDGE, { velocity: velocityX });
          right.y.value = withSpring(HEIGHT / 2);
        }
      }
      zIndex.value = 0;
    },
  });

  const leftIndexStyle = useAnimatedStyle(() => ({
    zIndex: zIndex.value,
  }));

  useEffect(() => {
    left.y.value = HEIGHT / 2;
    left.x.value = withSpring(MIN_LEDGE);
    right.y.value = HEIGHT / 2;
    right.x.value = withSpring(MIN_LEDGE);
  }, [left.x, left.y, right.x, right.y]);
  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={styles.container}>
        {children}
        {prev && (
          <Animated.View style={[StyleSheet.absoluteFill, leftIndexStyle]}>
            <Wave position={left} side={ESide.LEFT}>
              {prev}
            </Wave>
          </Animated.View>
        )}
        {next && (
          <Animated.View style={StyleSheet.absoluteFill}>
            <Wave position={right} side={ESide.RIGHT}>
              {next}
            </Wave>
          </Animated.View>
        )}
      </Animated.View>
    </PanGestureHandler>
  );
};
const styles = StyleSheet.create({
  container: { flex: 1 },
});
