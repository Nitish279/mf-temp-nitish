import React from 'react';

const ErrorFallback = ({ fallback, errorDescription}) => {
    return(
        <div>
            <h3>{fallback}</h3>
            <h5>{errorDescription.error}</h5>
            <h6>{errorDescription.errorInfo}</h6>
        </div>
    )
}

export default ErrorFallback;