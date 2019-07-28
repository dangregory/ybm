import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid.js';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.scss';

class Movie extends Component {
    state = {
        movie: null,
        actors: null,
        directors: [],
        loading: false
    }

    componentDidMount() {
        const { movieId } = this.props.match.params;

        this.setState({ loading: true })
        // First fetch the movie ...
        let endpoint = `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`;
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {

        const { movieId } = this.props.match.params;

        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            
            if (result.status_code) {
                this.setState({ loading: false });
            } else {
                this.setState({ movie: result }, () => {
                    // .... then fetch actors in the setState callback function
                    const endpoint = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
                    fetch(endpoint)
                    .then(result => result.json())
                    .then(result => {
                        const directors = result.crew.filter( (member) => member.job === "Director");
                        this.setState({
                            actors: result.cast,
                            directors,
                            loading: false
                        })
                    })
                })
            }
        })
        .catch(error => console.error('Error:', error))
    }
    
    render() {
        const { movieName } = this.props.location;
        const { movie, directors, actors, loading } = this.state;

        return (
            <div className="ybm-movie">
                {movie ? 
                    <div>
                        <Navigation movie={movie.title} />
                        <MovieInfo movie={movie} directors={directors} />
                        <MovieInfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue} />
                    </div>
                : null }
                {actors ?
                    <div className="ybm-movie-grid">
                        <FourColGrid header={'Actors'}>
                            {actors.map( (element, i) => {
                                return <Actor key={i} actor={element} />
                            })}
                        </FourColGrid>
                    </div>
                : null }
                {!actors && !loading ? <h1>No Movie Found!</h1> : null}
                {loading ? <Spinner /> : null}
                }            
                }
            </div>
        )
    }
}

export default Movie;