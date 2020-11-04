import React, { useState, useEffect } from 'react';   
import { useHistory } from "react-router-dom";

function ProductItem({ match }) {
	
	let history = useHistory(); // go back page

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

	return (
		<div class="container-fluid"> 
			<div class="col-md-4 offset-md-4">
				<div class="card">
					<img src={result.item.images.icon} class="card-img-top" alt="" />
					<div class="card-body">
						<h5 class="card-title">{result.item.name}</h5>
						<p class="card-text">Description: {result.item.description}</p>
					</div>

					 <div className="card-footer">
                        <button class="btn btn-primary btn-lg btn-block" onClick={() => history.goBack()}>Go Back</button>
                    </div>
				</div>
			</div>
			
		</div>
	);
}

export default ProductItem;