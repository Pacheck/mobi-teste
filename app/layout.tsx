import React from "react";
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import {Provider} from "@/app/provider";

const roboto = Roboto({ weight: ["400", "500", "700"], subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: 'Tabela Fipe',
  description: 'Consultar preço de veículos gratuitamente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
      <Provider>
        {children}
      </Provider>
      </body>
    </html>
  )
}
