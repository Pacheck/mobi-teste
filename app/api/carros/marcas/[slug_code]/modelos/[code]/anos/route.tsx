import {NextRequest, NextResponse} from "next/server";
import {CarrosEnum} from "@/app/api/carros/constants";
import {ApiCarWithoutLabel} from "@/global";

type Params = {
  params: {
    slug_code: string;
    code: string
  }
}

export async function GET(request: NextRequest, { params }: Params) {
  const { slug_code, code } = params;

  const response = await fetch(`${CarrosEnum.MARCAS_URL}/${slug_code}/modelos/${code}/anos`);
  const data: ApiCarWithoutLabel[] = await response.json();

  const yearListWithLabelAsName = data.map(car => ({ codigo: car.codigo, label: car.nome.split(' ')[0] }));

  return NextResponse.json(yearListWithLabelAsName);
}