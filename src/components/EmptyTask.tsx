import emptyListImg from '../assets/clipboard.svg'

import styles from './EmptyTask.module.css'

export function EmptyTask() {
  return (
    <div className={styles.emptyTaskList}>
      <img src={emptyListImg} alt="Empty list iamge" />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong> <br />
        Crie tarefas e organize seus itens a fazer
      </p>
    </div>
  )
}