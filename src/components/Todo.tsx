import { useState } from 'react';
import { ITodo } from '../types/Todo';
import styles from './Todo.module.css';
import { TodoForm } from './TodoForm';
import { TodoItem } from './TodoItem';

export function Todo() {

  const [todos, setTodos] = useState<ITodo[]>([]);

  function handleSubmitTodoForm(newTodoText: string) {
    setTodos(todos => [...todos, {
      description: newTodoText,
      status: "created",
      id: new Date().getTime(),
    }]);
  }

  function handleTodoStatusChange(currentTodo: ITodo): void {
    const todoIndex = todos.findIndex(todo => todo.id === currentTodo.id)
    const newTodos = Array.from(todos);
    newTodos[todoIndex].status = currentTodo.status;
    setTodos(newTodos);
  }

  function handleTodoDelete(currentTodo: ITodo): void {
    const todoIndex = todos.findIndex(todo => todo.id === currentTodo.id)
    const newTodos = Array.from(todos);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  function countTodosWhenIsDone(): number {
    return todos.reduce<number>((acc, todo) => todo.status === "completed" ? acc + 1 : acc, 0);
  }

  return (
    <main className={styles.todoWrapper}>
      <div className={styles.todoContainer}>
        <TodoForm onSubmit={handleSubmitTodoForm} />
        <div className={styles.todoCountContainer}>
          <div className={styles.todoCountLeading}>
            <strong>Tarefas criadas</strong>
            <strong className={styles.todoCountBadge}>{todos.length}</strong>
          </div>
          <div className={styles.todoCountTrailing}>
            <strong>Concluídas</strong>
            <strong className={styles.todoCountBadge}>{countTodosWhenIsDone()} de {todos.length}</strong>
          </div>
        </div>
        <ul>
          {
            todos.map((todo, index) => <TodoItem
              key={todo.id}
              todo={todo}
              onStatusChange={handleTodoStatusChange}
              onDelete={handleTodoDelete}
            />)
          }
        </ul>
      </div>
    </main>
  )
}