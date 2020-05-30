import React from 'react'
import skill from '../../data/skill'

function Skill(props){
  const programming = skill.map(elem =>{
    return elem.programming
  })
  const design = skill.map(elem=>{
    return elem.design
  })
  const other = skill.map(elem=>{
    return elem.other
  })
  return(
    <>
    <span ref={props.scrollSkills} className="breaker">
      <h2 data-aos="fade-down" data-aos-duration="500">SKILLS</h2>
    </span>
    <div className="skills"
      data-aos-anchor-placement="top-bottom"
      data-aos="fade-up"
      data-aos-easing="ease-in-back"
      data-aos-duration="600"
      data-aos-offset="0">
      <fieldset className="skillFieldset">
        <legend><h3>PROGRAMMING</h3></legend>
        {programming[0].map((item,i)=>{
          return(
            <div key={i}>
            <h4>{item.replace('_', ' & ')}</h4>
            <div className="skillsContainer">
              <div className={`skill ${item}`}
                data-aos="flip-up" 
                data-aos-easing="ease-in-back"
                data-aos-duration="1500"
                data-aos-anchor-placement="top-bottom" 
                data-aos-offset="0"></div>
            </div>
            </div>
          )
        })}
      </fieldset>
      <fieldset className="skillFieldset">
        <legend><h3>DESIGN</h3></legend>
        {design[0].map((item,i)=>{
          return(
            <div key={i}>
              <h4>{item}</h4>
              <div className="skillsContainer">
                <div className={`skill ${item}`}
                    data-aos="flip-up" 
                    data-aos-easing="ease-in-back"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="top-bottom" 
                    data-aos-offset="0"></div>
              </div>
            </div>
          )
        })}
      </fieldset>
      <fieldset className="skillFieldset">
        <legend><h3>PROFESSIONAL</h3></legend>
        {other[0].map((item,i)=>{
          return(
            <div key={i}>
              <h4>{item.replace('_', ' ')}</h4>
              <div className="skillsContainer">
                <div className={`skill ${item}`}
                    data-aos="flip-up" 
                    data-aos-easing="ease-in-back"
                    data-aos-duration="1500"
                    data-aos-anchor-placement="top-bottom" 
                    data-aos-offset="0"></div>
              </div>
            </div>
          )
        })}
      </fieldset>
    </div>
    </>
  )
}

export default Skill;