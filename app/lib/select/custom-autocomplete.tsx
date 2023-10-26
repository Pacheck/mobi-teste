import React from "react";
import {Car} from "@/redux/types";
import Select from "@/app/lib/select/custom-autocomplete.styles";
import {SelectType} from "@/global";

const CustomAutocomplete: React.FC<SelectType<Car>> = ({ options, ...rest }) => {
  return <Select
    options={options}
    {...rest}

  />
}

export default CustomAutocomplete;