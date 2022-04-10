import React from 'react'
import './Home.scss'
import { motion } from 'framer-motion'
import { images } from '../../constants'
import Typical from 'react-typical'
import { AppWrap } from '../../wrapper'

function Home() {
    return (
        <div className='app__home app__flex'>

            <motion.div
                whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.5 }}
                className="app__home-info"
            >
                <div className='app_home-details_name'>
                    Hello, I'M  <span > &nbsp;{' '}Ashwini </span>
                </div>

                
                <div className='app__home-details_role'>
                    <span className='p-text details-roles'>
                        {" "}
                        <h1 className='headtext__cormorant'>
                            {" "}
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Ethusiastic Dev 😌",
                                    1500,
                                    "Full Stack Developer 💻",
                                    1500,
                                    "MERN Stack Dev 🧬",
                                    1500,
                                    "React/React Native Dev 📱",
                                    1500,
                                ]}

                            />
                        </h1>

                    </span>
                    <span className='p__opensans detail__tag-line'>
                        Knack of building application with frontend and backend operations...
                    </span>
                </div>

                <div className='detail__buttons'>
                    <a href='#contact'>
                    <button className='custom__button primary-btn'>
                        {""}
                        Hire Me{""}
                    </button>
                    </a>
                    <a href='AshwiniSingh_VIT_Resume_Mar.pdf' download='Ashwini AshwiniSingh_VIT_Resume_Mar.pdf'>
                        <button className='custom__button highlighted-btn'>
                            Get Resume
                        </button>
                    </a>
                </div>

            </motion.div >
            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="home-profile_picture"

            >
                <div className='profile-pictureBackground'>

                </div>

            </motion.div>

        </div >
    )
}

export default AppWrap(Home, "home");