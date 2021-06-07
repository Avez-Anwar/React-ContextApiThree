import React from "react";
import "./styles.css";
import User from "./User";
import { Provider } from "./Context";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "React",
      value: 10
    };
  }

  handleClickContext = () => {
    this.setState({ value: this.state.value + 1 });
  };
  render() {
    const contextValue = {
      data: this.state,
      handleClick: this.handleClickContext
    };
    return (
      <div className="App">
        <Provider value={contextValue}>
          <User />
        </Provider>
      </div>
    );
  }
}
