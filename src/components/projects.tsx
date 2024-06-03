import React from "react";

import { Carousel, CarouselSlide } from "@/components/carousel";
import { ContentTile } from "@/components/tile";
import projects from "@/data/projects";

export default function Projects() {
  return (
    <ContentTile title="Alumni Project Spotlight">
      <Carousel titles={projects.map(v => v.title)}>
        {projects.map(project => (
          <CarouselSlide key={project.title}>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <a href={project.link}>{project.link}</a>
          </CarouselSlide>
        ))}
      </Carousel>
    </ContentTile>
  );
}
