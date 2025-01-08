const root = ReactDOM.createRoot(document.getElementById("root"));

// Define props
const props = {
    style: { color: "#ffffff" },
    className: "greeting"
};

// Create React element with props
const reactElement = React.createElement("h1", props, "Hello from createElement with props!");

console.log(reactElement);

root.render(reactElement);
