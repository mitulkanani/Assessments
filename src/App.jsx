import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Home from "./pages/Home.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";
import { ToastContainer } from "react-toastify";

const AppContainer = styled.div`
  display: flex;
`;

const MainContent = styled.div`
  flex: 1;
  @media (min-width: 768px) {
    margin-left: 280px;
  }
`;

const App = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <Router>
      <AppContainer>
        <Sidebar isOpen={isSidebarOpen} />
        <MainContent>
          <Navbar toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projectDetail/:id" element={<ProjectDetail />} />
          </Routes>
        </MainContent>
      </AppContainer>
      <ToastContainer />
    </Router>
  );
};

export default App;
