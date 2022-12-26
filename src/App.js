import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import AvailableData from './db/availableData.json';
import ReviewData from './db/reviewData.json';
import ReviewLists from './pages/ReviewLists';
import ReviewWrite from './pages/ReviewWrite';

function App() {
  	return (
		<main className="contents_wrap">
			<Router>
				<Routes>
					<Route path="/" element={ <ReviewLists ReviewData={ ReviewData } AvailableData={ AvailableData } /> } />
					<Route path="/write/:id" element={ <ReviewWrite ReviewData={ ReviewData } /> } />
				</Routes>
			</Router>
		</main>
  	);
}

export default App;
