import React from 'react'
import work from '../../data/work'

function WorkDisplay (props){
  return(
    <>
      <span ref={props.scrollWork} className="breaker">
        <h2 data-aos="fade-down" data-aos-duration="500">WORK EXPERIENCE</h2>
      </span>
      <div className="workdiv" 
        data-aos="fade-right"
        data-aos-duration="500">
        <section className="work">
          {work.map((item,i)=>{
            return(
              <table key={i}>
                <tbody>
                  <tr>
                    <th colSpan="2"><strong>{item.role}</strong></th>
                  </tr>
                  <tr>
                    <td id={item.id} colSpan="2"><img src={item.image} alt={`${item.id} logo`}></img></td>
                  </tr>
                  <tr>
                    <td id="subPlace" colSpan="2">{item.subPlace}</td>
                  </tr>
                  <tr>
                    <td id="duration" colSpan="2"><em>{item.duration}</em></td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <ul>
                        {item.description.map((elem,i)=>{
                          return(
                            <li key={i}>{elem}</li>
                          )
                        })}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table> 
            )})
          }
        </section>
        <section className='achievement'>

        </section>
      </div>
    </>
  )
}

export default WorkDisplay;