import React, { useReducer } from "react";
import SwicthReducer from "./Switchreducer";
import switcContext from "./swicthcontext";

const SwichState = ({ children }) => {
  const initialState = {
    isMonthlyPlan: true,
    isAnnualPlan: false,
  };
  const [state, dispatch] = useReducer(SwicthReducer, initialState);
  const type = state.isMonthlyPlan ? "month" : "year";
  return (
    <div>
      <switcContext.Provider
        value={{
          switchStata: state,
          type,
          dispatch,
        }}
      >
        {children}
      </switcContext.Provider>
    </div>
  );
};

export default SwichState;
