import React, { useContext } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import styled from "@emotion/styled";

import switcContext from "./context/SwitchContext";
import { SWITCHPLAN } from "./context/Types";

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
    color: theme.palette.common.white,
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.primary.main,
  },
  checked: {},
}))(Switch);

const MonthlyPlan = styled(Grid)((props) => ({
  fontSize: props.month && "20px",
  color: props.month && "#9557c9",
  fontWeight: props.month && "400",
  cursor: "pointer",
}));

const YearPlan = styled(Grid)((props) => ({
  fontSize: props.year && "20px",
  color: props.year && "#9557c9",
  fontWeight: props.month && "400",
  cursor: "pointer",
}));

const FormSwitch = styled(FormGroup)((props) => ({
  alignSelf: "center",
  height: "2rem",
}));

const SwitchBtn = () => {
  const { switchStata, dispatch, type } = useContext(switcContext);
  const theme = useTheme();
  return (
    <FormSwitch theme={theme}>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>
            <Typography component="div">
              <Grid component="label" container alignItems="center" spacing={1}>
                {type === "year" ? (
                  <YearPlan item year={type ? 1 : 0}>
                    Annual
                  </YearPlan>
                ) : (
                  <YearPlan item>Annual</YearPlan>
                )}
                <Grid item>
                  <AntSwitch
                    checked={switchStata.isMonthlyPlan}
                    name="checked"
                    onChange={(e) => dispatch({ type: SWITCHPLAN })}
                  />
                </Grid>

                {type === "month" ? (
                  <MonthlyPlan item month={type ? 1 : 0}>
                    Monthly
                  </MonthlyPlan>
                ) : (
                  <MonthlyPlan item>Monthly</MonthlyPlan>
                )}
              </Grid>
            </Typography>
          </Grid>
        </Grid>
      </Typography>
    </FormSwitch>
  );
};

export default SwitchBtn;
