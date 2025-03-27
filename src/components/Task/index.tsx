import { Trash } from 'phosphor-react'
import styles from './styles.module.css'

interface TaskProps {
    id: number
    goal: string
}

export function Task({id,goal}:TaskProps) {
    return(
        <div className={styles.taskContainer}>
            <input type="checkbox" name={`taskCheck ${id}`} id={`taskCheck ${id}`} />
            <label htmlFor={`taskCheck ${id}`} className={styles.goalText}>{goal}</label>
            <button>
                <Trash />
            </button>
        </div>
    )
}