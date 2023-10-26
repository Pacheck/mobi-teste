import {CarFullData} from "@/global";

export type Car = {
  codigo: string;
  label: string;
}

export type CarListInitialState = {
  resultUrl: string;
  resultInfo: CarFullData;
  brandList: Car[],
  modelList: Car[],
  yearList: Car[]
}

export type UserChoiceInitialState = {
  selectedBrandListItem: Car,
  selectedModelListItem: Car,
  selectedYear: Car
}