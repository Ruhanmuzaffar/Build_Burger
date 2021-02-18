// <Aux> is used to wrap the components that are adjascent
// e.g if two <div>s are adjascent , it will cause an error, but if we wrap them with hoc,it wont cause an error

const aux = (props) => props.children;

export default aux;
