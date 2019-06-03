import React from 'react';
import './Header.css';
import HeaderTitle from './HeaderTitle.js';
import HeaderContent from './HeaderContent.js';
import ImageThumbnail from './ImageThumbnail';


function HeaderContainer(props) {

    return (
        <>
        <div className="header-container">
            <div className="image-container">
                <ImageThumbnail />
            </div>
            <div className="content-container">
                <div className="title">
                    <HeaderTitle />
                </div>
                <div className="content">
                    <HeaderContent />
                </div>
                </div>
        </div>
        </>
    )
};


export default HeaderContainer;