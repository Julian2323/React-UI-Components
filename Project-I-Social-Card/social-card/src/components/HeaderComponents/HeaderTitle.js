import React from 'react';
import './Header.css';


const HeaderTitle = props => {
    return (
        <>
        <div className="title-container">
            <h2>Lambda School</h2>
            <h2 className="lite-grey">@LambdaSchool</h2>
            <h2 className="lite-grey">26 Jan</h2>
        </div>
        </>
    )
};


export default HeaderTitle;