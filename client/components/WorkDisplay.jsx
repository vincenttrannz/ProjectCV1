import React from 'react'
import work from '../../data/work'

function WorkDisplay (props){
  return(
    <>
      <span ref={props.scrollWork} className="breaker">
        <h2>WORK EXPERIENCE</h2>
      </span>
      <div className="workdiv">
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
                <td colSpan="2">{item.subPlace}</td>
              </tr>
              <tr>
                <td colSpan="2"><em>{item.duration}</em></td>
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
              <tr>
                <th colSpan="2"><strong>References</strong></th>
              </tr>
              <tr>
                {item.references.map((elem,i)=>{
                  return(
                    <td key={i}><strong>{elem.role}</strong></td>
                  )
                })}
              </tr>
              <tr>
                {item.references.map((elem,i)=>{
                  return(
                    <td key={i}>{elem.name}</td>
                  )
                })}
              </tr>
              <tr>
                {item.references.map((elem,i)=>{
                  return(
                    <td key={i}><strong>Phone number: {elem.phone}</strong></td>
                  )
                })}
              </tr>
              <tr>
                {item.references.map((elem,i)=>{
                  return(
                    <td key={i}><strong>Email: {elem.email}</strong></td>
                  )
                })}
              </tr>
              </tbody>
            </table> 
            )})
          }
        </section>
      </div>
    </>
  )
}

export default WorkDisplay;