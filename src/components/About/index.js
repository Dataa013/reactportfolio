import { useEffect, useState } from 'react'
import {
faAngular,
faCss3,
faGitAlt,
faHtml5,
faJsSquare,
faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

return (
<>
  <div className="container about-page">
    <div className="text-zone">
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={['A', 'b' , 'o' , 'u' , 't' , ' ' , 'm' , 'e' ]}
          idx={15} />
      </h1>
      <p>
        My name is Data and I am 19 years old. I am a Front End Developer, I started learning frontend in 2021
      </p>


      <p>
        I am a very ambitious front-end developer looking for a role in an IT company with the opportunity to work with
        the latest technologies on complex and diverse projects.
      </p>
      <br />
      <br />
      <h1>
        <AnimatedLetters letterClass={letterClass} strArray={['S', 'k' , 'i' , 'l' , 'l' , 's' , '' , '& ' , '' , 'E'
          , 'x' , 'p' , 'e' , 'r' , 'i' , 'e' , 'n' , 'c' , 'e' ]} idx={15} />
      </h1>

      <p>
        I currently own the following technologies
        <br />
        <br />
        <span class="tech-tag">HTML5 </span>,
        <span class="tech-tag">CSS3 </span>,
        <span class="tech-tag">JavaScript </span>,
        <span class="tech-tag">jQuery </span>,
        <span class="tech-tag">React </span>,
        <span class="tech-tag">Scss </span>,
        <span class="tech-tag">Sass </span>,
        <span class="tech-tag">Gulp 4 </span>,
        <span class="tech-tag">Bootstrap </span>,
        <span class="tech-tag">Git </span>
        <br />
        <br />
        I would love to give you any kind of support.
        
      </p>


    </div>

    <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> 
  </div>
  <Loader type="pacman" />
</>
)
}

export default About