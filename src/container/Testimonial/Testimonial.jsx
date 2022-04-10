import React, { useEffect, useState } from 'react'
import './Testimonial.scss'
import { motion } from 'framer-motion'
import { urlFor, client } from '../../client'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi'

import { AppWrap, MotionWrap } from '../../wrapper'
function Testimonial() {


  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    const query = '*[_type=="testimonials"]';
    const brandsQuery = '*[_type=="brands"]';
    client.fetch(query)
      .then((data) => {
        setTestimonials(data);
      });
    client.fetch(brandsQuery)
      .then((data) => {
        setBrands(data);
      })

  }, [])

  const handleClick = (index) => {
    setCurrentIndex(index);
  }

  const test = testimonials[currentIndex];
  return (

    <>
      {
        testimonials.length && (
          <>
            <div className='app__testimonial-item app__flex'>
              <img src={urlFor(test.imgurl)} alt={testimonials.name} />

              <div className='app__testimonial-content'>
                {/* <p className='p-text'>{test.feedback}</p>
                <div>
                  <h4 className='bold-text'>{test.name}</h4>

                  <h5 className='bold-text'>{test.company}</h5>
                </div> */}
                <img src={urlFor(test.contenturl)} />
              </div>


            </div>
            <div className='app__testimonial-btns app__flex'>
              <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
                <HiChevronLeft />
              </div>
              <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
                <HiChevronRight />
              </div>
            </div>

          </>
        )
      }
      <div className='app__testimonial-brands app__flex'>
        {brands?.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={brand._id}
          >
            <a href={brand.profileUrl}>
            <img src={urlFor(brand.imgUrl)} alt={brand.name} />
            </a>
          </motion.div>
        ))}
      </div>
    </>
  )
}
export default AppWrap(

  MotionWrap(Testimonial, 'app__testimonial')
  , "profiles",
  "app__primarybg"


);