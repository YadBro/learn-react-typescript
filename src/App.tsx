import './App.css';
import { Greet } from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';

function App() {
  const personName = {
    first: 'Yadi',
    last: 'Apriyadi',
  };

  const nameList = [
    {
      first: 'Yadi',
      last: 'Apriyadi',
    },
    {
      first: 'Udin',
      last: 'Terpesona',
    },
    {
      first: 'Budi',
      last: 'Harimawan',
    },
  ];
  return (
    <div className="App">
      <Greet name="Yadi" messageCount={5} isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
