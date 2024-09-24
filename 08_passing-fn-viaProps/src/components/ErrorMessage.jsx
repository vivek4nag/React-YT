import PropTypes from 'prop-types';
//prop-types are mainly for improving code quality and catching issues during development. While not mandatory, they are highly recommended, especially for larger apps or teams.


// in below code items inside { } means we are directly destructuring the array which is being passed in items from the app.jsx file
// we receive the items prop from the parent (App.jsx).
// ({ items }): This is object destructuring. We are extracting the items prop from the props object directly in the function signature.
const ErrorMessage = ({ items }) => {

    return (
        <>
        {items.length === 0 && <h3>I am Still Hungry</h3>}
        </>
    )
}

// The error message you are seeing, items is missing in props validation, is related to ESLint warning you about not defining the expected propTypes for the ErrorMessage component.

// In React, prop-types is a way to validate the types of the props passed to a component. ESLint is reminding you that you haven’t defined the validation for the items prop in the ErrorMessage component.
ErrorMessage.propTypes = {
    items: PropTypes.array.isRequired
  };

export default ErrorMessage