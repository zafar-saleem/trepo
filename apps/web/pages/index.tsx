import React from 'react';
import styled from 'styled-components';
import { Board } from 'board';
import { Popup } from 'popup';
import { Card } from 'card';

const Col = styled.div`
  padding: 1em;
  box-sizing: border-box;
  border-right: 1px solid #ccc;
`;

type TTodos = {
  title?: string;
  column?: string;
}

export default function Web() {
  const [todos, setTodos] = React.useState<TTodos[]>([]);
  const [showPopup, setShowPopup] = React.useState<boolean>(false);
  let progress: any = [];

  const handleSaveTodo = (event: any) => {
    event.preventDefault();
    setTodos((prev) => [{ title: event.target?.title.value, column: 'todo' }, ...prev] as any);
    setShowPopup(!showPopup);
  }

  return (
    <div>
      <h1 style={{textAlign: 'center'}}>Kanban Board</h1>
      <Popup showPopup={showPopup} setShowPopup={setShowPopup}>
        <h2>Add Todo</h2>
        <form onSubmit={handleSaveTodo}>
          <div>
            <label>Title</label>
            <input autoFocus type="text" name="title" />
          </div>
          <div>
            <button>Save</button>
          </div>
        </form>
      </Popup>
      <Board>
        <Col>
          <h2>TO DO</h2>
          {
            todos?.map((todo, index) => (
              <div key={index}>
                {
                  todo.column === 'todo' && <Card>
                    <h3>{todo?.title}</h3>
                    <button onClick={() => setTodos((prev) => {
                      if (todo.title === prev[index]?.title) {
                        progress.push({title: todo.title, column:'progress'});
                        prev.splice(index, 1);
                      }
                      return [...progress, ...prev];
                    })}>Move To In Progress</button>
                  </Card>
                }
              </div>
            ))
          }
          <button onClick={() => setShowPopup(!showPopup)}>Add</button>
        </Col>
        <Col>
          <h2>IN PROGRESS</h2>
          {
            todos?.map((todo, index) => (
              <div key={index}>
                {
                  todo.column === 'progress' && <Card>
                    <h3>{todo?.title}</h3>
                    <button onClick={() => setTodos((prev) => {
                      if (todo.title === prev[index]?.title) {
                        progress.push({title: todo.title, column:'testing'});
                        prev.splice(index, 1);
                      }
                      return [...progress, ...prev];
                    })}>Move To Testing</button>
                  </Card>
                }
              </div>
            ))
          }
        </Col>
        <Col>
          <h2>TESTING</h2>
          {
            todos?.map((todo, index) => (
              <div key={index}>
                {
                  todo.column === 'testing' && <Card>
                    <h3>{todo?.title}</h3>
                    <button onClick={() => setTodos((prev) => {
                      if (todo.title === prev[index]?.title) {
                        progress.push({title: todo.title, column:'done'});
                        prev.splice(index, 1);
                      }
                      return [...progress, ...prev];
                    })}>Mark As Done</button>
                  </Card>
                }
              </div>
            ))
          }
        </Col>
        <Col>
          <h2>DONE</h2>
          {
            todos?.map((todo, index) => (
              <div key={index}>
                {
                  todo.column === 'done' && <Card bgColor="green">
                    <h3>{todo?.title}</h3>
                    <b>DONE</b>
                  </Card>
                }
              </div>
            ))
          }
        </Col>
      </Board>
    </div>
  );
}
