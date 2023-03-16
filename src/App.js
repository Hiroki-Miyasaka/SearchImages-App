import { useRef, useState, useEffect } from "react";
import './App.css';
import ImageGallery from './components/ImageGallery';
// import dotenv from "dotenv";

// dotenv.config();

const apiKey = "34459942-b0649ea6b1f026a3b68982766";

function App() {
  const [fetchData, setFetchData] = useState([]);
  const [query, setQuery] = useState("");


  const ref = useRef();



  useEffect(() => {
    if(query != ""){
      const URL = `https://pixabay.com/api/?key=${apiKey}&q=${query}`;
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.hits);
          setFetchData(data.hits);
        })
    }
  }, [query]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ref.current.value);
    setQuery(ref.current.value);
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
