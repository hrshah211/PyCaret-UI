import { Accordion, AccordionSummary, Grid, Typography } from "@mui/material";

import FormControl from "@mui/material/FormControl";
import styled from "styled-components";

export const StyledDiv = styled.div`
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  margin-left: ${(props) => (props.ml ? props.ml : 0)}px;

  padding-top: ${(props) => (props.pt ? props.pt : 0)}px;
  padding-right: ${(props) => (props.pr ? props.pr : 0)}px;
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)}px;
  padding-left: ${(props) => (props.pl ? props.pl : 0)}px;
`;

export const StyledDivWidth = styled.div`
  width: ${(props) => (props.w ? props.w : 0)}px;
`;
export const StyledDivHeight = styled.div`
  heiight: ${(props) => (props.h ? props.h : 0)}px;
`;
export const StyledDivWidthHeight = styled.div`
  width: ${(props) => (props.w ? props.w : 0)}px;
  height: ${(props) => (props.h ? props.h : 0)}px;
`;

export const BorderedDataSetDiv = styled.div`
  margin-top: 10px;
  border: 1px solid;
  border-radius: 5px;
  padding-top: 5px;
  padding-right: 5px;
  padding-bottom: 5px;
  padding-left: 5px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledFormControl = styled(FormControl)`
  width: 100%;
`;

export const StyledAccordionSummary = styled(AccordionSummary)`
  height: 80px;
  background-color: #c0e9ff !important;
  border-top-right-radius: 10px !important;
  border-bottom-right-radius: 10px !important;
`;

export const StyledAccordion = styled(Accordion)`
  margin-bottom: 10px;
  border-left: 7px solid #083d77;
  border-right: 1px solid #083d77;
  border-top: 1px solid #083d77;
  border-bottom: 1px solid #083d77;
  border-radius: 10px !important;
`;

export const StyledGrid = styled(Grid)`
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  margin-left: ${(props) => (props.ml ? props.ml : 0)}px;

  padding-top: ${(props) => (props.pt ? props.pt : 0)}px;
  padding-right: ${(props) => (props.pr ? props.pr : 0)}px;
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)}px;
  padding-left: ${(props) => (props.pl ? props.pl : 0)}px;
`;

export const StyledTypography = styled(Typography)`
  margin-top: ${(props) => (props.mt ? props.mt : 0)}px;
  margin-right: ${(props) => (props.mr ? props.mr : 0)}px;
  margin-bottom: ${(props) => (props.mb ? props.mb : 0)}px;
  margin-left: ${(props) => (props.ml ? props.ml : 0)}px;

  padding-top: ${(props) => (props.pt ? props.pt : 0)}px;
  padding-right: ${(props) => (props.pr ? props.pr : 0)}px;
  padding-bottom: ${(props) => (props.pb ? props.pb : 0)}px;
  padding-left: ${(props) => (props.pl ? props.pl : 0)}px;
`;
