import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CountersScreen from './pages/Counters';
import CounterScreen from './pages/Counter';
import ArchiveScreen from './pages/Archives';
import CreateScreen from './pages/Create';
import { CounterProvider } from './context/counterContext';

function App() {
	return (
		<CounterProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<CountersScreen />} />
					<Route path='/archive' element={<ArchiveScreen />} />
					<Route path='/create' element={<CreateScreen />} />
					<Route
						path='/counter/:counterId'
						element={<CounterScreen />}
					/>
				</Routes>
			</BrowserRouter>
		</CounterProvider>
	);
}

export default App;
