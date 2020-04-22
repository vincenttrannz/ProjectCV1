import React from 'react'
import education from '../../data/education'

function Education(props){
  return(
    <>
    <span ref={props.scrollEdu} className="breaker">
      <h2>EDUCATION</h2>
    </span>
    <section className="education">
      <table>
        <thead id="school">
          <tr>
            {education.map((item, i)=>{
              return(<th key={i}><img id={item.id} alt={item.name} src={item.image}></img></th>)
            })}
          </tr>
          <tr>
            {education.map((item, i)=>{
              return(<td key={i}><strong>{item.name}</strong></td>)
            })}
          </tr>
        </thead>
        <tbody id="educontent">
          <tr>
            {education.map((item,i)=>{
              return(<td key={i}>{item.year} | {item.status}</td>)
            })}
          </tr>
          <tr>
            {education.map((item, i)=>{
              return(<td key={i}><strong>{item.degree}</strong></td>)
            })}
          </tr>
          <tr>
            {education.map((item, i)=>{
              return(<td key={i}><strong>{item.major}</strong></td>)
            })}
          </tr>
          <tr>
            {education.map((item,i)=>{
              return(
                <td key={i}>
                  <ul>
                    {item.description.map((elem,i)=>{
                      return(<li key={i}>{elem}</li>)
                    })}
                  </ul>
                </td>)
            })}
          </tr>
        </tbody>
      </table>
    </section>
    </>
  )
}

export default Education;