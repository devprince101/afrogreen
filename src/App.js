import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import Router from './components/Redirect';

function App() {
 
  return (
    <RouterProvider router={Router}/>
  );
}

export default App;
