import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './TodoForm.module.css';

interface TodoFormProps {
  onSubmit: (newTodoText: string) => void;
}

export function TodoForm({ onSubmit }: TodoFormProps) {
  const [todoText, setTodoText] = useState('');

  function handleTodoTextChange(event: ChangeEvent<HTMLInputElement>) {
    setTodoText(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    onSubmit(todoText);
    setTodoText('');
  }

  return (
    <form className={styles.todoForm} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        onChange={handleTodoTextChange}
        value={todoText}
      />
      <button type="submit" disabled={todoText.length === 0}>
        Criar
        <PlusCircle size={16}/>
      </button>
    </form>
  );
}