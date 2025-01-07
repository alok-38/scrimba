import reactLogo from './assets/react.svg'
import './App.css'

function App() {

  return (
    <div>
      <header>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo"
            style={{ width: '28.93px', height: '28.93px', padding: 0, display: 'flex' }} />
        </a>
        <h2>ReactFacts</h2>
      </header>
      <main>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K stars on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </div>
  )
}

export default App
