import React from 'react'
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { motion } from 'motion/react'

interface Testimonial {
  quote: string
  author: string
}
const ArrowButton = ({
  onClick,
  direction,
  className = '',
  style,
  ...rest
}: {
  onClick?: () => void
  direction: 'prev' | 'next'
  className?: string
  style?: React.CSSProperties
  [key: string]: unknown
}) => (
  <button
    type="button"
    onClick={onClick}
    style={style}
    className={`
      absolute top-1/2 -translate-y-1/2 
      ${direction === 'prev' ? 'left-2' : 'right-2'}
      z-10 w-10 h-10 flex items-center justify-center 
      rounded-full  
      text-primary cursor-pointer transition-colors
      ${className}
    `}
    {...rest}
  >
    {direction === 'prev' ? (
      <ChevronLeft className="text-primary" size={20} />
    ) : (
      <ChevronRight className="text-primary" size={20} />
    )}
  </button>
)

const TestimonialSlider = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const showArrows = (testimonials?.length ?? 0) > 1

  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    speed: 200,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    arrows: showArrows,
    ...(showArrows && {
      prevArrow: <ArrowButton direction="prev" />,
      nextArrow: <ArrowButton direction="next" />,
    }),
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="bg-bsc-yellow/20 rounded-3xl p-8 border border-bsc-yellow/30 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 p-4 opacity-10">
        <Quote className="w-24 h-24 text-primary" />
      </div>
      <h3 className="text-xl font-recoleta font-bold text-gray-900 mb-6 flex items-center gap-2 relative z-10">
        <Quote className="text-primary w-5 h-5" /> What Attendees Say
      </h3>
      <div className="space-y-6 relative z-10">
        <Slider {...settings} className="relative">
          {testimonials?.map((test, idx) => (
            <div key={idx} className="relative">
              <p className="text-gray-700 italic leading-relaxed mb-4 text-sm">
                &ldquo;{test.quote}&rdquo;
              </p>
              <p className="font-bold text-gray-900 text-sm">— {test.author}</p>
            </div>
          ))}
        </Slider>
      </div>
    </motion.div>
  )
}

export default TestimonialSlider
