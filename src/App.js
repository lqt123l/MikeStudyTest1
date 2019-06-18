import React from 'react';
import AddTodo from './containers/AddTodo';
import VisibleTodoList from './containers/VisibleTodoList';
import Footer from './containers/Footer';
import './App.css';


const App = () => {
  return (
    <div className="App">
      <h1>Redux Test</h1>
      <AddTodo>
      </AddTodo>
      <VisibleTodoList>
      </VisibleTodoList>
      <Footer>
      </Footer>
    </div >
  );
}

export default App;




