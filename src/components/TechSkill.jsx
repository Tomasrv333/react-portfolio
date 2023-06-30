const TechSkill = (props) => {

  return (
    <div className={`skill__content skill__content--${ props.variant === 'vertical' ? 'vertical' : 'horizontal' }`}>
      <img src={props.icon} alt={props.alt} />
      <p>{props.name}</p>
    </div>
  )
}

export default TechSkill