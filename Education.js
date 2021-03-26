import React from 'react'

const Education = (props) => {
  return (
    <div className="ui segment">
      <h1 className="ui header">Education</h1>
      <hr  className="ui fitted divider"/>
       <label htmlFor="degree">Degree Awarded:</label>
        <input type="text" name="degree" value={props.degree} onChange={props.handleDegree} id=""/>
        <br/>
        <label htmlFor="school">School:</label>
        <input type="text" name="school" id="" onChange={props.handleSchool} value={props.school} />
        <br/>
        <label htmlFor="fromDate">Attended From:</label>
        <input type="date" name="fromDate" id="" value={props.fromDate} onChange={props.handleFromDate}/>
        <br/>
        <label htmlFor="toDate">Attended To:</label>
        <input type="date" name="toDate" id="" value={props.toDate} onChange={props.handleToDate}/>
        <br/>
        <input type="checkbox" name="ongoing" value={props.ongoing} onChange={props.handleOngoing} id=""/> Currently Enrolled
        <br/>
        {props.children}
    </div>
  )
}

export default Education