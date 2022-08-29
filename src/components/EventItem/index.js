import './index.css'

const Eventitems = props => {
  const {eventDetails, clicked, clickStatus} = props
  const {id, imageUrl, name, location} = eventDetails

  const eventClick = () => {
    clicked(id)
  }

  return (
    <li className="li">
      <button className="btn" onClick={eventClick} type="button">
        <img
          className={
            clickStatus === true ? 'event-item-img g-bdr' : 'event-item-img'
          }
          src={imageUrl}
          alt="event"
        />
        <p className="event-item-h">{name}</p>
        <p className="event-item-p">{location}</p>
      </button>
    </li>
  )
}

export default Eventitems
