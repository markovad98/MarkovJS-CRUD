import React from 'react';
import { Jumbotron, Button } from 'reactstrap';

export const AboutBlock = () => {
	return (
		<div>
			<Jumbotron>
				<h1 className="display-3">Hello, world!</h1>
				<p className="lead">My name is Alexey Markov and this is my test CRUD web-application</p>
				<hr className="my-2" />
				<p>Have fun!</p>
				<p className="lead">
					<Button onClick={() => alert('Hello, friend!')} color="primary">
						Learn More
					</Button>
				</p>
			</Jumbotron>
		</div>
	);
};
