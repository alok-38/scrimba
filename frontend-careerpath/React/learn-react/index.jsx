const { useState } = React;

function Counter() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <button onClick={handleClick}>
            You pressed me {count} times
        </button>
    );
}

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);
root.render(<Counter />);