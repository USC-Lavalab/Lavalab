import Image from "next/image";

import testimonialData from "@/data/testimonial";

import PersonIcon from "../../static/icon/Person-Icon/Highlight.png";

function Testimonial() {
  return (
    <div className="testimonial-content">
      <span>“</span>
      <br />
      {testimonialData.text}
      <div className="testimonial-profile">
        <Image src={PersonIcon} alt="" width={48} height={48} />
        <div className="testimonial-profile-details">
          <p className="name">{testimonialData.author.name}</p>
          <p className="detail">{testimonialData.author.detail}</p>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
