import React from 'react'

const Preview = (props) => {
  console.log(props)
  return (
    <div>
      {props.first}
      {props.last}
      {props.email}
      {props.tel}
      {props.degree}
      {props.school}
      {props.fromDate}
      {props.toDate}
      {props.ongoing}
      {props.jobTitle}
      {props.employer}
      {props.fromDateWork}
      {props.toDateWork}
      {props.ongoingWork}
      {props.activities}
      {props.workChildren}
      {props.educationChildren}
      <form onSubmit={props.onSubmit}>
         <button className="ui secondary button" onClick={props.handlePreview} type="submit">Go Back</button>
      </form>
    </div>
  )
}
export default Preview
