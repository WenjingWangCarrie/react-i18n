import React from 'react'; 
import { withTranslation } from 'react-i18next';

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

		const { t } = this.props;

		if (!isLoaded) {
			return <div>Loading.....</div>;
		} 
		
		return (
			<div className="container-fluid">
				<center><h1>{t("Clients List")}</h1></center>

				{clients.map(client => ( // if () change to {}, can't display data
					<div className="card">
						<div className="card-body">
							<h4 className="card-title">{client.name}</h4>
							<h5 className="card-subtitle mb-2 text-muted">{client.email}</h5>
							<p className="card-text">{client.company.name}</p> 
						</div>
					</div>
				))}
			</div>	
		);	
	}

}

export default withTranslation()(Clients);
