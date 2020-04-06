// import React, { Component } from'react';

// class Counter extends Component {

//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//     };
//   }

//   handleCounter = (value) => {
//     this.setState({count: value});
//   }

//   render() {
//     return (
//       <div>
//         <p>The counter is at : {this.state.count}</p>
//         <button onClick={() => this.handleCounter(this.state.count + 1)}>>
//           +1
//         </button>
//         <button onClick={() => this.handleCounter(this.state.count - 1)}>>
//           -1
//         </button>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";

 function Counter(props) {
  // Declares a new state variable, which we will call "count"
  // Declares a setCount function that allows you to modify the count value
  const[count, setCount] = useState(props.countValue);

  return (
    <div>
      <p>The counter is at : {count} </p>
      <button onClick={() => setCount(count + 1)}>>
        +1
      </button>
      <button onClick={() => setCount(count - 1)}>>
        -1
      </button>
    </div>
  );
}

export default Counter;


