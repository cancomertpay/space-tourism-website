// next.js fonts
import { bellafair } from "@/lib/fonts";

// custom components
import ExploreButton from "@/components/UI/explore-button";
import HomeHeader from "@/components/home/home-header";
import HomeMain from "@/components/home/home-main";
import BtnContainer from "@/components/home/home-btn-container";
import HeroImage from "@/components/home/home-hero-image";
import ContentContainer from "@/components/home/home-content-container";

export default function HomePage() {
  return (
    <section className="h-[100vh] w-full relative">
      {/* background images */}
      <HeroImage />
      {/* home page content container */}
      <ContentContainer>
        <HomeHeader>
          <h1 className="flex flex-col gap-5 items-center justify-center mb-5 uppercase tracking-widest">
            <span className="font-extralight  text-pale-blue md:text-xl">
              So, You Want To Travel To
            </span>
            <span
              className={`text-7xl md:text-9xl text-white  ${bellafair.className}`}
            >
              Space
            </span>
          </h1>
        </HomeHeader>
        <HomeMain>
          <p className="px-10 md:px-16 md:leading-relaxed md:text-lg tracking-wide text-pale-blue">
            Let&apos;s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we&apos;ll give you a truly out of
            this world experience!
          </p>
        </HomeMain>
      </ContentContainer>
      {/* button's container */}
      <BtnContainer>
        <ExploreButton />
      </BtnContainer>
    </section>
  );
}
