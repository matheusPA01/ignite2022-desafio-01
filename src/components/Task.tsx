import trashIcon from '../assets/trash.svg'

import styles from './Task.module.css'

interface TaskProps {
  id: number;
  content: string;
  isCompleted: boolean;
  handleToggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

export function Task({ id, content, isCompleted, handleToggleTask, deleteTask }: TaskProps) {


  return (
    <li className={styles.createdTaskListItem}>
      <label className={styles.customCheckbox}>
        <input
          readOnly
          type="checkbox"
          checked={isCompleted}
          onClick={() => handleToggleTask(id)}
        />
        <p className={isCompleted === true ? styles.taskChecked : ''}>
          {content}
        </p>
      </label>

      <button onClick={() => deleteTask(id)}>
        <img src={trashIcon} alt="trash icon" />
      </button>
    </li>
  )
}