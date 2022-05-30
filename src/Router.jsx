import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterScreen from './components/Counter/Counter';
import ArchiveScreen from './components/Archive/Archive';
import CreateScreen from './components/Create/Create';
import { CounterProvider } from './context/counterContext';

function App() {
	return (
		<CounterProvider>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<CounterScreen />} />
					<Route path='/archive' element={<ArchiveScreen />} />
					<Route path='/create' element={<CreateScreen />} />
				</Routes>
			</BrowserRouter>
		</CounterProvider>
	);
}

export default App;
