import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {details} = props
  console.log(details[0] === 'REGISTERED')
  return (
    <div className="bg-div">
      {details === '' ? (
        <p className="no-activate-event">
          Click on an event, to view its registration details
        </p>
      ) : null}

      {details[0] === 'REGISTERED' ? (
        <div className="registered">
          <img
            className="registered-img"
            src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
            alt="registered"
          />
          <h4 className="no-activate-event">
            You have already registered for the event
          </h4>
        </div>
      ) : null}
      {details[0] === 'REGISTRATIONS_CLOSED' ? (
        <div className="registrations-closed">
          <img
            className="registrations-closed-img"
            src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
            alt="registrations closed"
          />
          <h1>Registrations Are Closed Now!</h1>
          <p>Stay tuned. We will reopen</p>
        </div>
      ) : null}
      {details[0] === 'YET_TO_REGISTER' ? (
        <div className="yet-to-register">
          <img
            className="yet-to-register-img"
            src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
            alt="yet to register"
          />
          <p>
            A live performance brings so much to your relationship with dance.
            seeing dance live can often make you fall totally in love with this
            beautiful art form.
          </p>
          <button className="register-btn" type="button">
            Register Here
          </button>
        </div>
      ) : null}
    </div>
  )
}

export default ActiveEventRegistrationDetails
