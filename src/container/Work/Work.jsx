import React, { useEffect, useState } from 'react'
import { AiFillEye, AiFillFithub, AiFillGithub } from 'react-icons/ai'
import { animate, motion } from 'framer-motion'

import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { AppWrap, MotionWrap } from '../../wrapper'
import './Work.scss'
import { urlFor, client } from '../../client'
import { WorkCard } from '../../components'
function Work() {

  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const [works, setWorks] = useState([]);
  const [project, setProject] = useState(
    {
      title: "hey",
      duration: "2021 Aug- 2021 Oct",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      ,
      vid: "MY-0lQNpTbI",
      tech: "FireBase, ReactJS, Express, MongoDB, Android"
    });
  const [toggleWork, setToggleWork] = useState(false);

  const [filterWorks, setFilterWork] = useState([]);
  useEffect(() => {
    const query = '*[_type=="works"]'

    client.fetch(query)
      .then((data => {
        setWorks(data);
        setFilterWork(data);
      }))

  }, [])


  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard([{ y: 100, opacity: 0 }])

    setTimeout(() => {

      setAnimateCard([{ y: 0, opacity: 1 }])

      if (item === 'All')
        setFilterWork(works);
      else {
        setFilterWork(works.filter((work) => work.tags.includes(item)))
      }
    }, 500);
  }
  return (
    <>
      <h2 className='head-text'>My creative <span> Protfollio</span></h2>

      <div className='app__work-filter'>
        {['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'].map((item, index) => (

          <div
            key={index}
            onClick={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >

            {item}
          </div>
        ))}
      </div>

      {
        toggleWork && <motion.div
          whileInView={{ x: [300, 0] }}
          transition={{ duration: 0.85, ease: 'easeOut' }}
          className="app__work-workCard"
        >

          <HiX onClick={() => setToggleWork(false)} />
          <div className='work-card' >
            <WorkCard project={project} />
          </div>
        </motion.div>
      }
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {
          filterWorks.map((work, index) => (
            <div className='app__work-item app__flex' key={index}
              onClick={() => {
                setToggleWork(true)
                setProject(work)
              }
              }
            >

              <div className='app__work-img app__flex'>
                <img src={urlFor(work.imgUrl)} alt={work.name} />
                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                  className='app__work-hover app__flex'
                >
                  <a href={work.projectLink} target="_blank" rel='norefer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'

                    >
                      <AiFillEye />
                    </motion.div>
                  </a>


                  <a href={work.codeLink} target="_blank" rel='norefer'>
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className='app__flex'

                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>

                </motion.div>
              </div>
              <div className='app__work-content app__flex'>
                <h4 className='bold-text'>{work.title}</h4>
                <p className='p-text' style={{ marginTop: 10 }}>{work.description}</p>

                <div className='app__work-tag app__flex'>
                  <p className='p-text'>{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
      </motion.div>
    </>
  )
}

export default AppWrap(

  MotionWrap(Work, 'app__works')
  , "work",
  "app__primarybg"


);