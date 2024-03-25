import React, { useState } from 'react'
import { Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap'

const items = [
  {
    src: 'https://cdn.pnj.io/images/promo/202/tabsale-chung-t3-24-1972x640-cta.jpg',
    altText: 'Slide 1',
    caption: '',
    key: 1
  },
  {
    src: 'https://cdn.pnj.io/images/promo/196/egift-t12-23-1972x640CTA.jpg',
    altText: 'Slide 2',
    caption: '',
    key: 2
  },
  {
    src: 'https://cdn.pnj.io/images/promo/199/pnjfast-t1-24-1972x640CTA.jpg',
    altText: 'Slide 3',
    caption: '',
    key: 3
  }
]

function Banner(args) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = (newIndex) => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className='custom-tag'
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    )
  })

  return (
    <>
      <div>
        <style>
          {`
          .custom-tag {
            max-width: 100%;
            height: 400px;
          }
          img {
            width: 100%;
           height: 100%;
          }
        `}
        </style>
        <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
          {slides}
          <CarouselControl direction='prev' directionText='Previous' onClickHandler={previous} />
          <CarouselControl direction='next' directionText='Next' onClickHandler={next} />
        </Carousel>
      </div>

      <div className='banner3'>
        <img src='https://cdn.pnj.io/images/promo/202/8March_fix_banner_CTA_.jpg' alt='' />
        <img src='https://cdn.pnj.io/images/promo/202/bst-sunnyva-fix-banner-494x247.jpg' alt='' />
        <img src='https://cdn.pnj.io/images/promo/194/qua-tang-fix-1-494x247CTA.jpg' alt='' />
      </div>
    </>
  )
}

export default Banner
