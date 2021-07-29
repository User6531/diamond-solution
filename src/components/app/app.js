import React from 'react';
import CardList from '../card-list/card-list';
import BigCard from '../big-card/big-card';
import { BrowserRouter, Route } from 'react-router-dom';
import AppSearchPanel from '../app-search-panel/app-search-panel';


import './app.css';



export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <a href='/' className="main-button">Home</a>
                    <AppSearchPanel />
                    <>
                        <Route exact path='/' render={() => <CardList path={'main'}/>} />
                        <Route exact path='/search' render={() => <CardList path={'search'}/>} />
                        <Route exact path='/movie/:id' component={BigCard}/>
                    </>
                </div>
            </BrowserRouter>
        )
    }
}



