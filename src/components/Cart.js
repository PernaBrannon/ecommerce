function Cart({ cart, onRemove, onUpdateQuantity, onClose, total }) {
    const handleQuantityChange = (movieId, newQuantity) => {
        onUpdateQuantity(movieId, parseInt(newQuantity));
    };

    const handleRemove = (movieId) => {
        onRemove(movieId);
    };

    return (
        <div className='cart'>
            <div className='cart-header'>
                <h2>🛒 Your Cart</h2>
                <button className='close-btn' onClick={onClose}>✕</button>
            </div>
            
            {cart.length === 0 ? (
                <div className='cart-empty'>
                    <p>Your cart is empty</p>
                    <p>Add some amazing Keanu Reeves movies!</p>
                </div>
            ) : (
                <>
                    <div className='cart-items'>
                        {cart.map(item => (
                            <div key={item.id} className='cart-item'>
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className='cart-item-image'
                                />
                                <div className='cart-item-details'>
                                    <h4>{item.title}</h4>
                                    <p className='cart-item-year'>({item.year})</p>
                                    <p className='cart-item-price'>${item.price} each</p>
                                </div>
                                <div className='cart-item-controls'>
                                    <div className='quantity-controls'>
                                        <label>Qty:</label>
                                        <select 
                                            value={item.quantity}
                                            onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                                        >
                                            {[...Array(10).keys()].map(n => (
                                                <option key={n + 1} value={n + 1}>{n + 1}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <button 
                                        className='btn btn--small btn--danger'
                                        onClick={() => handleRemove(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                                <div className='cart-item-total'>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className='cart-summary'>
                        <div className='cart-total'>
                            <strong>Total: ${total.toFixed(2)}</strong>
                        </div>
                        <button className='btn btn--large checkout-btn'>
                            🚀 Proceed to Checkout
                        </button>
                        <p className='cart-note'>
                            *This is a demo. No actual purchase will be made.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;