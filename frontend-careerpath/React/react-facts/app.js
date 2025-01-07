function Header() {
    return (
        <header>
            <nav>
                <div>
                    <img src="./reactjs-icon.png" alt="ReactJS logo" />
                </div>
                <div>
                    <a href="/">ReactFacts</a>
                </div>
            </nav>
        </header>
    );
}

function Main() {
    const reasons = ['Fun', 'Interesting', 'Fast'];

    return (
        <main>
            <div className="left">
                <h3>Fun facts about React</h3>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 200K stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
            </div>
            <div className="right">
                <h3>Why am I excited to learn react</h3>
                <ul>
                    {reasons.map((item, index) => {
                        return <li key={index}>{item}</li>; // Make sure to return JSX
                    })}
                </ul>
            </div>
        </main>
    );
}


function App() {
    return (
        <div>
            <Header />
            <Main />
        </div>
    );
}

// Find the DOM element to mount the app
const domNode = document.getElementById('app');

// Render the App component to the DOM
ReactDOM.createRoot(domNode).render(<App />);
