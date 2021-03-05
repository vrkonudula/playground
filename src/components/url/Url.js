import React from 'react';
import '../url/url.scss';
import PropTypes from 'prop-types';

function Url(props) {
    const { url } = props;
    const { children } = props;
    const { theme } = props;
    return (
        <>
            <div className={`${theme} career-link`} onClick={(e) => e.stopPropagation()}>
                <a href={url} target="blank">{ children }</a>
            </div>
        </>
    )
}

Url.protoTypes = {
    url: PropTypes.string.isRequired,
    theme: PropTypes.string
}

Url.defaultProps = {
    url: "https://www.cnn.com"
}

export default Url;