import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import ProjectForm from "../components/ProjectForm";
import Container from "../components/Container";
import { toast } from "react-toastify";

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [description, setDescription] = useState("");
  const [projectManager, setProjectManager] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/projects/${id}`)
      .then((response) => {
        const { name, startDate, endDate, description, projectManager } =
          response.data;
        setProject(response.data);
        setInputValue(name);
        setStartDate(new Date(startDate));
        setEndDate(new Date(endDate));
        setDescription(description);
        setProjectManager(projectManager);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
      });
  }, [id]);

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
        name: inputValue,
        startDate: startDate.toISOString().split("T")[0],
        endDate: endDate.toISOString().split("T")[0],
        description,
        projectManager,
      };

      axios
        .put(`http://localhost:5000/projects/${id}`, updatedProject)
        .then(() => {
          setIsLoading(false);
          toast.success("Update Successful");
          navigate("/");
        })
        .catch((error) => {
          toast.error("Error while updating Project");
          console.error("Error updating project:", error);
          setIsLoading(false);
        });
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
