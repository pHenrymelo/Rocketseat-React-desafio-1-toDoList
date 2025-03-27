import { PlusCircle } from 'phosphor-react'
import styles from './styles.module.css'

export function NewTaskForm() {
    return(
        <div className={styles.newTaskFormContainer}>
            <form>
                <input
                type="text"
                className={styles.taskInput}
                placeholder='Adicione uma nova tarefa'
                />
                <button type='submit' className={styles.createTaskButton}>
                    Criar
                    <PlusCircle />
                </button>
            </form>
        </div>
    )
}