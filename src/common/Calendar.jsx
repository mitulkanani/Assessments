import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import PropTypes from "prop-types";
import LabelComponent from "./LabelText";

const Calendar = ({ date, onDateChange, label }) => {
  return (
    <div className="grid md:grid-cols-3 md:gap-5">
      <LabelComponent label={label} />

      <DatePicker
        selected={date}
        onChange={(date) => onDateChange(date)}
        dateFormat="dd/MM/YYYY"
        placeholderText="Select a date"
        className="w-full p-2 border cursor-pointer hover:border-black col-span-2 mt-1 border-[#c4c4c4] rounded-md focus:outline-none focus:border-blue-500"
      />
    </div>
  );
};

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onDateChange: PropTypes.func.isRequired,
};

export default Calendar;
