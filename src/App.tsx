import './App.css';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Oscar } from './components/Oscar';
import { Status } from './components/Status';

function App() {
  return (
    <div className="App">
      <Status status="success" />
      <Heading>Placeholder text HI</Heading>
      <Oscar>
        <Heading>YEAH</Heading>
      </Oscar>
      <Greet name="Yadi" messageCount={10} isLoggedIn={true} />
    </div>
  );
}

export default App;
