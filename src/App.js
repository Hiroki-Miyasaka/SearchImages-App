import { useRef, useState } from "react";
import './App.css';
import ImageGallery from './components/ImageGallery';

const API_KEY = "34459942-b0649ea6b1f026a3b68982766";

function App() {
  const [fetchData, setFetchData] = useState([]);


  const ref = useRef();
  // const URL = "https://pixabay.com/api/?key=" + API_KEY + "&q=" + `apple`;


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);

    const endpointURL = `https://pixabay.com/api/?key=34459942-b0649ea6b1f026a3b68982766&q=${ref.current.value}`;

    fetch(endpointURL)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data.hits);
        setFetchData(data.hits);
      })
  }

  

  return (
    <div className="container">
      <h2>Pictures</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input type="text" placeholder='search pictures' ref={ref} />
      </form>
      <ImageGallery fetchData={fetchData} />
    </div>
  );
}

export default App;
