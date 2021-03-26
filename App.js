import React, {Fragment, useState} from 'react'
import Form from './Form'
import PersonalInfo from './PersonalInfo'
import Education from './Education'
import WorkExperience from './WorkExperience'
import Preview from './preview'


const App = (props) => {

  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [tel, setTel] = useState('')
  const [degree, setDegree] = useState('')
  const [school, setSchool] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [ongoing, setOngoing] = useState(false)
  const [jobTitle, setJobTitle] = useState('')
  const [employer, setEmployer] = useState('')
  const [fromDateWork, setFromDateWork] = useState('')
  const [toDateWork, setToDateWork] = useState('')
  const [ongoingWork, setOngoingWork] = useState(false)
  const [activities, setActivities] = useState('')
  const [workChildren, setWorkChildren] = useState(null)
  const [educationChildren, setEducationChildren] = useState(null)
  const [hide, setHide] = useState(true)

  const onSubmit = (e) => {
    e.preventDefault()

  }

  const handleFirst = (e) => {
    setFirst(e.target.value)
  }

  const handleLast = (e) => {
    setLast(e.target.value)
  }

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleTel = (e) => {
    setTel(e.target.value)
  }

  const handleDegree = (e) => {
    setDegree(e.target.value)
  }

  const handleSchool = (e) => {
    setSchool(e.target.value)
  }

  const handleFromDate = (e) => {
    setFromDate(e.target.value)
  }

  const handleToDate = (e) => {
    setToDate(e.target.value)
  }

  const handleOngoing = (e) => {
    setOngoing(!ongoing)
  }
  
  const handleJobTitle = (e) => {
    setJobTitle(e.target.value)
  }

  const handleEmployer = (e) => {
    setEmployer(e.target.value)
  }

  const handleFromDateWork = (e) => {
    setFromDateWork(e.target.value)
  }

  const handleToDateWork = (e) => {
    setToDateWork(e.target.value)
  }

  const handleOngoingWork = (e) => {
    setOngoingWork(!ongoing)
  }

  const handleActivities= (e) => {
    setActivities(e.target.value)
  }

  const educations = [];


  const addEducation = () => {
    setEducationChildren(educationChildren + 1)
    return(educations)
  }

  const removeEducation = () => {
    setEducationChildren(educationChildren - 1)
    return(educations.pop())
  }

  for(var i = 0; i < educationChildren; i += 1){
    educations.push(<Education key={i} number={i}><button className="ui button red" onClick={removeEducation}> - Education</button></Education>)
  }

  const workExperience = [];


  const addWorkExperience = () => {
    setWorkChildren(workChildren + 1)
    return(workExperience)
  }

  const removeWorkExperience = () => {
    setWorkChildren(workChildren - 1)
    return(workExperience.pop(workChildren))
  }

  for(var i = 0; i < workChildren; i += 1){
    workExperience.push(<WorkExperience key={i} number={i}><button className="ui button red" onClick={removeWorkExperience}> - Work Experience</button></WorkExperience>)
  }



  const handlePreview = () => {
    setHide(!hide)

}

  return(
    <Fragment>
        <Form formHide={!hide} onSubmit={onSubmit} handlePreview={handlePreview}>
          <PersonalInfo first={first} handleFirst={handleFirst} last={last} handleLast={handleLast} email={email} handleEmail={handleEmail} tel={tel} handleTel={handleTel}/>

          <Education degree={degree} handleDegree={handleDegree} school={school} handleSchool={handleSchool} fromDate={fromDate} handleFromDate={handleFromDate} toDate={toDate} handleToDate={handleToDate} ongoing={ongoing} handleOngoing={handleOngoing}/>

          {educations}

          <button className="ui button" onClick={addEducation}> + Education & Training </button>
          
          <br/>


          <WorkExperience jobTitle={jobTitle} handleJobTitle={handleJobTitle} employer={employer} handleEmployer={handleEmployer} fromDateWork={fromDateWork} handleFromDateWork={handleFromDateWork} toDateWork={toDateWork} handleToDateWork={handleToDateWork} ongoingWork={ongoingWork} handleOngoing={handleOngoingWork} activities={activities} handleActivities={handleActivities} />

          {workExperience}

          <button className="ui button" onClick={addWorkExperience}> + Work Experience </button>

          <br/>
          <br/>

        </Form>

        {hide === true ? <div>Click to view preview</div> : <Preview first={first} last={last} email={email} tel={tel} degree={degree} school={school} fromDate={fromDate} toDate={toDate} ongoing={ongoing} jobTitle={jobTitle} employer={employer} fromDateWork={fromDateWork} toDateWork={toDateWork} ongoingWork={ongoingWork} activities={activities} workChildren={workExperience} educationChildren={educations} onSubmit={onSubmit} handlePreview={handlePreview}/> }



    </Fragment>
  )
}


export default App