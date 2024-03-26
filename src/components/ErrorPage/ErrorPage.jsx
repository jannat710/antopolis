import { NavLink } from 'react-router-dom';
import './ErrorPage.css'
const ErrorPage = () => {
    return (
        <div className="error-container">
            <h1>Error</h1>
            <p>Oops, something went wrong. Please try again later.</p>
            <button className="btn btn-primary"><NavLink className='signup-button' to='/'>OK</NavLink></button>
        </div>
    );
};

export default ErrorPage;