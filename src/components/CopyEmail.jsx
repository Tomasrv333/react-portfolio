import { useRef } from "react";
import { FaCopy } from "react-icons/fa";

const CopyEmail = () => {
    const textToCopyRef = useRef(null);
    const copyText = () => {
      if (textToCopyRef.current) {
        const textToCopy = textToCopyRef.current.innerText;
        navigator.clipboard.writeText(textToCopy)
          .then(() => {
            alert('Email copied to clipboard!')
          })
          .catch((err) => {
            console.error('Failed to copy text: ', err)
          })
      }
    }

  return (
    <div className='hero__copyEmail' onClick={copyText}>
        <span ref={textToCopyRef}>tomasrv123@gmail.com</span>
        <FaCopy/>
    </div>
  )
}

export default CopyEmail