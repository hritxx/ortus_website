import Image from "next/image";

export default function TrustSection() {
  return (
    <section className="py-16 bg-[#0e0e1a] border-t border-[#f3c96b]/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#f3c96b] mb-4">
          Why Choose Ortus Finance?
        </h2>
        <p className="text-neutral-200 mb-6">
          Our mentors are seasoned traders with years of experience in Indian
          and global markets. We partner with leading financial institutions and
          offer certification upon course completion.
        </p>
        <div className="flex flex-wrap justify-center gap-8 items-center mt-6">
          <Image width={60} height={120} src="/images/mentor1.png" alt="Mentor 1" className="h-12" />
          <Image width={60} height={120} src="/images/mentor2.png" alt="Mentor 2" className="h-12" />
          <Image width={60} height={120} src="/images/partner1.png" alt="Partner 1" className="h-10" />
          <Image width={60} height={120} src="/images/certified.png" alt="Certified" className="h-10" />
        </div>
      </div>
    </section>
  );
}
