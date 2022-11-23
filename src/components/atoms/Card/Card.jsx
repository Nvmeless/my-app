import React, {StyleSheet} from 'react';
import PropTypes from 'prop-types';
import './card.css';

/**
 * Primary UI component for user interaction
 */
export const Card = ({     shadow, backgroundColor, rounded, width,height,...props }) => {
  const {
  } = props;

  const renderedShadow = shadow ? `shadow--${shadow}` : ''
  const borderRadius = rounded ? 'button--round' : "";

  return (
  <div  className={['card', renderedShadow, borderRadius, props?.className].join(' ')} style={
      {
        ...{
          backgroundColor: backgroundColor || 'white',
          width: width || null,
          height: height || null,

        },
        ...props?.style 
      }
    }>
    {props.children}
  </div> 
  );
};

const themesLengthShadow = 41;

Card.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
    /**
   * Does he has rounded shape ?
   */
  rounded: PropTypes.bool,
  /**
   * Check your template on https://getcssscan.com/css-box-shadow-examples
   */
  shadow: PropTypes.oneOf(Array.apply(null, Array(themesLengthShadow)).map(function (x, i) { return i; })),
};

Card.defaultProps = {
  backgroundColor: null,
  shadow: 1,
  rounded: false,
};
