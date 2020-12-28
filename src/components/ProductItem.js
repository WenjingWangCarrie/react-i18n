import React, { useState, useEffect } from 'react';   
import { useHistory } from 'react-router-dom';
import "../App.css"; 


import { useTranslation } from 'react-i18next';

function ProductItem({ match }) { 

	useEffect(() => {
		 fetchItem();
		 console.log(match);
	}, [match.params.id]);

	const fetchItem = async () => {
	 	const fetchData = await fetch(
	 		`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`);
 
	 	const result = await fetchData.json();
	 	console.log(result);  

	 	setItem(result.data);
	 };

	const [result, setItem] = useState({
		item: {
			images: {}
		}
	});

	const history = useHistory();

	const { t } = useTranslation();

	return (
		<div className="container-fluid"> 
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<img id="simg" src={result.item.images.icon} className="card-img-top" alt="" />
					<div className="card-body">
						<h5 className="card-title">{result.item.name}</h5>
						<p className="card-text">Description: {result.item.description}</p>
					</div>

					 <div className="card-footer">
                        <button class="btn btn-light btn-lg btn-block" onClick={() => {history.goBack()} }>{t("Go Back")}</button>
                    </div>
				</div>
			</div>
			
		</div>
	);
}

export default ProductItem;