import {NextRequest, NextResponse} from "next/server";
import {CarrosEnum} from "@/app/api/carros/constants";
import {Car} from "@/redux/types";
import {ApiCarWithoutLabel} from "@/global";

export async function GET(request: NextRequest) {
  const response  = await fetch(CarrosEnum.MARCAS_URL);
  const data: ApiCarWithoutLabel[] = await response.json();

  const brandListWithLabelAsName = data.map(car => ({ codigo: car.codigo, label: car.nome }));

  return NextResponse.json(brandListWithLabelAsName)
}