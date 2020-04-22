import React from 'react'
import work from '../../data/work'
import {Link} from 'react-router-dom'


function WorkNav (){
  return(
    <>
    <span class="breaker">
      <h2 id="workexp">WORK EXPERIENCE</h2>
    </span>
    <div className="choice">
      <ul>
        {work.map((item, i)=>{
          return(
            <li key={i}><Link to={`/work/${item.id}`}>{item.role}</Link></li>
          )
        })}
      </ul>
    </div>
    </>
  )
}

export default WorkNav;