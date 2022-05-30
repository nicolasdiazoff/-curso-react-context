import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Header', () => {
	render(
		<Header title={'Header'} total={0}>
			<button>header button</button>
		</Header>
	);
	const linkElement = screen.getByText(/Header/i);
	expect(linkElement).toBeInTheDocument();
});
