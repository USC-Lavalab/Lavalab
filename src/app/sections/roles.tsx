import React from "react";

import { Carousel, CarouselSlide } from "@/components/carousel";
import { ContentTile } from "@/components/tile";
import rolesData from "@/data/roles";

function Roles() {
  return (
    <ContentTile title="Find Your Role">
      <Carousel titles={rolesData.map(role => role.title)}>
        {rolesData.map((role, index) => (
          <CarouselSlide key={index}>
            <h1>{role.title}</h1>
            <p dangerouslySetInnerHTML={{ __html: role.description }}></p>
          </CarouselSlide>
        ))}
      </Carousel>
    </ContentTile>
  );
}

export default Roles;
