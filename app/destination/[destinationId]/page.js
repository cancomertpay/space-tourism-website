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

async function DestinationDetailPage({ params }) {
  const { name, images, description, distance, travel } =
    await getDestinationData(params.destinationId);
  return (
    <article>
      <DestinationImage src={images.webp} alt={`${name}'s image`} />
      <DestinationNavigation activeParam={params.destinationId} />
      <DestinationTitle>{name}</DestinationTitle>

      <DestinationDescription>{description}</DestinationDescription>

      <hr className="border-pale-blue/20 mx-6 my-8" />

      <div>
        <DistanceContainer>{distance}</DistanceContainer>
        <TravelContainer>{travel}</TravelContainer>
      </div>
    </article>
  );
}

export default DestinationDetailPage;
