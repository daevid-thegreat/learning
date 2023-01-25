import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText, setStatus}) => {
  const inputTextHandler = (e) =>{
    console.log(e.target.value);
    setInputText(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setTodos([...todos, {text : inputText, completed : false, id:Math.random() * 1000}]);
    setInputText("");
  }
  const statusHandler = (e) => {
    setStatus(e.target.value);
  }

    return (
        <form>
        <input type="text" value={inputText} onChange={inputTextHandler} className="todo-input" />
        <button className="todo-button" onClick={submitHandler} type="submit">
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select onChange={statusHandler} name="todos" className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    )
}

export default Form;