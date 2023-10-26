"use client";

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import React, {useEffect, useState} from "react";
import {saveBrandList, saveModelList, saveYearList, setResultUrl} from "@/redux/features/car-list-slice";
import CustomAutocomplete from "@/app/lib/select/custom-autocomplete";
import {TextField, Typography} from "@mui/material";
import {Car} from "@/redux/types";
import {CardWrapper, Container, CustomButton, Header} from "@/app/page.styles";
import {useRouter} from "next/navigation";


export default function Home() {
  const router = useRouter();
  const dispatch = useAppDispatch();

 const carLists = useAppSelector((state) => state.carListsReducer);
 const [selectedBrand, setSelectedBrand] = useState<Car | null>(null);
 const [selectedModel, setSelectedModel] = useState<Car | null>(null);
 const [selectedYear, setSelectedYear] = useState<Car | null>(null);

 let isBtnDisabled = !selectedBrand || !selectedModel || !selectedYear;

 const loadModelData = async (brandCode: string | undefined) => {
   const response = await fetch(`/api/carros/marcas/${brandCode}/modelos`).then(res => res.json());
   dispatch(saveModelList(response));
 }

 const loadYearData = async (modelCode: string | undefined) => {
   const response = await fetch(`/api/carros/marcas/${selectedBrand?.codigo}/modelos/${modelCode}/anos`).then(res => res.json());
   console.log(response);
   dispatch(saveYearList(response));
 }

 const navigateToResultPage = () => {
   dispatch(setResultUrl(`/api/carros/marcas/${selectedBrand?.codigo}/modelos/${selectedModel?.codigo}/anos/${selectedYear?.codigo}`));
   router.push('/resultado');
 }

  useEffect(() => {
    const loadBrandData = async () => {
      const response = await fetch('/api/carros/marcas').then(res => res.json());
      dispatch(saveBrandList(response))
    }

    loadBrandData();
  }, [dispatch]);

 return (
   <Container>
       <Header>
        <h1>Tabela Fipe</h1>
        <h3>Consulte o valor de um veículo de forma gratuita</h3>
       </Header>
     <CardWrapper>
      <CustomAutocomplete
        value={selectedBrand}
        options={carLists.brandList}
        onChange={(event, value, reason) => {
            setSelectedModel(null);

          if(reason === 'selectOption') {
            setSelectedBrand(value);
            loadModelData(value.codigo);
          }

          if(reason === 'clear') {
            setSelectedBrand(null);
          }
        }}
        renderInput={(params) => <TextField {...params} label="Marca" />}
      />
       <CustomAutocomplete
          value={selectedModel}
          options={carLists.modelList}
          onChange={(event, value, reason) => {
            if(reason === 'selectOption'){
              setSelectedModel(value);
              loadYearData(value.codigo);
            }

            if(reason === 'clear') {
              setSelectedModel(null);
            }
          }}
          renderInput={(params) => <TextField {...params} label="Modelo" />}
          disabled={!selectedBrand}
        />
       {
         selectedModel && (
           <CustomAutocomplete
             options={carLists.yearList}
             onChange={(event, value, reason) => {
               if(reason === "selectOption"){
                setSelectedYear(value)
               }

               if(reason === "clear") {
                setSelectedYear(null);
               }
             }}
             renderInput={(params) => <TextField {...params} label="Ano" />}
           />
         )
       }

       <CustomButton variant="contained" disabled={isBtnDisabled} onClick={navigateToResultPage}>
        <Typography component={"p"}>Consultar preço</Typography>
       </CustomButton>
     </CardWrapper>
   </Container>
 );
}
