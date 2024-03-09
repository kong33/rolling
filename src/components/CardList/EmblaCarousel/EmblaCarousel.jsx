import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { usePrevNextButtons } from './EmblaCarouselArrowButtons';
import CardOverview from '../CardOverview/CardOverview';
import styles from './EmblaCarousel.module.scss';
import { ButtonArrow } from '../../Button';

export default function EmblaCarousel(props) {
  const { slides, options, CarouselName } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false }),
  ]);
  const [isPlaying, setIsPlaying] = useState(false);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll;
      if (!autoScroll) return;

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop;

      resetOrStop();
      callback();
    },
    [emblaApi],
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;

    setIsPlaying(autoScroll.isPlaying());
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(false));
  }, [emblaApi]);

  return (
    <section className={styles.embla}>
      <h1 className={styles.CarouselName}>{CarouselName}</h1>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {Object.keys(slides).map((recipientId) => (
            <div className={styles.embla__slide} key={recipientId}>
              <CardOverview
                recipient={slides[recipientId]}
                className={styles.embla__slide}
              />{' '}
            </div>
          ))}
        </div>
        <ButtonArrow
          className={styles.ArrowLeftBtn}
          direction={'left'}
          onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
          disabled={prevBtnDisabled}
        />
        <ButtonArrow
          className={styles.ArrowRightBtn}
          direction={'right'}
          onClick={() => onButtonAutoplayClick(onNextButtonClick)}
          disabled={nextBtnDisabled}
        />
        <button
          className={styles.embla__play}
          onClick={toggleAutoplay}
          type="button"
        >
          {isPlaying ? 'Stop' : 'Start'}
        </button>
      </div>
      {/* 
        <div className={styles.embla__controls}>
          <div className={styles.embla__buttons}></div>
        </div> */}
    </section>
  );
}
