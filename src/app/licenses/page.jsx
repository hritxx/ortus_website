import Certificate from "@/components/Certificate";
import PageIntro from "@/components/PageIntro";
import FadeIn from "@/components/FadeIn";

import Certificate1 from "@/images/certificates/Certificate2.png";
import Certificate2 from "@/images/certificates/Certificate1.png";
import Certificate3 from "@/images/certificates/Approval Letter1.png";
import Certificate4 from "@/images/certificates/Certificate3.png";
import Certificate5 from "@/images/certificates/c5.png";
import Certificate6 from "@/images/certificates/c6.png";
import Certificate7 from "@/images/certificates/c7.png";
import Certificate8 from "@/images/certificates/c8.png";
import Certificate9 from "@/images/certificates/c9.png";
import Certificate10 from "@/images/certificates/c10.png";
import Certificate11 from "@/images/certificates/c11.png";
import Certificate12 from "@/images/certificates/c12.png";

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
            size="small"
          />

          <Certificate
            link={Certificate2}
            heading="NISM Certified Professional"
            subHeading="Nabanil Debbarma, certified on October 15, 2024, under NISM Reg. No. NISM20240000048038."
            size="small"
          />
          <Certificate
            link={Certificate4}
            heading="Certificate of Completion"
            subHeading="Awarded by the National Institute of Securities Markets (NISM)."
            size="small"
          />
          <Certificate
            link={Certificate11}
            heading="Certificate of Completion"
            subHeading="Completed E-Learning course on Listing on Stock Exchange by NISM."
            size="small"
          />
          <Certificate
            link={Certificate10}
            heading="Certificate of Completion"
            subHeading="Completed E-Learning course on Financial Literacy by NISM."
            size="small"
          />
          <Certificate
            link={Certificate5}
            heading="Certificate of Achievement"
            subHeading="Recognizing Excellence in Completing the Course: “Understanding Mutual Funds and the Role of a Transfer Agency.”"
            size="small"
          />
          <Certificate
            link={Certificate6}
            heading="Certificate of Excellence"
            subHeading="Awarded for Successfully Completing the Program in Financial Services Excellence."
            size="small"
          />
          <Certificate
            link={Certificate7}
            heading="Certificate of Completion"
            subHeading="E-Learning Course on Listing on Stock Exchanges."
            size="small"
          />
          <Certificate
            link={Certificate12}
            heading="Certificate of Completion"
            subHeading="E-Learning course on Financial Planning by NISM.”."
            size="small"
          />
          <Certificate
            link={Certificate8}
            heading="Certificate of Completion"
            subHeading="HP LIFE Online Course: Basics of Finance."
            size="small"
          />
          <Certificate
            link={Certificate9}
            heading="Certificate of Participation"
            subHeading="Online Skilling Course: Branch Banking Executive."
            size="small"
          />
        </div>
        <PageIntro
          eyebrow=""
          title="Professional Credentials of Our Organization"
        >
          <p>
            Discover the various professional certifications and credentials
            that showcase the expertise and industry recognition of our company!
          </p>
        </PageIntro>
        <div>
          <Certificate
            link={Certificate3}
            heading="  Certificate of Incorporation"
            subHeading="ORTUS FINANCE PRIVATE LIMITED is officially registered under the Companies Act, 2013 on 5th August 2024."
            size="big"
          />
        </div>
      </FadeIn>
    </>
  );
};

export default BlogPage;
