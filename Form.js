import React, {Fragment} from 'react'

const Form = (props) => {

  return(
    <Fragment className="ui segment">
    {props.formHide === false ? (
      <form onSubmit={props.onSubmit}>
         {props.children}
         <button className="ui primary button" onClick={props.handlePreview} type="submit">Preview</button>
      </form>) : <div></div>}
      
      {/*Add a form segment and add props.children */}
      {/*Personal Info Segment*/}
      {/*Education and Training Segment */}
      {/* Button to add more Education */}
      {/*Work Experience Segment */}
      {/* Button to add more Work Experience */}
      {/* Preview Resume Button */}
    
    </Fragment>
  )

}



export default Form