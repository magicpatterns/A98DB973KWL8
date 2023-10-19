import React, { useState } from "react";
import { Toggle } from "./components/Toggle/Toggle";
import { Card, CardHeader, CardBody, CardFooter } from "./components/Card/Card";
import { Button } from "./components/Button/Button";

import "./components/index.css";
const App = () => {
  const [isChecked, setIsChecked] = useState(true);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };
  return <Button label="dog" variant="primary" />;
};

export default App;
