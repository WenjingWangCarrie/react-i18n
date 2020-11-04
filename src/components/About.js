import React, {Component} from 'react';

class About extends React.Component {
	render() {
		return (
			<div class="container-fluid">
				<h1 class="text-center">React Router</h1>
				<p>Routing is a process in which a user is directed to
				different pages based on their action or request. </p>
				<p>ReactJS Router is mainly used for developing Single Page Web Applications. 
				React Router is used to define multiple routes in the application. 
				When a user types a specific URL into the browser, 
				and if this URL path matches any 'route' inside the router file, 
				the user will be redirected to that particular route.</p>
				<p>React Router is a standard library system built on top of the React 
				and used to create routing in the React application using React Router Package. 
				It provides the synchronous URL on the browser with data that 
				will be displayed on the web page. It maintains the standard structure 
				and behavior of the application and mainly used for developing 
				single page web applications.</p>

				<h2>Lifecycle</h2>
				<p>You should populate data with AJAX calls in the <strong>componentDidMount</strong> lifecycle method. 
				This is so you can use setState to update your component when the data is retrieved.</p>

				<h2>REAT API</h2>
				<p>An API is an application programming interface. It is a set of rules that allow programs 
				to talk to each other. The developer creates the API on the server and allows the client 
				to talk to it.</p>
				<p>REST determines how the API looks like. It stands for “Representational State Transfer”. 
				It is a set of rules that developers follow when they create their API. One of these rules 
				states that you should be able to get a piece of data (called a resource) when you link to 
				a specific URL. Each URL is called a request while the data sent back to you is called a response.</p>
				<p>Use URL to perform a request with GET, POST, PUT, PATCH and DELETE methods.</p>

				<h2>How does EmailJS works?</h2>
				<p>EmailJS helps sending emails using client side technologies only. 
				No server is required – just connect EmailJS to one of the supported
				email services, create an email template, and use our Javascript 
				library to trigger an email.</p>
			</div>
		);
	}
}

export default About;