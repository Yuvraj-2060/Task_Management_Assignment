import {Route, Routes} from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import AddTask from './component/AddTask';
import EditTask  from './component/EditTask';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/addTask' element={<AddTask />}></Route>
          <Route path='/editTask/:id' element={<EditTask />}></Route>
      </Routes>

    </>
      
  );
}

export default App;
