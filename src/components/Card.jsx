import PropTypes from 'prop-types'

const Card = ({children, bg = 'bg-gray-100'}) => {
  return (
    <div className= {`${bg} p-6 rounded-lg shadow-md`}>
        {children}
    </div>
  );
}

Card.propTypes = {
    bg: PropTypes.string, // bg is optional and should be a string if provided
    children: PropTypes.any.isRequired
  };  
export default Card