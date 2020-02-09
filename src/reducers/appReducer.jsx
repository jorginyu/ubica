const appReducer = (state = {
     contacts: [

     ]
}, action) => {
     let newState = JSON.parse(JSON.stringify(state));
     switch (action.type) {
          case 'NOU_ELEMENT':
               newState.elements.push(action.item);
               return newState;
          case 'NETEJA_ELEMENTS':
               newState.elements = [];
               return newState;
          default:
               return state;
     }
}
export default appReducer;