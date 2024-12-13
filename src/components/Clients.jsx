import Image from "next/image";

import ujjivanFinance from "../images/clients/ujjain-finance/ujjivan.svg";
import tataAig from "../images/clients/tata-aig/tata.svg";
import hdfc from "../images/clients/hdfc/hdfc.svg";

import Container from "./Container";
import FadeIn, { FadeInStagger } from "./FadeIn";

const clients = [
  ["Ujjivan", ujjivanFinance],
  ["Tata AIG", tataAig],
  ["HDFC", hdfc],
];

const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-blue-900 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We have amazing partners who trust us
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-3"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  );
};

export default Clients;
