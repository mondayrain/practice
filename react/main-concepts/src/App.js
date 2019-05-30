import React from "react";

import ControlledInputForm from "./components/controlled-input-form";
import ControlledSelectForm from "./components/controlled-select-form";
import FancyBorder from "./components/fancy-border";
import MultipleInputForm from "./components/multiple-input-form";
import ErrorBoundary from "./components/error-boundary/index";
import FaultyUpdateComponent from "./components/faulty-update-component/index";

const App = () => {
  return (
    <div>
      <h2>Controlled Input Form:</h2>
      <ControlledInputForm
        label="Your name"
        onSubmit={value => alert(`Value in input form is ${value}`)}
      />

      <h2>Controlled Select Form:</h2>
      <ControlledSelectForm
        options={[
          { value: "larissa", label: "Larissa" },
          { value: "marina", label: "Marina" }
        ]}
      />

      <h2>Multiple input form:</h2>
      <MultipleInputForm
        inputs={[
          { name: "firstName", label: "First name", type: "text" },
          { name: "lastName", label: "Last name", type: "text" },
          { name: "age", label: "Age", type: "number" },
          { name: "email", label: "Email", type: "email" },
          { name: "hungry", label: "Hungry?", type: "checkbox" }
        ]}
        onSubmit={state => alert(state)}
      />
      <FancyBorder color="blue">
        <h1>Welcome</h1>
        <h2>Thanks for visiting</h2>
      </FancyBorder>

      <h2>Error boundary:</h2>
      <ErrorBoundary>
        <FaultyUpdateComponent />
      </ErrorBoundary>
    </div>
  );
};

export default App;
