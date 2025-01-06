import PropTypes from "prop-types";
import {
  FormContainer,
  ProjectIdContainer,
  ProjectId,
  DescriptionContainer,
  DescriptionTextarea,
  TextInputFieldContainer,
} from "./StyledProjectForm"; // Importing styled-components
import LabelComponent from "../../common/LabelText";
import Calendar from "../../common/Calendar";
import TextInputField from "../../common/TextField";

const ProjectForm = ({
  project,
  inputValue,
  startDate,
  endDate,
  description,
  projectManager,
  errors,
  handleInputChange,
  handleDateChange,
  handleDescriptionChange,
  handleProjectManagerChange,
}) => {
  return (
    <FormContainer>
      <ProjectIdContainer>
        <LabelComponent label="Project ID" />
        <ProjectId>{project.id}</ProjectId>
      </ProjectIdContainer>

      <TextInputFieldContainer>
        <TextInputField
          label="Project Name"
          value={inputValue}
          onChange={handleInputChange}
          error={!!errors.name}
          helperText={errors.name}
        />
      </TextInputFieldContainer>

      <TextInputFieldContainer>
        <Calendar
          label="Start Date"
          onDateChange={(date) => handleDateChange(date, "start")}
          date={startDate}
          error={!!errors.startDate}
          helperText={errors.startDate}
        />
      </TextInputFieldContainer>

      <TextInputFieldContainer>
        <Calendar
          label="End Date"
          onDateChange={(date) => handleDateChange(date, "end")}
          date={endDate}
          error={!!errors.endDate}
          helperText={errors.endDate}
        />
      </TextInputFieldContainer>

      <DescriptionContainer>
        <LabelComponent label="Description" />
        <DescriptionTextarea
          value={description}
          onChange={handleDescriptionChange}
          rows="6"
          error={errors && errors.description}
        />
      </DescriptionContainer>

      <TextInputFieldContainer>
        <TextInputField
          label="Project Manager"
          value={projectManager}
          onChange={handleProjectManagerChange}
          error={!!errors.projectManager}
          helperText={errors.projectManager}
        />
      </TextInputFieldContainer>
    </FormContainer>
  );
};

ProjectForm.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  inputValue: PropTypes.string.isRequired,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  description: PropTypes.string.isRequired,
  projectManager: PropTypes.string.isRequired,
  errors: PropTypes.shape({
    name: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    description: PropTypes.string,
    projectManager: PropTypes.string,
  }).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleDateChange: PropTypes.func.isRequired,
  handleDescriptionChange: PropTypes.func.isRequired,
  handleProjectManagerChange: PropTypes.func.isRequired,
};

export default ProjectForm;
