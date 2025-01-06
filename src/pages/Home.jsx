import { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Container from "../components/Container";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:5000/projects")
      .then((response) => {
        setProjects(response.data);
      })
      .catch((error) => {
        toast.error("Error while Fetching Data");
        console.error("Error fetching projects:", error);
      });
  }, []);

  const handleEditClick = (id) => {
    navigate(`/projectDetail/${id}`);
  };

  const columns = [
    {
      name: "Project ID",
      selector: (data) => <div>{data.id}</div>,
      grow: 1,
    },
    {
      name: "Project Name",
      selector: (data) => <div>{data.name}</div>,
      grow: 1,
    },
    {
      name: "Start Date",
      selector: (data) => <div>{data.startDate}</div>,
      grow: 1,
    },
    {
      name: "End Date",
      selector: (data) => <div>{data.endDate}</div>,
      grow: 1,
    },
    {
      name: "Project Manager",
      selector: (data) => <div>{data.projectManager}</div>,
      grow: 1,
    },
    {
      name: "Actions",
      selector: (data) => (
        <div className="py-2">
          <Button
            variant="contained"
            className="!text-sm"
            onClick={() => handleEditClick(data.id)}
          >
            Edit
          </Button>
        </div>
      ),
      grow: 1,
    },
  ];

  return (
    <Container>
      <h2 className="text-xl font-medium mb-5">Project List</h2>
      <div className="bg-white rounded-md">
        <DataTable columns={columns} data={projects} responsive striped dense />
      </div>
    </Container>
  );
};

export default Home;
