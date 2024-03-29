// next.js's image component
import Image from "next/image";

// next.js fonts
import { bellafair } from "@/lib/fonts";

// home background images
import backgroundSm from "@/public/assets/home/background-home-mobile.jpg";
import backgroundMd from "@/public/assets/home/background-home-tablet.jpg";
import backgroundLg from "@/public/assets/home/background-home-desktop.jpg";

// custom components
import ExploreButton from "@/components/UI/explore-button";
import HomeHeader from "@/components/home/home-header";
import HomeMain from "@/components/home/home-main";
import BtnContainer from "@/components/home/home-btn-container";

export default function HomePage() {
  return (
    <section className="h-[100vh] w-full relative">
      {/* for sm backgroun image */}
      <Image
        src={backgroundSm}
        alt="Space Tourism website's background image"
        fill
      />
      <div className="absolute top-28 right-0 left-0 text-center">
        <HomeHeader>
          <h1 className="flex flex-col gap-5 items-center justify-center mb-5 uppercase tracking-widest">
            <span className="font-extralight  text-pale-blue">
              So, You Want To Travel To
            </span>
            <span className={`text-7xl text-white  ${bellafair.className}`}>
              Space
            </span>
          </h1>
        </HomeHeader>
        <HomeMain>
          <p className="px-10 text-pale-blue">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </HomeMain>
      </div>
      <BtnContainer>
        <ExploreButton />
      </BtnContainer>
    </section>
  );
}
