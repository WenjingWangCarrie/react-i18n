import React from 'react';
import '../App.css';

import { useTranslation } from 'react-i18next';

export default function Home() { 
	const { t } = useTranslation();

	return (
		<div className="container-fluid">
			<h1 className="text-center">{t("Welcome")}!</h1>
           	<img src="react.png" width="800" height="500" alt="React"></img>
		</div>
	) 
}

