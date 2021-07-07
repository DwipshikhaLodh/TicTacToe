import React from 'react';

//here props is an object & the custom 
//attributes that we pass, it get received as key-value pair under 
//the object "props"

//by default in (), whatever we write that name will be an object's name
// so inside (), we can destructure the object as using {} & and the key_name 
//we want to destructure
const Square_box = ({ val, onClick, iswinningsquare }) =>{
return (
  <>
    <button type="button" className="btn" onClick={onClick} style={{ fontWeight: iswinningsquare ? 'bold' : 'normal'}}> {val} </button> 
  </>
)
};

//if iswinningsquare is true then fontweight is bold else normal

//onClick in button tag is the eventlistener while onClick inside {} is a key which is destructured & stores a function "handlesquareclick()"

//if custom attribute is as: val = {1} & props.val => 1.
//so for acessing value of a key of an object in gen we do
//as: object_name.Key_name. Simillarly here we do as: props.val

//now we know that we can destructure any object in a function
//expression so we'll do that here also as: ({ val }) in function 
// then we can use the key in return body of function as:
// {val}, where {} are used since we need to display JS inside JSX

//children Props-- where children is the fixed & default key_name
//of the object which takes any text or tag/element as its value
//e.g. - //<Square_box>
          //<p>gfgh</p>
          //hfgg
        //</Square_box>
// & in func component it will be as: (props) & in return part, will
// be used as: {props.children}   
// but we can destructure props object as: ({val, children}) & can be 
// used in return part as: {children}   

export default Square_box;