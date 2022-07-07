import { createContext, useState } from "react";

export const FormContext = createContext({
  activeStepId: 0,
  setActiveStepId: () => {},
});

export const FormProvider = ({ children }) => {
  const [activeStepId, setActiveStepId] = useState(0);
  const value = {
    activeStepId,
    setActiveStepId,
  };
  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
