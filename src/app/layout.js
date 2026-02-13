import "./globals.css";
import { Aside } from "@/components/Aside";

export const metadata = {
  title: "Code Connect",
  description: "Code Connect is a platform for connecting with other developers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <Aside />
        {children}
        </body>
    </html>
  );
}
