import { Header } from "./components/Header"
import { NewTaskForm } from "./components/NewTaskForm"

import styles from './App.module.css'
import './global.css'

import clipboard from './assets/Clipboard.svg'
import { Task } from "./components/Task"

export function App() {

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm />
        <main>
            <div className={styles.taskStatus}>
                <div className={styles.createdTasksLabel}>
                    Tarefas criadas <span>0</span>
                </div>
                <div className={styles.tasksCountLabel}>
                    Concluídas <span>0</span>
                </div>
            </div>
            <div className={styles.taskList}>
                <div className={styles.tasksEmpty}>
                    <img src={clipboard} alt="prancheta" />
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
                <Task id={1} goal="Esse é o textoahsjkdgasdlkhgaskljdhaslkjhdlkashdashdo objetivo da tarefa" />
                <Task id={2} goal="Esse é o texto do objetivo da tarefa" />
                <Task id={3} goal="Esse é o texto do objetivo da tarefa" />
            </div>
        </main>
      </div>
    </div>
  )
}


