import { useState } from 'react';
import './App.css'
function App() {
  const [isCompleted, setIsCompleteScreen] = useState(false)


  return (
    <div className="App">
      <h1>TODO APPLICATION</h1>

      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <label>Title</label>
            <input type="text" placeholder='type in your title' />
          </div>

          <div className="todo-input-item">
            <div>
              <label>Description</label>
              <input type="text" placeholder='type in your description' />
            </div>
          </div>

          <div className='button'></div>
          <button type='button' className='primary-btn'>ADD</button>
        </div>

        <div className='btn-area'>
          <button className=
            {`secondary-btn ${!isCompleted ? `active` : ''}`}
            onClick={() => setIsCompleteScreen(false)}>TODO</button>

          <button className=
            {`secondary-btn ${isCompleted ? `active` : ''}`}
            onClick={() => setIsCompleteScreen(true)}>DONE</button>

          <div className='todo-list'>

            <div className='todo-list-item'>
              <h2>TODO</h2>
              <p>Description</p>
              <p>Actions</p>


            </div>
          </div>



        </div>
      </div>

    </div>

  );


}
export default App
