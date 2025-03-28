import { PlusCircle } from 'phosphor-react'
import styles from './styles.module.css'

interface NewTaskFormProps {
    newTaskGoal: string
    createTask: () => void
    newTaskInputChange: (content: string) => void
    
}

export function NewTaskForm({createTask, newTaskInputChange, newTaskGoal}: NewTaskFormProps) {

    const handleCreateTask = () => {
        event?.preventDefault()
        createTask()
    }

    const handleNewTaskInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        newTaskInputChange(event?.target.value)
    }

    const isTaskGoalEmpty = newTaskGoal.length === 0

    return(
        <div className={styles.newTaskFormContainer}>
            <form onSubmit={handleCreateTask}>
                <input
                type="text"
                className={styles.taskInput}
                placeholder='Adicione uma nova tarefa'
                onChange={handleNewTaskInputChange}
                value={newTaskGoal}
                />
                <button type='submit' disabled={isTaskGoalEmpty}>
                    Criar
                    <PlusCircle />
                </button>
            </form>
        </div>
    )
}