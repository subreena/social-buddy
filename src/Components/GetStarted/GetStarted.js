import React from 'react';
import starterImg1 from '../../images/social-buddy-2.png';
import '../GetStarted/GetStarted.css';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


const GetStarted = () => {
    return (
        <div className="starter">
            <div className="container">
                <div className="row">
                <div className="col-12 col-md-6 col-lg-6 starter-text">
                <div>
                <h1> <i class="fa fa-star" aria-hidden="true"></i> Social Buddy</h1>
                <h3 class="text-secondary">Share your thoughts with your friends at this amazing app!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corrupti natus sed provident inventore quas!</p>
                <Link to={`/home`}>
                <Button variant="contained" color="primary"> Get Started </Button>
                </Link>
            </div>
                </div>
           <div className="col-12 col-md-6 col-lg-6">
           <div>
           <img src={starterImg1} alt="" className="img-fluid" /></div>
           </div>
                </div>
            </div>
           
        </div>
    );
};

export default GetStarted;