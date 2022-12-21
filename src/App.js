import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AvailableData from './db/availableData.json';
import ReviewData from './db/reviewData.json';
import ReviewLists from './pages/ReviewLists';
import ReviewWrite from './pages/ReviewWrite';

function App() {
  	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={ <ReviewLists data={ ReviewData } /> } />
					<Route path="/write/:id" element={ <ReviewWrite data={ AvailableData } /> } />
				</Routes>
			</Router>
		</div>
  	);
}

export default App;
