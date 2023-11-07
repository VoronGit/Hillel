import styles from './App.module.scss'
import Applyform from "./components/ApplyForm/ApplyForm"

function App() {

  return (
    <>
      <div className={styles.mainBlock}>
        <Applyform></Applyform>
      </div>
    </>
  )
}

export default App
