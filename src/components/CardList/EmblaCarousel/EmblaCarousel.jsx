import { useCallback } from 'react';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from './EmblaCarouselArrowButtons';
import Autoplay from 'embla-carousel-auto-scroll';
import useEmblaCarousel from 'embla-carousel-react';
import './EmblaCarousel.css';
import CardOverview from '../CardOverview';

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

  const onNavButtonClick = useCallback((emblaApi) => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;

    const resetOrStop =
      autoplay.options.stopOnInteraction === false
        ? autoplay.reset
        : autoplay.stop;

    resetOrStop();
  }, []);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {Object.keys(slides).map((recipientId) => (
            <div className="embla__slide" key={recipientId}>
              <CardOverview
                recipient={slides[recipientId]}
                className="embla__slide"
              />{' '}
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
