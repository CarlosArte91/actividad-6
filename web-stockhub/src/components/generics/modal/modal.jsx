import Button from '../button/button'
import styles from './modal.module.css'

export default function Modal ({ handleModal, text }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <p className={styles.modaltext}>
          {text}
        </p>

        <Button title="Done" handleModal={handleModal} />
      </div>
    </div>
  )
}
