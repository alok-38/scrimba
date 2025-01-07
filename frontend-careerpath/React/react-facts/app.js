function Header() {
    return (
        <nav>
            <div>
                <img src="./reactjs-icon.png" alt="reactjs icon" />
            </div>
            <div>
                <a href="/">ReactFacts</a>
            </div>
        </nav>
    )
}

function App() {
    return (
        <Header />
    )
}

const domNode = document.getElementById('app');
const root = ReactDOM.createRoot(domNode);
root.render(<App />);