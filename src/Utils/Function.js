/**
 * Generic function to handle all the input
 *
 * @param {*} event
 * @param {*} component
 */

export const dynamicHandleChange = (event, component) => {
  component.setState({
    [event.target.name]: event.target.value
  });
};
