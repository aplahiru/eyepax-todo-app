import React, { useState } from "react";
import "../../../styles/Posts.css";
import TodoService from '../../../services/todoService';
import Modal from "../Modal/Modal";

export interface TodosProps {
  todos: any;
}

const columns = [
  { id: "User Id" },
  { id: "Id" },
  { id: "Title" },
  { id: "Completed" },
];

const Todos: React.FunctionComponent<TodosProps> = ({ todos }) => {
  const [modal, setModal] = useState(false);
  const [itemDetails, setItemDetails] = useState<any>([])
  
  const handleGetItemDetails = async (itemId: number) => {
        const res = await TodoService.getTodo(itemId);
        
        setItemDetails(res);
    }

  const toggleModal = (itemId: number) => {
      if(!modal) {
        handleGetItemDetails(itemId)
      }
      setModal(!modal);
   };

  if (modal) {
    document.body.classList.add("active-modal");
  } else {
    document.body.classList.remove("active-modal");
  }
  return (
    <>
    <table className="content-table">
      <thead>
        <tr>
          {columns.map((columnName: any, index: number) => (
            <th key={index}>{columnName.id}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {todos.map((todo: any, index: number) => (
          <tr key={index} onClick={()=>toggleModal(todo.id)}>
            <td>{todo.userId}</td>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>
              {todo.completed ? (
                <div className="completed-style">Completed</div>
              ) : (
                <div className="not-completed-style">Not Completed</div>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
      {modal && itemDetails && <Modal toggleModal={()=>setModal(!modal)} itemDetails={itemDetails} />}
      </>
  );
};

export default Todos;
