import { Route, Routes } from 'react-router-dom';
import About  from './About';
import Home from './Home';
import Product from './Product';
import './App.css';


function App() {
	return (
		<div>
	 	
			<Routes>
				<Route
					path='/'
				  element={<Home />}
				/>
				<Route
					path='/about'
					element={<About />}
				/>
				<Route
					path='/Product/Store'
					element={<Product />}
				/>
			</Routes>
		</div>
	);
}

export default App;

