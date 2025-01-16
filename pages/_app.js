import "../styles/globals.css";
import { Noto_Sans_Ethiopic } from "next/font/google";

const amharicFont = Noto_Sans_Ethiopic({
  subsets: ["ethiopic"],
  weight: ["400", "700"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={amharicFont.className}>
      <Component {...pageProps} />
    </div>
  );
}
