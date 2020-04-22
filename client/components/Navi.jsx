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
              <td><Link to="/" onClick={props.scrollEduSmoothHandler}>Education</Link></td>
              <td><Link to="/" onClick={props.scrollWorkSmoothHandler}>Work</Link></td>
              <td><Link to="/" onClick={props.scrollSkillSmoothHandler}>Skills</Link></td>
              <td><Link to="/" onClick={props.scrollContactSmoothHandler}>Contact</Link></td>
            </tr>
          </thead>
        </table>
      </nav>
    </div>
  )
}

export default Navi;