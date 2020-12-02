import { render } from "@testing-library/react";

const Redirect = (props) => {
    props.history.push('/Posts')
    return(
       <p>Wait!</p>
    );
} 
export default Redirect;