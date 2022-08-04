import { ChangeEvent } from 'react';
import { ITodo } from '../types/Todo';
import styles from './TodoItem.module.css';
import { Trash } from 'phosphor-react'

interface TodoItemProps {
  todo: ITodo;
  onDelete: (todo: ITodo) => void;
  onStatusChange: (todo: ITodo) => void;
}

export function TodoItem({ todo, onDelete, onStatusChange }: TodoItemProps) {
  function handleStatusChange(event: ChangeEvent<HTMLInputElement>) {
    const checked = event.target.checked;
    onStatusChange({
      ...todo,
      status: checked ? "completed" : "created",
    })
  }

  function handleDelete() {
    onDelete(todo);
  }

  return (
    <li className={styles.todoItem}>
      <div className={styles.itemGroup}>
        <div className={styles.checkboxContainer}>
          <input
            type="checkbox"
            checked={todo.status === "completed"}
            onChange={handleStatusChange}
          />
        </div>
        <p className={todo.status === "completed" ? styles.todoItemDone : ''}>
          {todo.description}
        </p>
      </div>
      <button type="button" onClick={handleDelete}>
        <Trash size={16} />
      </button>
    </li>
  )
}