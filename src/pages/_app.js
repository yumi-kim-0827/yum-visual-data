import "primereact/resources/themes/soho-light/theme.css";
import "primereact/resources/primereact.min.css";
import "primeflex/primeflex.css";
import "primeicons/primeicons.css";
import "@/src/styles/globals.css";
import { PrimeReactProvider } from "primereact/api";
import { useEffect, useState } from "react";
//components
import PanelMenuBar from "@/src/components/sidemenu/PanelMenuBar";
import Header from "@/src/components/header/Header";

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState("dart");
  return (
    <PrimeReactProvider>
      <Header />
      <div className="p-4 flex gap-2">
        <PanelMenuBar />
        <Component {...pageProps} />
      </div>
    </PrimeReactProvider>
  );
}
