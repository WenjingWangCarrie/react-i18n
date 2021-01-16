import React from 'react';
import { Link } from 'react-router-dom';

import { withTranslation } from 'react-i18next';

class Products extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }
    }
 
    componentDidMount() {
        fetch('https://fortnite-api.theapinetwork.com/store/get')
            .then(res => res.json())
            .then(data => {
                this.setState({
                    items: data.data, // '<data>' in the json file
                    isLoaded: true,
                })
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        const { isLoaded, items } = this.state;
        const { t } = this.props;

        if (!isLoaded) {
            return <div>Loading.....</div>;
        }

        return (
            <div className="container-fluid">
                <center><h1>{t("Products List")}</h1></center>

                {items.map(item => (
                    <h1 key={item.itemId}>
                        <Link to={`/products/${item.itemId}`}>{item.item.name}</Link>
                    </h1>
                ))}
            </div>  
        );  
    }
  
}

export default withTranslation()(Products);