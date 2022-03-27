import React from 'react';

function Redirection(props) {
  window.location = props.href;
  return (
    <section>Redirecting to {props.href}, one moment...</section>
  );
}

export default Redirection;