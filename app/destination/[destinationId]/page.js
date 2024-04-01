// get data
import { getDestinationData } from "@/lib/destinations";
// next fonts
import { bellafair } from "@/lib/fonts";

// custom components
import DestinationImage from "@/components/destination/destination-hero-img";
import DestinationNavigation from "@/components/destination/destination-navigation";
import DestinationTitle from "@/components/destination/destination-title";
import DestinationDescription from "@/components/destination/destination-description";
import DistanceContainer from "@/components/destination/distance-container";
import TravelContainer from "@/components/destination/travel-container";
import DestinationHr from "@/components/destination/destination-hr";

async function DestinationDetailPage({ params }) {
  const { name, images, description, distance, travel } =
    await getDestinationData(params.destinationId);
  return (
    <article>
      <DestinationImage src={images.webp} alt={`${name}'s image`} />
      <DestinationNavigation activeParam={params.destinationId} />
      <DestinationTitle>{name}</DestinationTitle>

      <div className="overflow-hidden">
        <DestinationDescription>{description}</DestinationDescription>
      </div>

      {/* <hr className="border-pale-blue/20 mx-6 my-8" /> */}
      <div className="border-pale-blue/20 mx-6 my-8 flex items-center justify-center">
        <DestinationHr />
      </div>

      <div className="overflow-hidden">
        <DistanceContainer>{distance}</DistanceContainer>
        <TravelContainer>{travel}</TravelContainer>
      </div>
    </article>
  );
}

export default DestinationDetailPage;
