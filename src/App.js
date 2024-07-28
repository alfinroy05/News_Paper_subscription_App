import logo from './logo.svg';
import './App.css';
import Add from './News_paper/Add';
import Search from './News_paper/Search';
import Delete from './News_paper/Delete';
import Nav from './News_paper/Nav';
import View from './News_paper/View';
import Index from './News_paper/Index';
import { BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Index/>}/>
  <Route path='/add' element={<Add/>}/>
  <Route path='/delete' element={<Delete/>}/>
  <Route path='/search' element={<Search/>}/>
  <Route path='/view' element={<View/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
