import React from 'react'

const PersonalInfo = (props) => {
  return (
    <div className="ui segment">
      <h1 className="ui header">Personal Information</h1>
      <hr  className="ui fitted divider"/>

      <div className="ui input label" >
       <label  htmlFor="first">First Name:</label>
        <input type="text" name="first" value={props.first} onChange={props.handleFirst} id=""/>
     </div>
        <br/>

        <div className="ui input label" >
        <label htmlFor="last">Last Name:</label>
        <input type="text" name="last" id="" onChange={props.handleLast} value={props.last} />
        </div>
        <br/>

        <div className="ui input label" >
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="" value={props.email} onChange={props.handleEmail}/>
        </div>
        <br/>

        <div className="ui input label" >
        <label htmlFor="tel">Phone Number:</label>
        <input type="tel" name="tel" id="" value={props.tel} onChange={props.handleTel}/>
        </div>
        <br/>


    </div>
  )
}

export default PersonalInfo