import Image from "next/image";
import styled from "styled-components";

import { ContentTile } from "@/components/tile";
import employmentData from "@/data/employment";

export default function Employment() {
  return (
    <EmploymentTile theme={"dark"} title="Alumni Industry Employment">
      <EmploymentContent>
        {employmentData.map(item => (
          <div key={item.name} className="employment-item">
            <div className={item.className || ""}>
              <Image src={item.icon} alt="" fill={true} />
            </div>
            {item.name}
          </div>
        ))}
      </EmploymentContent>
    </EmploymentTile>
  );
}

const EmploymentTile = styled(ContentTile)`
  background-color: black;
  color: white;
  display: flex;
  flex-wrap: wrap;

  @media only screen and (max-width: 1115px) {
    height: 560px;
  }
`;

const EmploymentContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
  width: 100%;

  .employment-item {
    flex: 1 0 21%;
    text-align: center;
    color: #8e8e93;
    margin-bottom: 70px;

    @media only screen and (max-width: 1115px) {
      margin-bottom: 30px;
    }

    > div {
      display: block;
      margin: 0 auto;
      margin-bottom: 10px;
      height: 48px;
      position: relative;
      aspect-ratio: 1;
    }

    .more-icon {
      height: 20px;
      border: 1px solid white;
      padding: 4px;
      margin-top: 10px;
      margin-bottom: 20px;
      border-radius: 100px;
    }
  }
`;
