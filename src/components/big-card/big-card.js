import React from 'react';
import { getResource, apiKey } from '../services/services';

import './big-card.css';

export default class BigCard extends React.Component {
    state = {
        error: null,
        isLoaded: false,
        items: []
      };

    componentDidMount() {
        const currentId = this.props.match.params.id;

        getResource(`https://api.themoviedb.org/3/movie/${currentId}?api_key=${apiKey}&language=ru`)
        .then(response => {
            this.setState({
                isLoaded: true,
                items: response
              });
        },(error) => {
            this.setState({
              isLoaded: true,
              error
            });
        });
    }
        
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const {poster_path, title, original_title, overview, vote_average, release_date} = items;
            const imgPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
            
            return (
                <>
                    <div className="film-header">
                        <img 
                            src = {imgPath}
                            alt=''
                            className="film-img"
                        />
                        <div className="film-info">
                            <div className="film-header-title">
                                <div>
                                    <h2 className="film-title" >{title}</h2>
                                    <h4 className="film-subtitle">{original_title}</h4>
                                </div>
                                <span className="film-vote">{vote_average}</span>
                            </div>
                            <p className="film-descriprtion">{overview}</p>
                            <p className="film-date">{release_date}</p>
                        </div>
                    </div>
                </> 
            )
        }
    }
}