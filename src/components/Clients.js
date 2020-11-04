import React from 'react'; 

class Clients extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			clients: [],
			isLoaded: false
		}
	} 

    /**
     * componentDidMount
     *
     * Fetch json array of objects from given url and update state.
     */
	componentDidMount() {
		fetch('http://jsonplaceholder.typicode.com/users')
			.then(res => res.json())
			.then(data => {
				this.setState({
					clients: data,
					isLoaded: true, 
				})
			}).catch((err) => {
				console.log(err);
			}); 
	}

	render() { 
		const { isLoaded, clients } = this.state;

		if (!isLoaded) {
			return <div>Loading.....</div>;
		} 
		
		return (
			<div class="container-fluid">
				<center><h1>Clients List</h1></center>

				{clients.map(client => ( // if () change to {}, can't display data
					<div class="card">
						<div class="card-body">
							<h4 class="card-title">{client.name}</h4>
							<h5 class="card-subtitle mb-2 text-muted">{client.email}</h5>
							<p class="card-text">{client.company.name}</p> 
						</div>
					</div>
				))}
			</div>	
		);	
	}

}

export default Clients;
