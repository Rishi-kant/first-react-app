import { Fragment } from 'react';
import './App.css';

export default function Components() {
  return (
    <Fragment>
   <h1>I am heading one ...from first copmonent</h1>
   <Component2 />
   <Component3 />
   <Component4 />
   </Fragment>
  );
}

function Component2(){
return(
  <h2>I am heading two ... from second component</h2>
)
}
function Component3(){
  return(
    <h2>I am heading three ...from third component</h2>
  )
  }
  function Component4(){
    return(
     <button>Click me!!</button>
    )
    }

