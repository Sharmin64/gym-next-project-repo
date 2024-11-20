export interface CarouselProps {
  additionalTransfrom?: number;
  arrows?: boolean;
  autoPlay?: boolean;
  autoPlaySpeed?: number;
  centerMode?: boolean;
  className?: string;
  containerClass?: string;
  dotListClass?: string;
  draggable?: boolean;
  focusOnSelect?: boolean;
  infinite?: boolean;
  itemClass?: string;
  keyBoardControl?: boolean;
  minimumTouchDrag?: number;
  pauseOnHover?: boolean;
  renderArrowsWhenDisabled?: boolean;
  renderButtonGroupOutside?: boolean;
  renderDotsOutside?: boolean;
  responsive: {
    [key: string]: {
      breakpoint: {
        max: number;
        min: number;
      };
      items: number;
      partialVisibilityGutter?: number;
    };
  };
  rewind?: boolean;
  rewindWithAnimation?: boolean;
  rtl?: boolean;
  shouldResetAutoplay?: boolean;
  showDots?: boolean;
  sliderClass?: string;
  slidesToSlide?: number;
  swipeable?: boolean;
  children: React.ReactNode;
}

export interface WithStylesProps {
  description: string;
  headline: string;
  image: string;
}
