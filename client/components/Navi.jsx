import React from 'react';
import { Link } from 'react-router-dom'

function Navi(props){
  return(
    <div className="welcome">
      <nav id="other">
        <table>
          <thead>
            <tr>
              <td><Link to="/"><i className="fas fa-home fa-2x"></i></Link></td>
              <td><Link to="/portfolio">Portfolio</Link></td>
              <td><Link to="/blog">Blog</Link></td>
              <td>|</td>
              <td><a onClick={props.scrollSkillSmoothHandler}>Skills</a></td>
              <td><a onClick={props.scrollWorkSmoothHandler}>Work</a></td>
              <td><a onClick={props.scrollAchievementSmoothHandler}>Achievement</a></td>
              <td><a onClick={props.scrollEduSmoothHandler}>Education</a></td>
              <td><a onClick={props.scrollContactSmoothHandler}>Contact</a></td>
            </tr>
          </thead>
        </table>
      </nav>
    </div>
  )
}

export default Navi;