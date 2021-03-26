import React from 'react'

const WorkExperience = (props) => {
  return (
    <div className="ui segment">
      <h1 className="ui header">Work Experience</h1>
      <hr  className="ui fitted divider"/>


       <label htmlFor="jobTitle">Job Title</label>
        <input type="text" name="jobTitle" value={props.jobTitle} onChange={props.handleJobTitle} id=""/>
        <br/>


        <label htmlFor="employer">Employer:</label>
        <input type="text" name="employer" id="" onChange={props.handleEmployer} value={props.employer} />
        <br/>


        <label htmlFor="fromDateWork">Attended From:</label>
        <input type="date" name="fromDateWork" id="" value={props.fromDateWork} onChange={props.handleFromDateWork}/>
        <br/>


        <label htmlFor="toDateWork">Attended To:</label>
        <input type="date" name="toDateWork" id="" value={props.toDateWork} onChange={props.handleToDateWork}/>
        <br/>


        <input type="checkbox" name="ongoingWork" value={props.ongoingWork} onChange={props.handleOngoingWork} id=""/> Currently Employed
        <br/>


        <label htmlFor="activities">Responsibilities: </label>
        <textarea name="activities" id="" cols="30" rows="10" placeholder="Main activities and responsibilities" value={props.activities} onChange={props.handleActivities}></textarea>
        {props.children}

        
    </div>
  )
}

export default WorkExperience