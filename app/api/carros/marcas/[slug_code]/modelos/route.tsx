import {NextRequest, NextResponse} from "next/server";
import {CarrosEnum} from "@/app/api/carros/constants";
import {ApiCarWithoutLabel} from "@/global";

type Params = {
  params: {
    slug_code: string
  }
}

type ApiCarModel = {
  modelos: ApiCarWithoutLabel[]
}

export async function GET(request: NextRequest, { params }: Params) {
  const { slug_code } = params;

  const response = await fetch(`${CarrosEnum.MARCAS_URL}/${slug_code}/modelos`);
  const data: ApiCarModel = await response.json();

  const modelListWithLabelAsName = data.modelos.map(car => ({ codigo: car.codigo, label: car.nome }));

  return NextResponse.json(modelListWithLabelAsName);
}