// custom components
import ContentContainer from "@/components/UI/content-container";
import PagesHeader from "@/components/UI/pages-header";
import Section from "@/components/UI/section";

function layout({ children }) {
  return (
    <Section overflow={"auto"} background={"destination"}>
      <ContentContainer>
        <PagesHeader title={"Pick your destination"} index={"01"} />
        <main>{children}</main>
      </ContentContainer>
    </Section>
  );
}

export default layout;
