import React from 'react';
import './App.css';
import Home from './pages/Home';
import { useDispatch} from 'react-redux';
import { requestRobots } from './redux/actions';
import { link } from './api/robotsApi';

function App() {

  const dispatch = useDispatch();
  dispatch(requestRobots(link));
    
  return (
    <Home/>
  );
}

export default App;
