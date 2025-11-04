function Modal({ content, onClose }) {
    const handleClose = () => {
        onClose();
    };

    return (
        <div className='modal'>
            {content.type === 'success' && (
                <div className='modal-success'>
                    <h3>✅ Success!</h3>
                    <p>{content.message}</p>
                    <button className='btn' onClick={handleClose}>Continue Shopping</button>
                </div>
            )}
            
            {content.type === 'confirm' && (
                <div className='modal-confirm'>
                    <h3>Are you sure?</h3>
                    <p>{content.message}</p>
                    <div className='modal-actions'>
                        <button className='btn btn--alt' onClick={handleClose}>Cancel</button>
                        <button className='btn' onClick={content.onConfirm}>Confirm</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Modal;