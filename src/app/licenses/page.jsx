import Certificate from "@/components/Certificate";
import PageIntro from "@/components/PageIntro";
import React from "react";

import Certificate1 from "/Users/hriteekroy1869/Documents/ortus-website/ortus-website/src/images/certificates/Certificate2.png";
import Certificate2 from "/Users/hriteekroy1869/Documents/ortus-website/ortus-website/src/images/certificates/Certificate1.png";

import Certificate3 from "/Users/hriteekroy1869/Documents/ortus-website/ortus-website/src/images/certificates/Approval Letter1.png";

import FadeIn from "@/components/FadeIn";

const BlogPage = () => {
  return (
    <>
      <FadeIn>
        <PageIntro
          eyebrow="Expert Certifications"
          title="Our Team's Professional Credentials"
        >
          <p>
            Explore the professional certifications of our team, showcasing the
            expertise and commitment that drive{" "}
            <strong className="font-semibold text-blue-800">
              ORTUS FINANCE
            </strong>{" "}
            to deliver exceptional financial solutions.{" "}
          </p>
        </PageIntro>

        <div className=" grid grid-cols-1  lg:grid-cols-2 ">
          <Certificate
            link={Certificate1}
            heading="NISM Certified Professional"
            subHeading="Prantik Deb, certified on October 20, 2024, under NISM Reg. No. NISM20240000049614."
          />
          <Certificate
            link={Certificate2}
            heading="NISM Certified Professional"
            subHeading="Nabanil Debbarma, certified on October 15, 2024, under NISM Reg. No. NISM20240000048038."
          />
        </div>
        <PageIntro
          eyebrow=""
          title="Our Organisation's Professional Credentials"
        >
          <p>Explore the professional certifications of our Company!</p>
        </PageIntro>
        <div>
          <Certificate
            link={Certificate3}
            heading="  Certificate of Incorporation"
            subHeading="ORTUS FINANCE PRIVATE LIMITED is officially registered under the Companies Act, 2013 on 5th August 2024."
          />
        </div>
      </FadeIn>
    </>
  );
};

export default BlogPage;
