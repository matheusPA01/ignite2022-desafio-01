import { ChangeEvent, FormEvent, useState, useEffect } from 'react';

import styles from './Tasks.module.css';

import { EmptyTask } from './EmptyTask';
import { Summary } from './Summary';
import { CreateNewTask } from './CreateNewTask';
import { Task } from './Task';

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
        <CreateNewTask
          handleTask={handleTaskContent}
          taskContent={taskContent}
          createTask={handleCreateNewTask}
        />

        <div className={styles.createdTasksList}>
          <Summary
            tasks={tasks.length}
            completedTasks={completedTaskCount}
          />
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
        <CreateNewTask
          handleTask={handleTaskContent}
          taskContent={taskContent}
          createTask={handleCreateNewTask}
        />

        <div className={styles.createdTasksList}>
          <Summary
            tasks={tasks.length}
            completedTasks={completedTaskCount}
          />
        </div>

        <EmptyTask />
      </main>
    )
  }
}