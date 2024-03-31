// next.js's image component
import Image from "next/image";

function PageBackground({ background }) {
  return (
    <>
      {/* for sm background image */}

        <Image
          src={`/assets/${background}/background-${background}-mobile.jpg`}
          alt="Space Tourism website's background image"
          className="block md:hidden absolute w-full h-full object-cover"
          fill
        />
      {/* for md background image */}
      <div className="hidden md:inline-flex lg:hidden">
        <Image
          src={`/assets/${background}/background-${background}-tablet.jpg`}
          alt="Space Tourism website's background image"
          className="h-screen"
          fill
        />
      </div>
      {/* for lg background image */}
      <div className="hidden lg:inline-flex">
        <Image
          src={`/assets/${background}/background-${background}-desktop.jpg`}
          alt="Space Tourism website's background image"
          className="h-screen"
          fill
        />
      </div>
    </>
  );
}

export default PageBackground;
