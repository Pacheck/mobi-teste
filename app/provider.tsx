'use client';

import React, {ReactNode} from "react";
import Context from "@/app/context/app-context";
import { Provider as ReduxProvider } from 'react-redux';
import {store} from "@/redux/store";
import {css, Global} from "@emotion/react";

type ProviderProps = {
  children: ReactNode
}

const globalCss = css`* { padding:0; margin: 0 }`

export function Provider({ children }: ProviderProps) {
  return (
    <ReduxProvider store={store}>
      <Context>
        {children}
      </Context>
      <Global styles={globalCss} />
    </ReduxProvider>
  );
}