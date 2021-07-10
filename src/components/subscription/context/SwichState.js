import React, { useReducer } from "react";
import SwicthReducer from "./Switchreducer";
import SwitchContext from "./SwitchContext";

const SwichState = ({ children }) => {

  const initialState = {
    isMonthlyPlan: true,
    isAnnualPlan: false,
  };

  const [state, dispatch] = useReducer(SwicthReducer, initialState);
  const type = state.isMonthlyPlan ? "month" : "year";
  return (
    <div>
      <SwitchContext.Provider
        value={{
          switchStata: state,
          type,
          dispatch,
        }}
      >
        {children}
      </SwitchContext.Provider>
    </div>
  );
};

export default SwichState;
