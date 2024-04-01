// get data
import { getDestinationData } from "@/lib/destinations";

// custom components
import DestinationImage from "@/components/destination/destination-hero-img";
import DestinationNavigation from "@/components/destination/destination-navigation";
import DestinationTitle from "@/components/destination/destination-title";
import DestinationDescription from "@/components/destination/destination-description";
import DistanceContainer from "@/components/destination/distance-container";
import TravelContainer from "@/components/destination/travel-container";
import DestinationHr from "@/components/destination/destination-hr";

export async function generateMetadata({ params, searchParams }) {
  // fetch data
  const { metadata } = await getDestinationData(params.destinationId);

  if (!metadata) {
    return;
  }

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

async function DestinationDetailPage({ params }) {
  const { name, images, description, distance, travel } =
    await getDestinationData(params.destinationId);
  return (
    <article className="lg:flex lg:items-center lg:justify-around">
      <DestinationImage src={images.webp} alt={`${name}'s image`} name={name} />
      <div className="bg-primary-black/5 backdrop-blur-sm py-8 lg:flex-1 lg:px-10">
        <DestinationNavigation activeParam={params.destinationId} />

        <DestinationTitle>{name}</DestinationTitle>

        <div className="overflow-hidden">
          <DestinationDescription>{description}</DestinationDescription>
        </div>

        <div className="border-pale-blue/20 mx-6 my-8 flex items-center justify-center lg:mx-0 ">
          <DestinationHr />
        </div>

        <div className="overflow-hidden md:flex md:items-center: md:justify-center lg:justify-start md:gap-32">
          <DistanceContainer>{distance}</DistanceContainer>
          <TravelContainer>{travel}</TravelContainer>
        </div>
      </div>
    </article>
  );
}

export default DestinationDetailPage;
