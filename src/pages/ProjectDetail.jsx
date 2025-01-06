import InputField from "../common/InputField";
import { useState } from "react";
import Container from "../components/Container";

const ProjectDetail = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };


  return (
    <Container>
      <div className="flex gap-3 items-center">
        <p>Project Id:</p>
        <p>47r94ufj3489j</p>
      </div>
      <div className="">
        <div className="md:max-w-[50%]">
        <InputField
          label="Project Name"
          value={inputValue}
          error={inputValue === ""}
          onChange={handleInputChange}
          helperText={inputValue === "" ? "This field is required" : ""}
          />


        <InputField
          label="Project Manager"
          value={inputValue}
          error={inputValue === ""}
          onChange={handleInputChange}
          helperText={inputValue === "" ? "This field is required" : ""}
          />
        </div>
  
      </div>
    </Container>
  );
};

export default ProjectDetail;
