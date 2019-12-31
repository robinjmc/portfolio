import React from 'react';
import PropTypes from 'prop-types';
import Device from './Device';
import Reads from './Reads';

const Item = ({content}) => {
    const {site: displayContent = "", about: readme = ""} = content || {};
    return (
        <div className="Item">
            <Device type={"--iphone"} display={displayContent}/>
            <Reads readme={readme}/>
        </div>   
    );
}

// function areEqual(prevProps, nextProps) {
//     console.log(prevProps, nextProps);
//     return true;
// }

Item.propTypes = {
    content: PropTypes.shape({
        site: PropTypes.string.isRequired,
        about: PropTypes.string.isRequired
    }).isRequired
};
export default React.memo(Item);