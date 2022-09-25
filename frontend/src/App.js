import { Routes, Route } from 'react-router-dom';
import AmbilParam from './components/AmbilParam';
import Home from './components/Home';
function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/ambil/:id' element={<AmbilParam />} />
    </Routes>
  );
}
export default App;
