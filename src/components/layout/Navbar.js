import styled from 'styled-components';
import { Avatar } from '@material-ui/core';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import NotificationsOutlinedIcon from '@material-ui/icons/NotificationsOutlined';

const Navbar = () => {
	return (
		<StyledNavbar>
			<div className="container">
				<a href="#">
					<h1>Productively</h1>
				</a>
				<ul>
					<li>
						<span>New</span>
						<div className="icon">
							<AddOutlinedIcon />
						</div>
					</li>
					<li>
						<span>Notifications</span>
						<div className="icon">
							<NotificationsOutlinedIcon />
						</div>
					</li>
					<li>
						<span>Settings</span>
						<div className="icon">
							<SettingsOutlinedIcon />
						</div>
					</li>
					{/* <li>
						<span className="username">Username</span>
						<Avatar />
					</li> */}
				</ul>
			</div>
		</StyledNavbar>
	);
};

const StyledNavbar = styled.nav`
	/* display: flex; */
	width: 100%;
	height: 6vh;
	padding: 0rem 2rem;
	background: #f8f9fa;
	color: #212529;

	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 1200px;
		height: 100%;
		margin: 0 auto;
	}

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
		font-size: 0.85rem;
	}

	li {
		margin: 0 0.5rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		line-height: 1;
		font-weight: bold;

		.icon {
			margin-left: 0.5rem;
		}

		.username {
			margin-right: 0.5rem;
		}

		&:hover {
			color: #0066ff;
		}
	}
`;

export default Navbar;
