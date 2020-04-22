import React from 'react'
import { saveContact } from '../api/contact'

class Contact extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
    this.scrollContact = {
      scrollContact: props.scrollContact
    }
  }

  handleChange = (event) =>{
    this.setState({
      [event.target.name]: event.target.value,
    })
  }

  handleSubmit = (event) =>{
    console.log(this.state)
    event.preventDefault()
    saveContact(this.state)
    .then(this.resetForm)
  }

  resetForm = () =>{
    this.setState({
      name: '',
      email: '',
      message: ''
    })
    alert('Message sent successfully')
  }

  render(){
    return(
      <>
      <span ref={this.scrollContact.scrollContact} className="breaker">
        <h2>CONTACT</h2>
      </span>
      <div className="contactDiv">
        <div className="contactPart">
          <form onSubmit={this.handleSubmit}>
            <div id="nameDiv">
              <label htmlFor="name">Your Name</label> 
                <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} required/>
            </div>
            <div id="emailDiv">
              <label htmlFor="email">Email address </label>
                <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} required/>
            </div>
            <div id="messageDiv">
              <label htmlFor="message">Message</label>
                <textarea type="textbox" id="message" name="message" rows="10" value={this.state.message} onChange={this.handleChange} required/>
            </div>
            <button>Submit</button>
          </form>
        </div>
        <div className="mapPart">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2997.84255401752!2d174.77418401498335!3d-41.29053097927318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d38afd7024205af%3A0x36573f721911eafd!2s57%20Manners%20Street%2C%20Te%20Aro%2C%20Wellington%206011!5e0!3m2!1sen!2snz!4v1587330919923!5m2!1sen!2snz" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
        </div>
      </div>
      </>
    )
  }
}

export default Contact;