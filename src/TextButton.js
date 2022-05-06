import React from 'react';

const TextButton = (props) => (
  <button onClick={props.onClick}>{props.buttonText}</button>
);

export default TextButton;
