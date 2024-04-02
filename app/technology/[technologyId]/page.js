// api
import { getTechnologyData } from "@/lib/technology";

// custom components
import TechnologyImage from "@/components/technology/technology-image";
import TechnologyNavigation from "@/components/technology/technology-navigation";
import TechnologyBody from "@/components/technology/technology-body";

async function TechnologyDetailPage({ params }) {
  const { name, images, description } = await getTechnologyData(
    params.technologyId
  );
  return (
    <article className="lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
      {/* sm & md */}
      <div className="lg:hidden">
        <TechnologyImage src={images.landscape} alt={name} />
      </div>
      {/* lg */}
      <div className="hidden lg:block">
        <TechnologyImage src={images.portrait} alt={name} />
      </div>
      <div className="lg:flex lg:items-center lg:justify-center lg:gap-5">
        <TechnologyNavigation currentParam={params.technologyId} />
        <div className="mx-10 lg:mx-0">
          <TechnologyBody name={name} description={description} />
        </div>
      </div>
    </article>
  );
}

export default TechnologyDetailPage;
