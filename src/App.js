import React from 'react';
import AddTodo from './containers/AddTodo';
import TodoList from './containers/TodoList';
import Footer from './containers/Footer';
import addTodoAction from './actions/addTodo';
import toggleTodoAction from './actions/toggleTodo';
import './App.css';


function App({ todos, store, visibilityFilter, getNextTodoId }) {

  const getVisibleTodos = (todos, filter) => {
    switch (filter) {
      case 'SHOW_ALL':
        return todos;
      case 'SHOW_COMPLETED':
        return todos.filter(
          t => t.completed
        );
      case 'SHOW_ACTIVE':
        return todos.filter(
          t => !t.completed
        )
      default:
          return todos;
    }
  };

  const visibleTodos = getVisibleTodos(todos, visibilityFilter);

  const onAddClick = (text) => {
    store.dispatch({
      ...addTodoAction,
      id: getNextTodoId(),
      text
    })
  }

  const onTodoClick = (id) => {
    store.dispatch({
      ...toggleTodoAction,
      id
    })
  }


  return (
    <div className="App">
      <h1>Redux Test</h1>
      <AddTodo
        onAddClick={onAddClick}
      >
      </AddTodo>
      <TodoList
        todos={visibleTodos}
        onTodoClick={onTodoClick}>
      </TodoList>
      <Footer
        store = {store}
      >
      </Footer>
    </div >
  );
}

export default App;

