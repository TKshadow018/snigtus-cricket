import React from 'react';
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ErrorPage = () => {
    const { errorCode } = useParams();
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 text-center">
                    <h1 className="display-1 text-danger">{errorCode}</h1>
                    <p className="lead">Oops! Something went wrong.</p>
                    <p className="text-muted">The page you are looking for might be temporarily unavailable.</p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;
