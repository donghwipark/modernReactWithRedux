// Import the react and react do libraries
import React from 'react';
import ReactDOM from 'react-dom';

function getButtonText() {
  return 'Click me!!';
}

// Create a react components
const App = () => {
  const buttonText = {text: 'Click me'};
  const style = { backgroundColor: 'blue', color: 'white' };
  const labelText = 'Enter name'

  return (
    <div>
      <label className="label" htmlFor="name">
        {labelText}
      </label>
      <input id="name" type="text" />
      <button style={style}>
        {buttonText.text}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);