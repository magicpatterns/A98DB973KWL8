import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionContent,
  AccordionFooter,
  AccordionHeader,
} from "./components/Accordion/Accordion";
import "./components/index.css";

function App() {
  return (
    <>
      {" "}
      <Accordion>
        <AccordionHeader label="Section One" />
        <AccordionBody>
          <AccordionContent>List Item One</AccordionContent>
          <AccordionContent>List Item Two</AccordionContent>
          <AccordionFooter label="Show More" onClick={() => {}} />
        </AccordionBody>
      </Accordion>
      <Accordion>
        <AccordionHeader label="Section Two" />
        <AccordionBody>
          <AccordionContent>List Item Three</AccordionContent>
          <AccordionContent>List Item Four</AccordionContent>
          <AccordionFooter label="Show More" onClick={() => {}} />
        </AccordionBody>
      </Accordion>
    </>
  );
}

export default App;
