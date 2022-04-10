import React from 'react'
import './WorkCard.scss'
import YouTube from 'react-youtube'
function WorkCard({ project }) {


    const opts = {
        height: '290',
        width: '400',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (

        <div className='app__workCard-item app__flex '>
            <div className='workCard__video-container'>

                <YouTube className='workCard-video' videoId={project.vid} opts={opts} />
            </div>
            <div className='workCard-info'>
                <div className='info-title'>
                    <h1 className='headtext__cormorant'>{project.title}</h1>
                </div>
                <div className='info-content'>
                    <div className='info-techUsed'>
                        <p className='p__text2'>

                            <span>Duration :</span> {project.duration}
                            <br />
                            <span>Tech Used :</span> {project.tech}
                        </p>
                    </div>
                    <div className='info-desc'>
                        <p className='p__text2'>

                            <span> Breif :</span>
                            {project.description}
                        </p>
                    </div>
                </div>

            </div>
        </div>
    );
    //   return (
    //     <div>

    //         <h1 className='headtext__cormorant'>{project.title}</h1>
    //     </div>
    //   )


}

export default WorkCard