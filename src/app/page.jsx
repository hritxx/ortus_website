import Clients from "@/components/Clients";
import Container from "@/components/Container";
import FadeIn from "@/components/FadeIn";
import logoPhobiaDark from "@/images/clients/phobia/logo-dark.svg";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import ContactSection from "@/components/ContactSection";
import Faq from "@/components/Faq";
import Testimonial from "@/components/Testimonial";

export default function Home() {
  return (
    <main className="text-black">
      <Container className="mt-24 sm:mt-32">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Let your financial success shine online with us!
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            <strong className="font-semibold text-blue-800">
              ORTUS FINANCE
            </strong>{" "}
            Pvt. Ltd. is a government-registered investment firm led by
            co-founders from Tripura who bring extensive knowledge in business
            administration, along with proven expertise as seasoned traders and
            fund mangers having experience of more than 10 years.
          </p>
        </FadeIn>
      </Container>
      <Clients />
      <Testimonials
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: "Phobia", logo: logoPhobiaDark }}
      >
        The team at Studio went above and beyond with our onboarding, even
        finding a way to access the user microphone without triggering one of
        those annoying permission dialogs.
      </Testimonials>
      <Services />
      <Testimonial />
      <Faq />
      <ContactSection />
    </main>
  );
}
