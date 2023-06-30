import { FaCheck } from 'react-icons/fa'

const focusCheck = (props) => {
  return (
    <div className='focusCheck__content'>
        <FaCheck/>
        <p>{props.description}</p>
    </div>
  )
}

export default focusCheck