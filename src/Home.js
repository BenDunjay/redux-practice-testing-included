import React, { useState } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset, changeCountTo } from "./actions";

const Home = (props) => {
  const [changeCount, setChangeCount] = useState(0);

  const handleChange = (e) => {
    const { value } = e.target;
    setChangeCount(parseInt(value, 0));
  };

  const handleSubmit = () => {
    props.changeCountTo(changeCount);
    setChangeCount(0);
  };

  return (
    <div>
      <p>Current Count: {props.count} </p>
      <button onClick={props.increment}>+</button>
      <button onClick={props.decrement}>-</button>
      <button onClick={props.reset}> Reset</button>
      <br></br>
      <input
        type="number"
        value={changeCount}
        onChange={(e) => handleChange(e)}
      />
      <button onClick={handleSubmit}>Change Count</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count.count,
  };
};

export default connect(mapStateToProps, {
  increment,
  decrement,
  reset,
  changeCountTo,
})(Home);
