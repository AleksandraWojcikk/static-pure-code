import { useEffect, useState } from 'react';
import './App.css';



function App() {

type HeaderProps = {
  title: string;
  numberInTitle: number;
}
type FooterProps = {
  info: string;
}


interface Character {
  name: string;
}


  const Header = ({title, numberInTitle}: HeaderProps) => {
    return (<h2>{title} {numberInTitle}</h2>);
  }

  const Footer =({info}: FooterProps) => {
    return (<h2>{info}</h2>);
  }

  //Fetchowanie danych z zew. API
 const [charakters, setCharakters] = useState<Character[]>([]);
 
  useEffect(() => {
  fetch('https://rickandmortyapi.com/api/character?page=1')
  .then(response => response.json())
  .then(data => setCharakters(data.results)) //jezeli nie nie ma wew. danych klucza results, to mozna zostawic samo data (bez .results)
 },[])  

  


  return (
    <>
    <Header title="Przykładowy nagłówek" numberInTitle={1} />
      <h1> Statyczna analiza kodu </h1>
      {/* wyświetlenie danych pobranych z API */}
      {charakters.map((character)=>{
          return(<div>
            {character.name}
          </div>)
        })}



      <Footer info="Przykładowy footer" />
      








        
    </>
  );
  }

export default App;
