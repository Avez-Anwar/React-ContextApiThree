import React from "react";
import { Consumer } from "./Context";

function Guest() {
  return (
    <div>
      <h3>Guest Component</h3>
      <Consumer>
        {({ data, handleClick }) => (
          <div>
            <h1>
              Name: {data.name}
              <br />
              Value: {data.value}
              <br />
            </h1>
            <button onClick={handleClick}>Chage Value</button>
          </div>
        )}
      </Consumer>
    </div>
  );
}

export default Guest;
