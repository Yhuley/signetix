import { useSelector } from 'react-redux';
import Card from "./components/card/Card.jsx";
import Filter from "./components/filter/Filter";
import "./App.scss"

function App() {
  const store = useSelector(store => store)

  
  return (
    <>
      <h2 className="title">High Real Estate</h2>
      <Filter />
      <div className="wrapper">
        {store.map(store => {
          return (
            <Card data={store} key={store.id} />
          )
        })}
      </div>
    </>
  );
}

export default App;
