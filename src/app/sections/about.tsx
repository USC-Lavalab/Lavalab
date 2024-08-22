import { Carousel, CarouselSlide } from "@/components/carousel";
import { ContentTile } from "@/components/tile";
import aboutData from "@/data/about";

export default function About() {
  return (
    <ContentTile title="Welcome" height={550}>
      <Carousel titles={aboutData.map(slide => slide.title)}>
        {aboutData.map(slide => (
          <CarouselSlide key={slide.title}>
            <h1>{slide.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: slide.content }} />
          </CarouselSlide>
        ))}
      </Carousel>
    </ContentTile>
  );
}
