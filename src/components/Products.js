import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';

function Products() {
	useEffect(() => {
		fetchItems();
	}, []);

	const [items, setItems] = useState([]);

	const fetchItems = async () => {
		const data = await fetch('https://fortnite-api.theapinetwork.com/store/get');

		const items = await data.json();
		console.log(items.data);

		setItems(items.data); // return "data" array
	}

	const { t } = useTranslation();

	return (
		<div className="container-fluid">
			<center><h1>{t("Products List")}</h1></center>
		 
			{items.map(item => (
				<h1 key={item.itemId}>
					<Link to={`/products/${item.itemId}`}>{item.item.name}</Link>
				</h1>
			))}
			
		</div>
	)
}

export default Products;