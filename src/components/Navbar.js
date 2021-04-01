import styled from 'styled-components';

const Navbar = () => {
	return (
		<StyledNavbar>
			<h1>Productively</h1>
			<ul>
				<li>Profile</li>
				<li>New</li>
			</ul>
		</StyledNavbar>
	);
};

const StyledNavbar = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 2rem;
	background: #f8f9fa;
	color: #212529;

	h1 {
		color: #0066ff;
		font-size: 2rem;
		font-family: 'Lobster', cursive;
	}

	ul {
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
	}

	li {
		margin: 0 1rem;
		cursor: pointer;
		padding: 1.5rem 0;
		border-bottom: 3px solid transparent;

		&:hover {
			color: #0066ff;
			border-bottom: 3px solid #0066ff;
		}
	}
`;

export default Navbar;
