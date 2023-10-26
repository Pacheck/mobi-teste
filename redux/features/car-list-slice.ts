import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Car, CarListInitialState} from "@/redux/types";
import {CarFullData} from "@/global";

const initialState: CarListInitialState = {
  resultUrl: '',
  resultInfo: {
    Valor: "",
    Marca: "",
    Modelo: "",
    AnoModelo: 0,
    Combustivel: "",
    CodigoFipe: "",
    MesReferencia: "",
    SiglaCombustivel: ""
  },
  brandList: [],
  modelList: [],
  yearList: []
};

export const CarList = createSlice({
  name: "carList",
  initialState,
  reducers: {
    saveBrandList: (state, action: PayloadAction<Car[]>) => {
      state.brandList = action.payload;
    },
    saveModelList: (state, action: PayloadAction<Car[]>) => {
      state.modelList = action.payload;
    },
    saveYearList: (state, action: PayloadAction<Car[]>) => {
      state.yearList = action.payload;
    },
    setResultUrl: (state, action: PayloadAction<string>) => {
      state.resultUrl = action.payload;
    },
    setResultInfo: (state, action: PayloadAction<CarFullData>) => {
      state.resultInfo = action.payload;
    }
  },
});

export const {
  saveBrandList,
  saveModelList,
  saveYearList,
  setResultUrl,
  setResultInfo
} = CarList.actions;
export default CarList.reducer;
