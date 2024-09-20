import './App.css'

function App() {

  return <div>
    This is my test div
    {/* in JSX instead of class we use className bcz class is reserved keyword in JS. React uses **className** to define the class attribute for HTML elements. */}
    {/* also do note that the following buttons are copy pasted directly from bootstrap */}
    <button type="button" className="btn btn-primary">Primary</button>
    <button type="button" className="btn btn-secondary">Secondary</button>
    <button type="button" className="btn btn-success">Success</button>
    <button type="button" className="btn btn-danger">Danger</button>
    <button type="button" className="btn btn-warning">Warning</button>
    <button type="button" className="btn btn-info">Info</button>
    <button type="button" className="btn btn-light">Light</button>
    <button type="button" className="btn btn-dark">Dark</button>
    <button type="button" className="btn btn-link">Link</button>
  </div>
}

export default App
