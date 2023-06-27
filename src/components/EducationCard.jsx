const EducationCard = (props) => {
  return (
    <div className="education-card__content">
      <div>
        <h4>{props.title}</h4>
        <span>{props.info}</span>
      </div>
      <div>
        <p>{props.status}</p>
      </div>
    </div>
  )
}

export default EducationCard