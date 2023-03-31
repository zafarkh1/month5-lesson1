import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import UseParam from './components/useParam/UseParam';

import "./App.css";

function App() {
  return (
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='name/:id' element={<UseParam />} />
		</Routes>
  );
}

export default App;