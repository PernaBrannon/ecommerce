import { useState } from 'react';

function MovieCard({ movie, onAddToCart }) {
    const [imageError, setImageError] = useState(false);
    
    const handleAddToCart = () => {
        onAddToCart(movie);
    };

    const handleImageError = () => {
        setImageError(true);
    };

    const fallbackImage = `https://via.placeholder.com/300x450/333333/FFFFFF?text=${encodeURIComponent(movie.title)}`;
    
    return (
        <div className='movie-card'>
            <div className='movie-image-container'>
                <img 
                    src={imageError ? fallbackImage : movie.image} 
                    alt={movie.title}
                    className='movie-image'
                    onError={handleImageError}
                />
                <div className='movie-genre'>{movie.genre}</div>
            </div>
            <div className='movie-content'>
                <h3 className='movie-title'>{movie.title}</h3>
                <p className='movie-year'>({movie.year})</p>
                <p className='movie-description'>{movie.description}</p>
                <div className='movie-details'>
                    <span className='movie-rating'>⭐ {movie.rating}/10</span>
                    <span className='movie-price'>${movie.price}</span>
                </div>
                <button className='btn add-to-cart-btn' onClick={handleAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default MovieCard;