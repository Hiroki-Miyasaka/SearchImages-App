import './App.css';
import ImageGallery from './components/ImageGallery';

function App() {
  return (
    <div className="container">
      <h2>Pictures</h2>
      <form>
        <input type="text" placeholder='search pictures'/>
      </form>
      <ImageGallery/>
    </div>
  );
}

export default App;
