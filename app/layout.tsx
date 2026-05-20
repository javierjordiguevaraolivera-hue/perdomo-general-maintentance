import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Perdomo General Maintenance | Lake Worth, FL",
  description:
    "Mantenimiento general para carros, motos, camiones, tractores y trocas en Lake Worth, Florida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
