import styles from '@/styles/MountainsList.module.css'
import { Link } from "react-router-dom"
const MountainsList = () => {
  return (
    <div className={styles.list}>
      <p>Here is MountainsList</p>
      <p>See details
      <Link to={`/details/1`}>Greater Chimgan</Link>
      </p>
    </div>
  )
}

export default MountainsList;
