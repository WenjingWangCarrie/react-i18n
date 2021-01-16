import React from 'react';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';

class ProductItem extends React.Component {

  	constructor(props) {
  	  	super(props);
  	  	this.goBack = this.goBack.bind(this);

    	this.state = {  
    		items: [],
      		result: [],	
      		icon: [],
    	}
    }
 
    componentDidMount() { 
        fetch(
            `https://fortnite-api.theapinetwork.com/item/get?id=${this.props.match.params.id}`)
        .then(res => res.json())
        .then(data => {
          	this.setState({
           	 	items: data.data, // '<data>' in the json file 
           	 	result: data.data.item,
           	 	icon: data.data.item.images,
          	})
        })
        .catch((err) => {
          	console.log(err);
        });
    }

    goBack() {
    	this.props.history.goBack();
    }

    render() {
      	const { result, icon } = this.state;
      	const { t } = this.props;

		return (
			<div className="container-fluid"> 
				<div className="col-md-4 offset-md-4">
					<div className="card">
						<img id="simg" src={icon.icon} className="card-img-top" alt="" />
						<div className="card-body">
							<h5 className="card-title">{result.name}</h5>
							<p className="card-text">Description: {result.description}</p>
						</div>

					 	<div className="card-footer">
                       	 <button class="btn btn-light btn-lg btn-block" onClick={ this.goBack }>{t("Go Back")}</button>
                    	</div>
					</div>
				</div>
			
			</div>
		); 
    }  
 
}

export default withTranslation()(ProductItem);

