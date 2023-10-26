import {Car} from "@/redux/types";
import {AutocompleteProps} from "@mui/material";

declare interface SelectType<T> extends AutocompleteProps<any, any, any, any, any> {
  options: Array<T>;
}

declare interface ApiCarWithoutLabel extends Pick<Car, 'codigo'> {
  nome: string;
}

declare interface CarFullData {
  Valor: string;
  Marca: string;
  Modelo: string;
  AnoModelo: number;
  Combustivel: string;
  CodigoFipe: string;
  MesReferencia: string;
  SiglaCombustivel: string;
}