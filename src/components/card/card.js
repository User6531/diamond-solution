import React from 'react';

import './card.css'

export default class Card extends React.Component {

    render() {
        const {poster_path, title, original_title, overview, vote_average, release_date, id} = this.props;
        const imgPath = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        const path = `#/movie/${id}`;

        return (
                <>
                <a className="film-link-page" href={path} >
                    <img 
                        src = {imgPath}
                        alt=''
                        className="film-img-page"
                    /> 
                </a>
                    
                    <div className="film-header-page ">
                        <a className="film-link-page" href={path} >
                            <div className="film-header-title-page">
                                <h2 className="film-title-page" >{title}</h2>
                                <h4 className="film-subtitle-page ">{original_title}</h4>
                            </div>
                        </a>
                        <span className="film-vote-page">{vote_average}</span>
                    </div>
                    <p className="film-descriprtion-page">{overview.slice(0,520) + `...`}</p>
                    <p className="film-date">{release_date}</p>
                </>
        )
    }
}