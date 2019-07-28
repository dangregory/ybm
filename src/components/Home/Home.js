import React, { Component } from 'react'; 
import { API_URL, API_KEY, ACCOUNT_ID, SESSION_ID, IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import './Home.scss';

class Home extends Component {
    state = {
        movies: [],
        heroImage: null,
        loading: false,
        currentPage: 0,
        totalPages: 0,
        searchTerm: ''
    }

    componentDidMount() {
        this.setState({ loading: true});
        const endpoint = `${API_URL}account/${ACCOUNT_ID}/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US&page=1`;
        this.fetchItems(endpoint);
    }

    searchItems = (searchTerm) => {
        let endpoint = '';
        this.setState({
            movies: [],
            loading: true,
            searchTerm
        })

        if (searchTerm === '') {
            endpoint = `${API_URL}account/${ACCOUNT_ID}/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US&page=1`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US&query=${searchTerm}`;
        }
        this.fetchItems(endpoint);
    }

    loadMoreItems = () => {
        const { searchTerm, currentPage } = this.state;
        
        let endpoint = '';
        this.setState({ loading: true });

        if (searchTerm === '') {
            endpoint = `${API_URL}account/${ACCOUNT_ID}/favorite/movies?api_key=${API_KEY}&session_id=${SESSION_ID}&language=en-US&page=${currentPage + 1}`;
        } else {
            endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}&page=${currentPage + 1}`;
        }
        this.fetchItems(endpoint);
    }

    fetchItems = (endpoint) => {
        const { movies, heroImage, searchTerm } = this.state;

        fetch(endpoint)
        .then(result => result.json())
        .then(result => {
            this.setState({
                movies: [...movies, ...result.results],
                heroImage: heroImage || result.results[0],
                loading: false,
                currentPage: result.page,
                totalPages: result.total_pages
            }, () => {
                if (searchTerm === "") {
                    sessionStorage.setItem('HomeState', JSON.stringify(this.state));
                }
            })
        })
        .catch(error => console.error('Error:', error))
    }

    render() {
        const { movies, heroImage, loading, currentPage, totalPages, searchTerm } = this.state;

        return (
            <div className="ybm-home">
                {heroImage ?
                <div>
                    <HeroImage 
                        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroImage.backdrop_path}`}
                        title={heroImage.original_title}
                        text={heroImage.overview}    
                    />
                    <SearchBar callback={this.searchItems}/>
                </div> : null }
                <div className="ybm-home-grid">
                    <FourColGrid 
                        header={searchTerm ? 'Search Result' : 'My Favorite Movies'}
                        loading={loading}
                    >
                        {movies.map ( (element, i) => (
                            <MovieThumb
                                key={i}
                                clickable={true}
                                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}
                                movieId={element.id}
                                movieName={element.original_title}
                            />
                        ))}
                    </FourColGrid>
                    {loading ? <Spinner /> : null}
                    {(currentPage <= totalPages && !loading) ?
                    <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
                    : null
                    }
                </div>
            </div>
        )
    }
}

export default Home;