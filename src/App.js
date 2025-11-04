import { useState } from 'react';
import MovieCard from './components/MovieCard';
import Cart from './components/Cart';
import Modal from './components/Modal';
import Backdrop from './components/Backdrop';
import { movies } from './data/movies';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const addToCart = (movie) => {
    const existingItem = cart.find(item => item.id === movie.id);
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === movie.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...movie, quantity: 1 }]);
    }
    
    setModalContent({
      type: 'success',
      message: `${movie.title} added to cart!`
    });
  };

  const removeFromCart = (movieId) => {
    setCart(cart.filter(item => item.id !== movieId));
  };

  const updateQuantity = (movieId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(movieId);
    } else {
      setCart(cart.map(item => 
        item.id === movieId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="app">
      <header className="header">
        <h1>🎬 The Keanu Reeves Depot</h1>
        <p className="tagline">Your destination for legendary movies</p>
        <button className="cart-button" onClick={toggleCart}>
          🛒 Cart ({getTotalItems()}) - ${getTotalPrice().toFixed(2)}
        </button>
      </header>

      <main className="main">
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard 
              key={movie.id} 
              movie={movie} 
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </main>

      {showCart && (
        <>
          <Cart 
            cart={cart}
            onRemove={removeFromCart}
            onUpdateQuantity={updateQuantity}
            onClose={toggleCart}
            total={getTotalPrice()}
          />
          <Backdrop onCancel={toggleCart} />
        </>
      )}

      {modalContent && (
        <>
          <Modal 
            content={modalContent}
            onClose={closeModal}
          />
          <Backdrop onCancel={closeModal} />
        </>
      )}
    </div>
  );
}

export default App;
