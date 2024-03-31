// custom components
import DestinationHeader from "@/components/destination/destination-header";
import ContentContainer from "@/components/UI/content-container";
import Section from "@/components/UI/section";

function layout({ children }) {
  return (
    <Section overflow="auto" background="destination">
      <ContentContainer>
        <DestinationHeader />
        <main>{children}</main>
      </ContentContainer>
    </Section>
  );
}

export default layout;
