import React from 'react';

// things to do in an array
const thingsToDo = ['go golfing', 'sunbathing', 'see a theatre', 'go hiking', 'see the Eiffel Tower'];
const listThings = thingsToDo.map((thing) =>
  <li key={thing}>
    {thing}
  </li>
);

class Info extends React.Component {
    render(){
        return(
            <div>
            Are you planning a holiday? Or perhaps you need a getaway from the dark Finnish fall?<br /> What ever the case is, this <i>React.js</i> site will provide an answer for you. Try the example <code>things to do</code> below.<br /> It will suggest a suitable location for action in mind. 
            <ul>{listThings}</ul>
            </div>
        )
    }
}

export default Info;
