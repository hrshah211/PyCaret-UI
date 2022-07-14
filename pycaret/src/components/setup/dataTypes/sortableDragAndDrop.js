import SortableList, { SortableItem } from "react-easy-sort";

import React from "react";
import { SetOrdinalFeaturesOrder } from "../../../actions/setupActions/dataTypesActions/dataTypesActions";
import arrayMove from "array-move";
import { connect } from "react-redux";

const SortableDragAndDrop = (props) => {

  const onSortEnd = (oldIndex, newIndex) => {
    let data = {...props.ordinalFeaturesOrder}
    data[props.param] = arrayMove(props.ordinalFeaturesOrder[props.param], oldIndex, newIndex)
    props.SetOrdinalFeaturesOrder(data)
  };
  return (
    <SortableList onSortEnd={onSortEnd}>
      {props.ordinalFeaturesOrder[props.param].map((item) => (
        <SortableItem key={item}>
          <div>{item}</div>
        </SortableItem>
      ))}
    </SortableList>
  );
};

const mapStateToProps = (state) => {
    return {
      ordinalFeaturesOrder: state?.dataTypesReducer?.dataTypes?.ordinalFeaturesOrder
        ? state.dataTypesReducer.dataTypes.ordinalFeaturesOrder
        : {},
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      SetOrdinalFeaturesOrder: (payload) => dispatch(SetOrdinalFeaturesOrder(payload)),
    };
  };

export default connect(mapStateToProps, mapDispatchToProps)(SortableDragAndDrop);
