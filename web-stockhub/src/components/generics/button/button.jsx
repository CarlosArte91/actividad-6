import { useNavigate } from 'react-router-dom'
import styles from './button.module.css'

export default function Button ({ title, goTo, handleModal }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (goTo) navigate(goTo)
    else if (handleModal) handleModal()
  }

  return (
    <button
      className={styles.main_button}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}
