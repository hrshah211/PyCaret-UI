import { StyledDiv, StyledSortableList, StyledTypography } from "../../../styles";

import React from "react";
import { SetOrdinalFeaturesOrder } from "../../../actions/setupActions/dataTypesActions/dataTypesActions";
import { SortableItem } from "react-easy-sort";
import arrayMove from "array-move";
import { connect } from "react-redux";

const SortableDragAndDrop = (props) => {
  const onSortEnd = (oldIndex, newIndex) => {
    let data = { ...props.ordinalFeaturesOrder };
    data[props.param] = arrayMove(props.ordinalFeaturesOrder[props.param], oldIndex, newIndex);
    props.SetOrdinalFeaturesOrder(data);
  };
  return (
    <StyledDiv pl={5} pr={5} pb={5} br={5}>
      <StyledSortableList onSortEnd={onSortEnd}>
        {props.ordinalFeaturesOrder[props.param].map((item) => (
          <SortableItem key={item}>
            <StyledDiv br={5} bgc={"#EADDCA"} ml={10} mr={10} mt={3} pt={3} pb={3}>
              <StyledTypography>{item}</StyledTypography>
            </StyledDiv>
          </SortableItem>
        ))}
      </StyledSortableList>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    ordinalFeaturesOrder: state?.dataTypesReducer?.setup?.dataTypes?.ordinalFeaturesOrder
      ? state.dataTypesReducer.setup.dataTypes.ordinalFeaturesOrder
      : {},
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    SetOrdinalFeaturesOrder: (payload) => dispatch(SetOrdinalFeaturesOrder(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SortableDragAndDrop);
