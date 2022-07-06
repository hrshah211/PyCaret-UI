import MissingValuesReducer from "../reducer/setupReducer/missingValuesReducer";
import { configureStore } from "@reduxjs/toolkit";

let Store = configureStore({ reducer: MissingValuesReducer });

export default Store;
