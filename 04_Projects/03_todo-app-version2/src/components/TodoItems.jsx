/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        // basically map use kr rhe ho to specific key chayhe.. but wo hai nhi to eror ko supress krne ke liye ye niche wala commented out line daala hai
        // eslint-disable-next-line react/jsx-key
        <TodoItem todoDate={item.duedate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
