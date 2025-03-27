import { Header } from "./components/Header"
import { NewTaskForm } from "./components/NewTaskForm"

import styles from './App.module.css'
import './global.css'

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm />

      </div>
    </div>
  )
}


