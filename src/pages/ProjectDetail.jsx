// ProjectDetail.js
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";
import Container from "../components/Container";
import { toast } from "react-toastify";
import { updateProject } from "../Redux/slice/ProjectSlice";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Get project data from Redux store
  const project = useSelector((state) =>
    state.projects.projects.find((project) => project.id === id)
  );

  const [inputValue, setInputValue] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (project) {
      const { name, startDate, endDate, description, projectManager } = project;
      setInputValue(name);
      setStartDate(new Date(startDate));
      setEndDate(new Date(endDate));
      setDescription(description);
      setProjectManager(projectManager);
    }
  }, [project]);

  const validateForm = () => {
    const newErrors = {};

    if (!inputValue) newErrors.name = "Project Name is required";
    if (!startDate) newErrors.startDate = "Start Date is required";
    if (!endDate) newErrors.endDate = "End Date is required";
    if (!description) newErrors.description = "Description is required";
    if (!projectManager)
      newErrors.projectManager = "Project Manager is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleDateChange = (date, type) => {
    if (type === "start") {
      setStartDate(date);
    } else if (type === "end") {
      setEndDate(date);
    }
  };

  const handleInputChange = (e) => setInputValue(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleProjectManagerChange = (e) => setProjectManager(e.target.value);

  const handleUpdate = () => {
    if (validateForm()) {
      setIsLoading(true);
      const updatedProject = {
        id,
        name: inputValue,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        description,
        projectManager,
      };

      dispatch(updateProject(updatedProject));

      setIsLoading(false);
      toast.success("Update Successful");
      navigate("/");
    }
  };

  return (
    <Container>
      {project ? (
        <div className="md:max-w-[50%] grid gap-5">
          <ProjectForm
            project={project}
            inputValue={inputValue}
            startDate={startDate}
            endDate={endDate}
            description={description}
            projectManager={projectManager}
            errors={errors}
            handleInputChange={handleInputChange}
            handleDateChange={handleDateChange}
            handleDescriptionChange={handleDescriptionChange}
            handleProjectManagerChange={handleProjectManagerChange}
          />

          <div className="flex justify-center md:mr-20 mt-4">
            <Button
              variant="contained"
              onClick={handleUpdate}
              disabled={isLoading}
            >
              {isLoading ? "Updating..." : "Update"}
            </Button>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </Container>
  );
};

export default ProjectDetail;
