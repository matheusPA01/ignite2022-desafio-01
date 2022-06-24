import { ChangeEvent, FormEvent } from 'react';

import styles from './CreateNewTask.module.css'
import plusIcon from '../assets/plus.svg'

interface CreateTaskProps {
  handleTask: (event: ChangeEvent<HTMLInputElement>) => void
  taskContent: string;
  createTask: (event: FormEvent) => void
}

export function CreateNewTask({ handleTask, taskContent, createTask }: CreateTaskProps) {
  return (
    <div className={styles.createNewTask}>
      <form>
        <input
          type="text"
          id="addNewTask"
          placeholder="Adicione uma nova tarefa"
          onChange={handleTask}
          value={taskContent}
        />
        <label htmlFor="addNewTask" />

        <button
          type="submit"
          onClick={createTask}
        >
          Criar
          <img src={plusIcon} alt="Plus icon" />
        </button>
      </form>
    </div>
  )
}