import { useRef } from "react";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const CopyEmail = () => {
  const textToCopyRef = useRef(null);
  const copyText = () => {
    if (textToCopyRef.current) {
      const textToCopy = textToCopyRef.current.innerText;
      navigator.clipboard.writeText(textToCopy)
        .then((response) => {
          toast('✅ Copiado!', response)
        })
        .catch((err) => {
          toast('😪 No se pudo copiar.', err)
        })
    }
  }

  return (
    <div className='hero__copyEmail' onClick={copyText}>
        <span ref={textToCopyRef}>tomasrv123@gmail.com</span>
        <FaCopy/>
        <ToastContainer
          position="bottom-center"
          autoClose={4000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={false}
          draggable
          pauseOnHover
          theme="light"
        />
    </div>
  )
}

export default CopyEmail