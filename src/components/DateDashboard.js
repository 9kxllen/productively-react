import styled from 'styled-components';
import Clock from 'react-live-clock';

const DateDashboard = () => {
	return (
		<Wrapper>
			<p>Good Morning : Afternoon : Evening, Name.</p>
			<h3>
				<Clock format="dddd, MMMM do" />
			</h3>
			<h2>
				<Clock format="HH:mm:ss" interval={1000} ticking={true} />
			</h2>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	h2 {
		font-size: 5rem;
	}

	h3 {
		font-size: 3rem;
	}

	p {
		margin-bottom: 1.5rem;
	}
`;

export default DateDashboard;
