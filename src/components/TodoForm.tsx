import styles from './TodoForm.module.css';


export function TodoForm() {
  return (
    <form className={styles.todoForm} >
      <input type="text" placeholder="Adicione uma nova tarefa" />
      <button type="submit">
        Criar 
      </button>
    </form>
  );
}