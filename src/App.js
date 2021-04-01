import DateDashboard from './components/DateDashboard';
import Navbar from './components/layout/Navbar';
import GlobalStyle from './helpers/GlobalStyle';

function App() {
	return (
		<>
			<GlobalStyle />
			<div className="App">
				<Navbar />
				<DateDashboard />
			</div>
		</>
	);
}

export default App;
