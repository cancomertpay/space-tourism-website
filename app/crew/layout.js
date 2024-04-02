import ContentContainer from "@/components/UI/content-container";
import PagesHeader from "@/components/UI/pages-header";
import Section from "@/components/UI/section";

function layout({ children }) {
  return (
    <Section overflow="auto" background="crew">
      <ContentContainer>
        <PagesHeader title="Meet your crew" index="02" />
        <main>{children}</main>
      </ContentContainer>
    </Section>
  );
}

export default layout;
