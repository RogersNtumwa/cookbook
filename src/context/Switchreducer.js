import { SWITCHPLAN } from "./Types";

const SwicthReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case SWITCHPLAN:
      return {
        isMonthlyPlan: !state.isMonthlyPlan,
        isAnnualPlan: !state.isAnnualPlan,
      };

    default:
      return state;
  }
};

export default SwicthReducer;
