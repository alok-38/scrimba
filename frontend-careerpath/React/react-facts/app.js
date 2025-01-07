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
    return (
        <main>
            <h1>Fun facts about React</h1>
            <div>
                <ul>
                    <li>Was first released in 2013</li>
                    <li>Was originally created by Jordan Walke</li>
                    <li>Has well over 200K stars on GitHub</li>
                    <li>Is maintained by Meta</li>
                    <li>Powers thousands of enterprise apps, including mobile apps</li>
                </ul>
                <img src="./Group.png" alt="ReactJS logo" />
            </div>
        </main>
    )
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
