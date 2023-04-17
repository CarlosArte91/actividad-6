import { useNavigate } from 'react-router-dom'
import styles from './groupButtons.module.css'

export default function GroupButtons ({ buttons }) {
  const navigate = useNavigate()
  const { button1, button2, button3 } = buttons

  return (
    <aside className={styles.container}>
      <button
        className={styles.each_button}
        onClick={() => navigate(button1.goTo)}
      >
        {button1.text}
      </button>

      <button
        className={styles.each_button}
        onClick={() => navigate(button2.goTo)}
      >
        {button2.text}
      </button>

      <button
        className={styles.each_button}
        onClick={() => navigate(button3.goTo)}
      >
        {button3.text}
      </button>
    </aside>
  )
}
