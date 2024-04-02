// api
import { getCrewData } from "@/lib/crew";

// custom components
import CrewBio from "@/components/crew/crew-bio";
import CrewHr from "@/components/crew/crew-hr";
import CrewImage from "@/components/crew/crew-image";
import CrewNavigation from "@/components/crew/crew-navigation";
import CrewTitleGroup from "@/components/crew/crew-title-group";

async function CrewDetail({ params }) {
  const { images, name, role, bio } = await getCrewData(params.crewId);

  return (
    <article className="h-screen mt-10 mx-5 flex flex-col items-center justify-start overflow-hidden md:flex-col-reverse md:justify-between md:mx-32 lg:flex-row-reverse lg:items-center lg:justify-between lg:gap-16 lg:mx-0">
      <CrewImage src={images.webp} alt={name} />
      <div className="md:hidden w-full">
        <CrewHr />
      </div>
      <div className="lg:flex-1 lg:h-full lg:flex lg:flex-col lg:items-center lg:justify-center lg:gap-5">
        <div className="md:hidden">
          <CrewNavigation activeParam={params.crewId} />
        </div>
        <div>
          <CrewTitleGroup role={role} name={name} />
          <CrewBio bio={bio} />
        </div>
        <div className="hidden md:block my-5 lg:w-full">
          <CrewNavigation activeParam={params.crewId} />
        </div>
      </div>
    </article>
  );
}

export default CrewDetail;
