// Write your code here

import './index.css'

const EventItem = props => {
  const {eventDetails, setActiveId, isActive} = props
  const {imageUrl, name, location, id} = eventDetails

  const onClickEvent = () => {
    setActiveId(id)
  }

  return (
    <li>
      <button type="button" className="btn" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="" />
      </button>
      <p>{name}</p>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
