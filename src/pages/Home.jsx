// Home.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "react-data-table-component";
import Container from "../components/Container";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setProjects } from "../Redux/slice/ProjectSlice";
import { dummyProjects } from "../constant/ProjectsData";
import useWindowSize from "../useWindowSize";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.projects);
  const {width} = useWindowSize()

  useEffect(() => {
    if (!projects || projects.length === 0) {
      dispatch(setProjects(dummyProjects));
    }
  }, [dispatch, projects]);

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
      omit: width < 768,
      grow: 1,
    },
    {
      name: "End Date",
      selector: (data) => <div>{data.endDate}</div>,
      omit: width < 768,
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
