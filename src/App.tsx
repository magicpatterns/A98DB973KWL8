import React, { useState } from "react";
import { Toggle } from "./components/Toggle/Toggle";
import { Card, CardHeader, CardBody, CardFooter } from "./components/Card/Card";
import "./components/index.css";
const App = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return (
    <Card>
      <CardHeader>Toggle Switch Card</CardHeader>
      <CardBody>Interactive Toggle Switch</CardBody>
      <CardFooter>
        <Toggle
          size="md"
          label="Toggle Me"
          isChecked={isChecked}
          onChange={handleClick}
          disabled={false}
          showIcons={true}
        />
      </CardFooter>
    </Card>
  );
};

export default App;
