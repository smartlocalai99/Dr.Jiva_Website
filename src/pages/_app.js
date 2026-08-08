import { Bricolage_Grotesque, Public_Sans, IBM_Plex_Mono } from "next/font/google";
import "@/styles/globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["500", "600", "700", "800"],
});

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-plex-mono",
  weight: ["400", "500", "600"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${bricolage.variable} ${publicSans.variable} ${plexMono.variable}`}>
      <Component {...pageProps} />
    </div>
  );
}
