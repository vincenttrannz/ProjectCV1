import React from 'react'

class Personal extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      personal: {
        Pic: "/images/profile1.jpg",
        Resume: "/document/VincentCV.pdf",
        From: "Wellington, New Zealand",
        Ethinicity: "Vietnam",
        Birthday: "21/03/1991",
        Address: "6A/57 Manners street, Te Aro, Wellington",
        Phone: "+64221575362",
        Email: "tranhieunz@gmail.com",
        User: "vincenttrannz"
      },
      logo: {
        facebook: "fab fa-facebook-square fa-3x",
        linkedin: "fab fa-linkedin fa-3x",
        instagram: "fab fa-instagram fa-3x",
        github: "fab fa-github-square fa-3x",
        pdf: "fas fa-file-pdf"
      }
    }
  }

  render(){
    const personalKey = Object.keys(this.state.personal)
    const personalValue = Object.values(this.state.personal)
    const logoKey = Object.keys(this.state.logo)
    return(
      <div className="personal">
        <table id="personalinfo">
          <tbody>
            <tr>
              <td rowSpan="4"><img id="image1" src={this.state.personal.Pic} alt="Vincent"></img></td>
            </tr>
            <tr>
              <td colSpan="4" id="aboutmetitle"><h2>HELLO! I'M VINCENT TRAN</h2></td>
            </tr>
            <tr>
              <td rowSpan="1" colSpan="6" id="aboutme">
                <p>
                  I am a full stack web developer with strengths in front end development, especially modern web framework <b>React</b>, including <b>Redux</b>, <b>JavaScript</b>, <b>NodeJS</b> and <b>SQLite3</b>. 
                  The initial stages of my web development education were self-taught, learning through online resources and attending tech meetups. 
                  Goal orientated learning drives my code and I am capable of self-directed working, however I love and value being part of a team and working in a shared learning environment.
                </p>
              </td>
            </tr>
            <tr id="basicinfo">
              <td>
                <ul>
                  {personalKey.map((item,i)=>{
                    return (item.includes('Pic') || item.includes('Resume') || item.includes('User')) ? undefined :
                      <li key={i}><strong>{item}</strong></li>
                  })}
                </ul>
              </td>
              <td colSpan="6">
                <ul>
                  {personalValue.map((item, i)=>{
                    if(item.includes('.jpg') || item.includes('.pdf') || item.includes('vincent')){
                      return undefined
                    } else if (item.includes('.com')){
                      return <li key={i}><a style={{color: 'blue'}} href="mailto:tranhieunz@gmail.com">tranhieunz@gmail.com</a></li>
                    } else {
                      return <li key={i}>{item}</li>
                    } 
                  })}
                </ul>
              </td>
            </tr>
            <tr id="resume">
              <td><button className="button" type="button"><a href={this.state.personal.Resume}><i className={this.state.logo.pdf}>&nbsp;</i>Download My Resume</a></button></td>
              <td>&nbsp;</td>
              {logoKey.map((item,i)=>{
                if(item == 'pdf'){
                  return undefined
                } else if (item == 'linkedin'){
                  return <td key={i}><a href={`http://www.${item}.com/in/${this.state.personal.User}`} target="_blank"><i className={`fab fa-${item} fa-3x`}></i></a></td>
                } else {
                  return <td key={i}><a href={`http://www.${item}.com/${this.state.personal.User}`} target="_blank"><i className={`fab fa-${item} fa-3x`}></i></a></td>
                }
              })}
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

export default Personal;