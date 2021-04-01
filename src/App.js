import DateDashboard from './components/DateDashboard';
import Navbar from './components/Navbar';
import GlobalStyle from './helpers/GlobalStyle';

function App() {
	return (
		<>
			<div className="App">
				<Navbar />
				<DateDashboard />
			</div>
			<GlobalStyle />
		</>
	);
}

export default App;
