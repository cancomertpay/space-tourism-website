import { Barlow_Condensed, Bellefair } from "next/font/google";

export const bellafair = Bellefair({ subsets: ["latin"], weight: "400" });

export const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["200", "400", "700"],
});
