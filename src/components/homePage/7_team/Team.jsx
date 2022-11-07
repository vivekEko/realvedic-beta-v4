// React
import React from "react";

// Media Files
import blob1 from "../../../assets/img/landingPage/team/blob1.svg";
import blob2 from "../../../assets/img/landingPage/team/blob2.svg";
import blob3 from "../../../assets/img/landingPage/team/blob3.svg";
import blob4 from "../../../assets/img/landingPage/team/blob4.svg";
import profileImg from "../../../assets/img/landingPage/team/rectangle.svg";

// team
const teamMembers = [
  {
    name: "Ranganathan Srinivasan",
    designation: "Founder & CEO",
    cover_img: blob1,
    profile_img: profileImg,
    message:
      "Technocrat entrepreneur with over 20+ years experience. He is the founder and CEO of EKO Infomatics Solutions. Head of Decision Science Team at GE and VP Research and Analytics at WNS. He dons many hats and loves the challenges of a startup.",
  },
  {
    name: "Rangarajan Venkatraman",
    designation: "Co-Founder & CEO",
    cover_img: blob2,
    profile_img: profileImg,
    message:
      "Entrepreneur with over 10 years of experience in the hospitality industry. His foray began in 2010 when he entered his....",
  },
  {
    name: "Rajlaxmi Shivram",
    designation: "Head of Product Development",
    cover_img: blob3,
    profile_img: profileImg,
    message:
      "Ex-Portfolio head in the Ecommerce vertical in HDFC Bank and has an overall experience of around 20 years...",
  },
  {
    name: "Ranganathan Srinivasan",
    designation: "Founder & CEO",
    cover_img: blob4,
    profile_img: profileImg,
    message:
      "Technocrat entrepreneur with over 20+ years experience. He is the founder and CEO of EKO Infomatics Solutions. Head of Decision Science Team at GE and VP Research and Analytics at WNS. He dons many hats and loves the challenges of a startup.",
  },
];

const Team = () => {
  return (
    <section>
      <div>
        {/* Heading */}
        <div className="flex justify-between items-center w-[85%] mx-auto ">
          <h1 className="text-xl font-bold">Our Team</h1>
        </div>

        {/* team members */}
        <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4 w-[85%] mx-auto">
          {teamMembers?.map((data, index) => {
            return (
              <div key={index}>
                {/* Image with vector*/}
                <div className="relative mx-auto w-fit">
                  <img
                    src={data?.cover_img}
                    alt="..."
                    className="sm:w-[70%] md:w-[90%] lg:w-[85%] xl:w-[80%] "
                  />
                  <img
                    src={data?.profile_img}
                    alt="..."
                    className="absolute rounded-full w-[80px] sm:w-[100px] md:w-[120px]  aspect-square z-10 top-[25%]  "
                  />
                </div>

                <div className="mt-5">
                  <h1 className="font-bold text-center text-sm sm:text-base">
                    {data?.name}
                  </h1>
                  <h1 className="font-bold text-center text-sm sm:text-base">
                    {data?.designation}
                  </h1>
                  <p className="text-center mt-5 text-xs sm:text-sm">
                    {data?.message}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Team;
