import PropTypes from "prop-types";

const LabelComponent = ({ label, className }) => {
  return (
    <div className={`font-medium text-sm md:text-end ${className}`}>
      {label} :
    </div>
  );
};

LabelComponent.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default LabelComponent;
