import React from 'react'
import './index.css'

const SlotM = (props) => {

    // let x = '😄';
    // let y = '🎅';
    // let z = '😄';

    // let x = props.x;
    // let y = props.y;
    // let z = props.z;

//   object distructing 

    let {x,y,z} = props;
  
    if((x==y) && (y==z)){
      return(
        <>
        <div className="slot_inner">
          <h1> {x} {y} {z} </h1>
          <h1>This is matching</h1>
          <hr />
        </div>
        </>
      );
    }
    else{
      return(
        <>
        <div className="slot_inner">
          <h1> {x} {y} {z} </h1>
          <h1>This is  not matching</h1>
          <hr />
        </div>
        </>
      );
  
    }
  }

  export default SlotM;