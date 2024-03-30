// next.js's image component
import Image from "next/image";

// home background images
import backgroundSm from "@/public/assets/home/background-home-mobile.jpg";
import backgroundMd from "@/public/assets/home/background-home-tablet.jpg";
import backgroundLg from "@/public/assets/home/background-home-desktop.jpg";

function HeroImage() {
  return (
    <>
      {/* for sm background image */}
      <div className="md:hidden">
        <Image
          src={backgroundSm}
          alt="Space Tourism website's background image"
          className="h-screen"
          fill
        />
      </div>
      {/* for md background image */}
      <div className="hidden md:inline-flex lg:hidden">
        <Image
          src={backgroundMd}
          alt="Space Tourism website's background image"
          className="h-screen"
          fill
        />
      </div>
      {/* for lg background image */}
      <div className="hidden lg:inline-flex">
        <Image
          src={backgroundLg}
          alt="Space Tourism website's background image"
          className="h-screen"
          fill
        />
      </div>
    </>
  );
}

export default HeroImage;
