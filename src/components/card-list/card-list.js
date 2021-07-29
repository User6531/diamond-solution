import React from 'react';
import Card from '../card/card';
import { getResource, apiKey } from '../services/services';

import './card-list.css'

export default class CardList extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
    };
    pageTitle;


    componentDidMount() {
        const urlParams = new URLSearchParams(window.location.search);
        const query = urlParams.get('q');

        let resource;
        if (this.props.path === 'main') {
            resource = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1&language=ru`;
            this.pageTitle = 'Top movies';
        } else if (this.props.path === 'search') {
            resource = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1&include_adult=false`;
            this.pageTitle = `Results for ${query}`;
        }

        getResource(resource)
        .then((response) => {
            this.setState({
                isLoaded: true,
                items: response.results
            });
        },(error) => {
            this.setState({
                isLoaded: true,
                error
            });
        });
    }

    render () {
        const { error, isLoaded, items } = this.state;
        
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            let notFound;
            if (items.length < 1){
                notFound = <div className="not-found">Not Found</div>
            }
            const films = items.map((post)=>{
                const {id} = post;
                return (
                    <div key={id} className="film-wrapper">
                            <Card {...post} />
                    </div>
                )
            });
            return (
                <>
                <h1 className="page-title" >{this.pageTitle}</h1>
                <div className="page">
                    {notFound}
                    {films}
                </div>
                </>
            )
        }
    }
}