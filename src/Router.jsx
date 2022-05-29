import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CounterScreen from './Counters/Counter';
import ArchiveScreen from './Counters/Archive';
import CreateScreen from './Create/Create';
import { CounterProvider } from './Context/counterContext';

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
