// S => State
// T => Type
// Key => Key
// V => Value
// S => Element

// represents for the function that it can use a S type, and you define what S is.
// When do you define the type? the first time you call the function. Like, you send
// a string, and the function will only allow strings.


function useState<S>() {
  let state:  S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };

}

const newState = useState<string>();

// newState.setState(1234);  error
newState.setState('foo');

console.log('new state', newState.getState());

// if you want to delimite the types


function useState2<S extends number | string = string>() { 
  let state:  S;
}

// then, the call will define if its number or string. If you try to define as boolean, you can't.

// number | string = string says that string is the default
// its like (acceptable types) = string