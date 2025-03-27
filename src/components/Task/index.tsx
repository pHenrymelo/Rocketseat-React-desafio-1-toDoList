import { Trash } from 'phosphor-react'
import styles from './styles.module.css'
import { useState } from 'react'

interface TaskProps {
    id: number
    goal: string
    onDeleteTask: (id:number) => void
    onCompleteTask: (id:number) => void
    onUncompleteTask: (id:number) => void
}

export function Task({id, goal, onDeleteTask, onCompleteTask, onUncompleteTask}:TaskProps) {

    const [isCompleted, setIsCompleted] = useState(false)

    const handleDeleteTask = () => {
        onDeleteTask(id)
    }

    const handleChangeTaskCompletude = () => {
        const newCompletudeState = !isCompleted
        setIsCompleted(newCompletudeState)

        if(newCompletudeState) {
            onCompleteTask(id)
        } else {
            onUncompleteTask(id)
        }
    }

    return(
        <div className={styles.taskContainer}>
            <input 
                type="checkbox" 
                name={`taskCheck ${id}`} 
                id={`taskCheck ${id}`} 
                checked={isCompleted} 
                onChange={handleChangeTaskCompletude} 
            />
            <label htmlFor={`taskCheck ${id}`} className={styles.goalText}>{goal}</label>
            <button onClick={handleDeleteTask}>
                <Trash />
            </button>
        </div>
    )
}