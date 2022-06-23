import { Task } from './Task';
import { ChangeEvent, FormEvent, useState, useEffect } from 'react';

import styles from './Tasks.module.css';

import plusIcon from '../assets/plus.svg'
import { EmptyTask } from './EmptyTask';

interface Task {
  id: number;
  content: string;
  isCompleted: boolean;
}

export function Tasks() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskContent, setTaskContent] = useState('');
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  useEffect(() => {
    setCompletedTaskCount(tasks.filter(task => task.isCompleted).length)
  })

  function handleTaskContent(event: ChangeEvent<HTMLInputElement>) {
    setTaskContent(event.target.value)
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const addNewTask = {
      id: tasks.length + 1,
      content: taskContent,
      isCompleted: false
    }

    if (!taskContent) {
      alert('Não pode ser vazio')
    } else {
      setTasks([...tasks, addNewTask])
      setTaskContent('');
    }
  }

  function handleToggleTaskCompleted(id: number) {
    const toggleTask = tasks.map(task => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task);

    setTasks(toggleTask);
  }

  function deleteTask(id: number) {
    const deleteTask = tasks.filter(task => task.id !== id);

    setTasks(deleteTask);
  }

  if (tasks.length > 0) {
    return (
      <main>
        <div className={styles.createNewTask}>
          <form>
            <input
              type="text"
              id="sz"
              placeholder="Adicione uma nova tarefa"
              onChange={handleTaskContent}
              value={taskContent}
            />
            <label htmlFor="sz" />

            <button
              type="submit"
              onClick={handleCreateNewTask}
            >
              Criar
              <img src={plusIcon} alt="Plus icon" />
            </button>
          </form>
        </div>

        <div className={styles.createdTasksList}>
          <div className={styles.tasksSummary}>
            <p>Tarefas Criadas <span>{tasks.length}</span></p>
            <p>Concluídas <span>{completedTaskCount} de {tasks.length}</span></p>
          </div>
          <ul>
            {
              tasks.map(task => {
                return (
                  <Task
                    key={task.content}
                    id={task.id}
                    content={task.content}
                    isCompleted={task.isCompleted}
                    handleToggleTask={handleToggleTaskCompleted}
                    deleteTask={deleteTask}
                  />
                )
              })
            }
          </ul>
        </div>
      </main>
    )
  } else {
    return (
      <main>
        <div className={styles.createNewTask}>
          <form>
            <input
              type="text"
              id="sz"
              placeholder="Adicione uma nova tarefa"
              onChange={handleTaskContent}
              value={taskContent}
            />
            <label htmlFor="sz" />

            <button
              type="submit"
              onClick={handleCreateNewTask}
            >
              Criar
              <img src={plusIcon} alt="Plus icon" />
            </button>
          </form>
        </div>

        <div className={styles.createdTasksList}>
          <div className={styles.tasksSummary}>
            <p>Tarefas Criadas <span>{tasks.length}</span></p>
            <p>Concluídas <span>{completedTaskCount} de {tasks.length}</span></p>
          </div>
        </div>

        <EmptyTask />
      </main>
    )
  }
}