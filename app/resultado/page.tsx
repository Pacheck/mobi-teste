'use client';

import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {Container} from "@/app/resultado/resultado.styles";
import {Suspense, useEffect, useState} from "react";
import {CarrosEnum} from "@/app/api/carros/constants";
import {setResultInfo} from "@/redux/features/car-list-slice";
import {CarFullData} from "@/global";

const Resultado = () => {
  const carStore = useAppSelector(store => store.carListsReducer);
  const resultInfo = carStore.resultInfo;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const loadResultData = async() => {
      const response = await fetch(carStore.resultUrl).then(res => res.json());

      dispatch(setResultInfo(response));
    }

    loadResultData();
  }, [carStore.resultUrl, dispatch]);

  console.log(carStore);

  return (
    <Suspense fallback={<div>...loading</div>}>
        <Container>
          <div>
            <h1>Tabela Fipe: Preço {resultInfo.Marca} {resultInfo.Modelo} {resultInfo.AnoModelo}</h1>
            <span>{resultInfo.Valor}</span>
            <h5>Este é o preço de compra do veículo</h5>
          </div>
        </Container>
      </Suspense>
    )
}

export default Resultado;