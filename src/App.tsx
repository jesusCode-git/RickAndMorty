import { useEffect, useState } from "react";
import Card from './components/card.tsx'


function App() {
  const [character, setCharacters] = useState([]);
   useEffect(() => { fetch("https://rickandmortyapi.com/api/character") .then((res) => res.json()) .then((data) => setCharacters(data.results)); }, []);

  return (
    <div>
      <h1>Rick and Morty Character</h1>
      {character.map((characters) => (        <Card
          key={characters.id}
          name={characters.name}
          status={characters.status}
          image={characters.image}
        />
      ))}
    </div>
  );
}

export default App;
