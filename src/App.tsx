import { Header } from "./components/Header"
import { NewTaskForm } from "./components/NewTaskForm"

import styles from './App.module.css'
import './global.css'

import clipboard from './assets/Clipboard.svg'
import { Task } from "./components/Task"
import { useState } from "react"

interface Task {
  id: number,
  goal: string,
  isCompleted: boolean
}

export function App() {

  const [newTaskGoal, setNewTaskGoal] = useState('')
  const [tasks, setTasks] = useState<Task[]>([])
  const [completedTasks, setCompletedTasks] = useState<Task[]>([])

  const clearNewTaskInput = () => {
    setNewTaskGoal('')
  }

  const newTaskInputChange = (content: string) => {
    setNewTaskGoal(content)
  }

  const createTask = () => {
    const newTaskId = tasks.length + 1
    setTasks([...tasks, { id: newTaskId, goal: newTaskGoal, isCompleted: false}])
    clearNewTaskInput()
  }

  const deleteTask = (id: number) => {
    const taskListWithoutDeletedTask = tasks.filter(task => {
      return task.id !== id
    })
    setTasks(taskListWithoutDeletedTask)
  }

  const completeTask = (id: number) => {
    const completedTask = tasks.find(task => {
      return task.id === id
    })

    if(completedTask){
      setCompletedTasks([...completedTasks, completedTask])
    }

  }

  const uncompleteTask = (id: number) => {
    const completedQuestsWithoutUncompletedOne = completedTasks.filter(task => {
      return task.id !== id
    })
    setCompletedTasks(completedQuestsWithoutUncompletedOne)
  }

  const tasksIsEmpty = tasks.length === 0
  const completedTasksNumber = completedTasks.length

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <NewTaskForm createTask={createTask} newTaskInputChange={newTaskInputChange} newTaskGoal={newTaskGoal} />
        <main>
            <div className={styles.taskStatus}>
                <div className={styles.createdTasksLabel}>
                    Tarefas criadas <span>{tasks.length}</span>
                </div>
                <div className={styles.tasksCountLabel}>
                    Concluídas <span>{completedTasksNumber} de {tasks.length}</span>
                </div>
            </div>
            <div className={styles.taskList}>
              {
                tasksIsEmpty ? (
                  <div className={styles.tasksEmpty}>
                    <img src={clipboard} alt="prancheta" />
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </div>
                ) : (
                  tasks.map(task => {
                    return(
                    <Task
                      key={task.id}
                      id={task.id} 
                      goal={task.goal}
                      onDeleteTask={deleteTask}
                      onCompleteTask={completeTask}
                      onUncompleteTask={uncompleteTask} 
                    />)
                  })
                )
              }
                
                
            </div>
        </main>
      </div>
    </div>
  )
}


