import PropTypes from "prop-types";

const Container = ({ children }) => {  
  return (
    <div className="p-5 md:p-8">
      {children} 
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
