import {NextRequest, NextResponse} from "next/server";
import {CarrosEnum} from "@/app/api/carros/constants";
import {ApiCarWithoutLabel, CarFullData} from "@/global";

type Params = {
  params: {
    slug_code: string;
    code: string;
    year_code: string;
  }
}

export async function GET(request: NextRequest, { params }: Params) {
  const { slug_code, code, year_code } = params;

  const response = await fetch(`${CarrosEnum.MARCAS_URL}/${slug_code}/modelos/${code}/anos/${year_code}`);
  const data: CarFullData = await response.json();

  return NextResponse.json(data);
}