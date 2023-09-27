import NextArrow from '../components/customArrow/NextArrow'
import PrevArrow from '../components/customArrow/PrevArrow'

export const CarrousselSettings = {
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  swipeToSlide: true,
  arrows: true,
  dots: false,
  speed: 500,
  infinite: false,
  slidesToShow: 6,
  slidesToScroll: 1,
  initialSlide: 0,
  className: 'center',
  centerMode: true,
  centerPadding: '5%',
  responsive: [
    {
      breakpoint: 2422,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    },
    {
      breakpoint: 2222,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: false
      }
    },
    {
      breakpoint: 1732,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    },
    {
      breakpoint: 1525,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    },
    {
      breakpoint: 1350,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    },
    {
      breakpoint: 1150,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2.2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 1.5,
        slidesToScroll: 1,
        arrows: false,
        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    },
    {
      breakpoint: 590,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,

        infinite: true,
        dots: false,
        speed: 500,
        className: 'center',
        centerMode: true,
        centerPadding: '5%'
      }
    }
  ]
}
