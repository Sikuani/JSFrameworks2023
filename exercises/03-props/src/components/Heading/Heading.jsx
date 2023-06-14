<<<<<<< HEAD
const Heading = ({ children}) => {
    return <h1>{children}</h1>
}

export default Heading;
=======
// Create a component called `<Heading />`. This component should render any children props to the screen.

// Import and your render you `<Welcome />` component in `<App />` like this:

// ```jsx
// <Heading>Welcome to my React App!</Heading>
// ```

// ### Acceptance Criteria

// - I should create a component called `<Heading />` that renders children props to the screen.
// - The `<App />` component should use the `<Heading />` component to render the text "Welcome to my React App!" to the screen.

export function Heading(props) {
  return <h2>{props.children}</h2>;
}
>>>>>>> 1102a559497e14c7cbd0096e6cec5a4f1808d6fb
