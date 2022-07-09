import { createContext, useState } from "react";

export const FormContext = createContext({
  activeStepId: 0,
  setActiveStepId: () => {},
  formData: {},
  setFormData: () => {},
});

export const FormProvider = ({ children }) => {
  const [activeStepId, setActiveStepId] = useState(0);
  const [formData, setFormData] = useState({});
  const value = {
    activeStepId,
    setActiveStepId,
    formData,
    setFormData,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
