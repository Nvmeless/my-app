import React, {StyleSheet} from 'react';
import PropTypes from 'prop-types';
import { StyledContainer } from './styles.js'

/**
 * Primary UI component for user interaction
 */
const Container = ({children ,...props }) => {


  // DECLARATION DES PROPS
  // const {
  //   backgroundColor, margin, padding
  // } = props;


  



return (<StyledContainer {...props}>{children}</StyledContainer>)

//RETOUR
  // return (
  // <div  className={['container', props?.className].join(' ')} style={
  //     {
  //       ...{
  //         backgroundColor: backgroundColor || 'transparent',
  //         padding: padding || '0px',
  //         margin: margin || '0px'
  //       },
  //       ...props?.style 
  //     }
  //   }>
  //   {props.children}
  // </div> 
  // );
};

const themesLengthShadow = 40;

Container.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  padding: PropTypes.string,
  margin: PropTypes.string,
};

Container.defaultProps = {
  backgroundColor: 'transparent',
};

export default Container;