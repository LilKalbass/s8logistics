import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
    subsets: ["cyrillic"],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    variable: '--font-montserrat' });
export const metadata = {
  title: "S8`Logistics",
  description: "Logistics Company",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className = {`${montserrat.variable}`}>
      <div>
        <Header/>
        {children}
          <div className='w-full max-w-[1440px] bg-white mx-auto overflow-hidden'><Footer/></div>
      </div>
      </body>
    </html>
  );
}
