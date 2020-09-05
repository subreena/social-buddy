import React from 'react';

const NoMatch = () => {
    return (
        <>
         <div className="d-flex align-items-center justify-content-center" style={{height:'80vh'}}>
             <h1 className="text-danger text-center">404! Page Not Found <i class="fa fa-search-minus" aria-hidden="true"></i> <br/> Try Again<i class="fa fa-refresh" aria-hidden="true"></i> </h1>
         </div>  
        </>
    );
};

export default NoMatch;