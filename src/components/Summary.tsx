import styles from './Summary.module.css'

interface TaskCount {
  tasks: number;
  completedTasks: number;
}

export function Summary({ tasks, completedTasks }: TaskCount) {
  return (
    <div className={styles.tasksSummary}>
      <p>Tarefas Criadas <span>{tasks}</span></p>
      <p>Concluídas <span>{completedTasks} de {tasks}</span></p>
    </div>
  )
}