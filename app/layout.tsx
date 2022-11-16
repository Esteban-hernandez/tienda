import React from "react";
import "./globals.css";
import Navegation from "@/components/Navegation/Navegaton";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-gray-100 dark:bg-slate-900">
        <Navegation />
        <main className="mt-28 px-4 text-gray-900 dark:text-slate-300">
          {children}
        </main>
      </body>
    </html>
  );
}
