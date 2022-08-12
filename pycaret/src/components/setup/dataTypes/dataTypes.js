import { API_URL, getURL } from "../../../store/apiURL";
import { Box, Chip, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  SetCategoricalFeatures,
  SetDateFeatures,
  SetIgnoredFeatures,
  SetKeepFeatures,
  SetNumericFeatures,
  SetOrdinalFeatures,
  SetOrdinalFeaturesOrder,
  SetSelectedFeatures,
  SetTextFeatures,
} from "../../../actions/setupActions/dataTypesActions/dataTypesActions";
import { StyledBox, StyledDiv, StyledFormControl, StyledGrid, StyledTypography } from "../../../styles";

import SortableDragAndDrop from "./sortableDragAndDrop";
import { connect } from "react-redux";
import useMediaQuery from "@mui/material/useMediaQuery";

const DataTypes = (props) => {
  const mobile = useMediaQuery("(max-width:600px)");
  const desktop = useMediaQuery("(min-width:900px)");
  const tablet = !mobile && !desktop;

  const getOrdinalFeatureData = (columnName) => {
    fetch(getURL(API_URL.LOAD_ORDINAL_COLUMN_DATA), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ columnName: columnName, dataset: props.selectedDataset }),
    })
      .then((response) => response.json())
      .then((response) => {
        SetOrdinalFeaturesOrder(response.response, columnName);
      });
  };

  const SetOrdinalFeaturesOrder = (response, columnName) => {
    let data = { ...props.ordinalFeaturesOrder };
    data[columnName] = response;
    props.SetOrdinalFeaturesOrder(data);
  };

  const deleteOrdinalFeatureData = (element) => {
    let data = { ...props.ordinalFeaturesOrder };
    delete data[element];
    props.SetOrdinalFeaturesOrder(data);
  };

  const handleNumericFeaturesChange = (e) => {
    props.SetNumericFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleCategoricalFeaturesChange = (e) => {
    props.SetCategoricalFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleDateFeaturesChange = (e) => {
    props.SetDateFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleTextFeaturesChange = (e) => {
    props.SetTextFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleKeepFeaturesChange = (e) => {
    props.SetKeepFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleIgnoredFeaturesChange = (e) => {
    props.SetIgnoredFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleOrdinalFeaturesChange = (e) => {
    e.target.value
      .filter((value) => !Object.keys(props.ordinalFeaturesOrder).includes(value))
      .forEach((element) => {
        getOrdinalFeatureData(element);
      });
    Object.keys(props.ordinalFeaturesOrder)
      .filter((value) => !e.target.value.includes(value))
      .forEach((element) => {
        deleteOrdinalFeatureData(element);
      });
    props.SetOrdinalFeatures(e.target.value);
    props.SetSelectedFeatures();
  };

  const handleOrdinalFeaturesOrderClick = (e, key) => {
    setModalKey(key);
    setOpen(true);
  };

  const [modalKey, setModalKey] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const isSelected = (name, category) => {
    switch (category) {
      case "Numeric":
        return !props.numericFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Categorical":
        return !props.categoricalFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Date":
        return !props.dateFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Text":
        return !props.textFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Keep":
        return !props.keepFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Ignored":
        return !props.ignoredFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      case "Ordinal":
        return !props.ordinalFeatures.includes(name) && props.selectedFeatures.includes(name) ? true : false;
      default:
    }
  };

  return (
    <>
      <StyledTypography variant="h6" component="div" pb={1} pt={1} style={{ fontWeight: 700 }}>
        Data Types
      </StyledTypography>
      <StyledGrid container>
        <StyledGrid item xs={mobile ? 12 : desktop ? 2 : 4} pr={mobile ? 0 : 1} pb={1}>
          <StyledFormControl>
            <InputLabel>Numeric Features</InputLabel>
            <Select
              multiple
              label="Numeric Features"
              value={props.numericFeatures}
              onChange={handleNumericFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Numeric")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={mobile ? 12 : desktop ? 2 : 4} pr={mobile ? 0 : 1} pb={1}>
          <StyledFormControl>
            <InputLabel>Categorical Features</InputLabel>
            <Select
              multiple
              label="Categorical Features"
              value={props.categoricalFeatures}
              onChange={handleCategoricalFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Categorical")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={mobile ? 12 : desktop ? 2 : 4} pr={desktop ? 1 : 0} pb={1}>
          <StyledFormControl>
            <InputLabel>Date Features</InputLabel>
            <Select
              multiple
              label="Date Features"
              value={props.dateFeatures}
              onChange={handleDateFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Date")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={mobile ? 12 : desktop ? 2 : 4} pr={mobile ? 0 : 1} pb={1}>
          <StyledFormControl>
            <InputLabel>Text Features</InputLabel>
            <Select
              multiple
              label="Text Features"
              value={props.textFeatures}
              onChange={handleTextFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Text")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={mobile ? 12 : desktop ? 2 : 4} pr={mobile ? 0 : 1} pb={1}>
          <StyledFormControl>
            <InputLabel>Keep Features</InputLabel>
            <Select
              multiple
              label="Keep Features"
              value={props.keepFeatures}
              onChange={handleKeepFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Keep")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        <StyledGrid item xs={mobile ? 12 : desktop ? 2 : 4} pb={1}>
          <StyledFormControl>
            <InputLabel>Ignored Features</InputLabel>
            <Select
              multiple
              label="Ignored Features"
              value={props.ignoredFeatures}
              onChange={handleIgnoredFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Ignored")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
      </StyledGrid>
      <StyledGrid container>
        <StyledGrid item xs={mobile ? 12 : desktop ? 2 : 4} pr={mobile ? 0 : 1} pb={1}>
          <StyledFormControl>
            <InputLabel>Ordinal Features</InputLabel>
            <Select
              multiple
              label="Ordinal Features"
              value={props.ordinalFeatures}
              onChange={handleOrdinalFeaturesChange}
              renderValue={(selected) => (
                <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {props.dataColumns.map((name) => (
                <MenuItem key={name} value={name} disabled={isSelected(name, "Ordinal")}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </StyledFormControl>
        </StyledGrid>
        {Object.keys(props.ordinalFeaturesOrder).map((key, i) => (
            <StyledGrid item xs={mobile ? 12 : desktop ? 2 : 4} pr={mobile || (tablet && ((i-1) % 3 === 0)) || (desktop && ((i-4) % 6 === 0)) ? 0 : 1} key={key} pb={1}>
              <StyledFormControl>
                <TextField
                  label={key}
                  value={props.ordinalFeaturesOrder[key]}
                  onClick={(event) => handleOrdinalFeaturesOrderClick(event, key)}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <Modal open={open} onClose={handleClose}>
                  <StyledBox>
                    <StyledDiv bgc={"#5CD8ED"} mt={5} mr={5} ml={5} mb={5} br={5}>
                      <StyledTypography variant="h5" component="div" pt={1} pb={1}>
                        {modalKey}
                      </StyledTypography>
                    </StyledDiv>
                    <SortableDragAndDrop key={modalKey} param={modalKey} />
                  </StyledBox>
                </Modal>
              </StyledFormControl>
            </StyledGrid>
        ))}
      </StyledGrid>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    selectedDataset: state?.presetReducer?.data?.preset?.selectedDataset
      ? state.presetReducer.data.preset.selectedDataset
      : "",
    dataColumns: state?.presetReducer?.data?.preset?.dataColumns ? state.presetReducer.data.preset.dataColumns : [],
    numericFeatures: state?.dataTypesReducer?.setup?.dataTypes?.numericFeatures
      ? state.dataTypesReducer.setup.dataTypes.numericFeatures
      : [],
    categoricalFeatures: state?.dataTypesReducer?.setup?.dataTypes?.categoricalFeatures
      ? state.dataTypesReducer.setup.dataTypes.categoricalFeatures
      : [],
    dateFeatures: state?.dataTypesReducer?.setup?.dataTypes?.dateFeatures
      ? state.dataTypesReducer.setup.dataTypes.dateFeatures
      : [],
    textFeatures: state?.dataTypesReducer?.setup?.dataTypes?.textFeatures
      ? state.dataTypesReducer.setup.dataTypes.textFeatures
      : [],
    keepFeatures: state?.dataTypesReducer?.setup?.dataTypes?.keepFeatures
      ? state.dataTypesReducer.setup.dataTypes.keepFeatures
      : [],
    ignoredFeatures: state?.dataTypesReducer?.setup?.dataTypes?.ignoredFeatures
      ? state.dataTypesReducer.setup.dataTypes.ignoredFeatures
      : [],
    selectedFeatures: state?.dataTypesReducer?.setup?.dataTypes?.selectedFeatures
      ? state.dataTypesReducer.setup.dataTypes.selectedFeatures
      : [],
    ordinalFeatures: state?.dataTypesReducer?.setup?.dataTypes?.ordinalFeatures
      ? state.dataTypesReducer.setup.dataTypes.ordinalFeatures
      : [],
    ordinalFeaturesOrder: state?.dataTypesReducer?.setup?.dataTypes?.ordinalFeaturesOrder
      ? state.dataTypesReducer.setup.dataTypes.ordinalFeaturesOrder
      : {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetNumericFeatures: (payload) => dispatch(SetNumericFeatures(payload)),
    SetCategoricalFeatures: (payload) => dispatch(SetCategoricalFeatures(payload)),
    SetDateFeatures: (payload) => dispatch(SetDateFeatures(payload)),
    SetTextFeatures: (payload) => dispatch(SetTextFeatures(payload)),
    SetKeepFeatures: (payload) => dispatch(SetKeepFeatures(payload)),
    SetIgnoredFeatures: (payload) => dispatch(SetIgnoredFeatures(payload)),
    SetSelectedFeatures: () => dispatch(SetSelectedFeatures()),
    SetOrdinalFeatures: (payload) => dispatch(SetOrdinalFeatures(payload)),
    SetOrdinalFeaturesOrder: (payload) => dispatch(SetOrdinalFeaturesOrder(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DataTypes);
