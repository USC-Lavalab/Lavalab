import { CarouselSlide, TiledCarousel } from "@/components/carousel";
import { ContentTile } from "@/components/tile";
import eventsData from "@/data/events";

export default function Events() {
  return (
    <ContentTile type="full" title="Events">
      <TiledCarousel titles={eventsData.map(v => v.title)}>
        {eventsData.map(event => (
          <CarouselSlide key={event.title} icon={event.icon}>
            <h1>{event.heading}</h1>
            <p>{event.description}</p>
          </CarouselSlide>
        ))}
      </TiledCarousel>
    </ContentTile>
  );
}
