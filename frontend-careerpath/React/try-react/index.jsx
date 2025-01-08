const root = ReactDOM.createRoot(document.getElementById("root"));

// Define props
const props = {
    style: { color: "#ffffff" },
    className: "greeting"
};

// Create React element with props using React.createElement
const reactElement = React.createElement("h1", props, "Hello from createElement with props!");

// JSX syntax for creating an element
const JSXElement = <h1>Hello from JSX!</h1>; // JSX element is used directly

console.log(reactElement); // This will log the react element created with React.createElement()

// Wrap both elements inside a parent element (e.g., <div>)
const combinedElement = (
    <div>
        {reactElement}
        {JSXElement}
    </div>
);

// Render the combined element
root.render(combinedElement);
