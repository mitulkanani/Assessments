import { TextField } from "@mui/material";
import PropTypes from "prop-types";
import LabelComponent from "./LabelText";

const TextInputField = ({ label, value, onChange, error }) => {
  return (
    <>
      <div className="grid md:grid-cols-3 md:gap-5 gap-2 Common-Input">
        <LabelComponent label={label} />
        <div className="col-span-2">
          <TextField
            variant="outlined"
            className="w-[200px]"
            value={value}
            error={error}
            onChange={onChange}
          />
        </div>
      </div>
    </>
  );
};

TextInputField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TextInputField;
