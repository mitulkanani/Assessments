import { TextField } from '@mui/material';
import PropTypes from 'prop-types';

const InputField = ({ label, value, onChange, error}) => {
  return (
    <>
    <div className='flex gap-5 Common-Input'>
    <div className='mt-2 font-medium text-sm '>
        {label} :
    </div>
    <div>
    <TextField
      variant="outlined"
      value={value}
      onChange={onChange}
      />
      {
        error &&
      <p className='text-red-600 text-xs mt-1'>{error || 'This field is Reqired'}</p>
      }
      </div>
      </div>
      </>
  );
};

InputField.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputField;
