import styles from './Todo.module.css';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';

export function Todo() {
  return (
    <main className={styles.todoWrapper}>
      <div className={styles.todoContainer}>
        <TodoForm />
        <div className={styles.todoCountContainer}>
          <div className={styles.todoCountLeading}>
            <strong>Tarefas criadas</strong>
            <strong className={styles.todoCountBadge}>5</strong>
          </div>
          <div className={styles.todoCountTrailing}>
            <strong>Concluídas</strong>
            <strong className={styles.todoCountBadge}>2 de 5</strong>
          </div>
        </div>
        <ul>
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul> 
      </div>
    </main>
  )
}