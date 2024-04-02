import ContentContainer from "@/components/UI/content-container";
import PagesHeader from "@/components/UI/pages-header";
import Section from "@/components/UI/section";

function layout({ children }) {
  return (
    <Section overflow="auto" background="technology">
      <ContentContainer>
        <PagesHeader title="Space launch 101" index="03" />
        <main>{children}</main>
      </ContentContainer>
    </Section>
  );
}

export default layout;
