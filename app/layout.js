import { Inter } from "next/font/google";
import "./globals.css";
import ThemeRegistry from '@/theme/ThemeRegister'


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Iowa Golf Trip",
  description: "Unique Iowa Golf",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Nunito|Nabla|Roboto|Smooch|Caveat|Poiret+One|Rubik+Maze|Rye|Pacifico|Lobster|Dancing+Script|Bangers|Fredericka+the+Great" />

        <link rel="icon" href="/images/collisonpar3logo.png" />
      </head>
      <ThemeRegistry>
        <body className={inter.className}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
