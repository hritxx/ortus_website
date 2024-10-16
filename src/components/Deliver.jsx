import React from "react";
import Section from "./Section";
import imageCharts from "@/images/handCharts.jpg";
import List, { ListItem } from "./List";

const Deliver = () => {
  return (
    <Section
      title="Performance Tracking"
      image={{ src: imageCharts, shape: 1 }}
    >
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Performance tracking at ORTUS FINANCE begins with a thorough review of
          each portfolio, ensuring that every{" "}
          <strong className="font-semibold text-neutral-950">investment</strong>{" "}
          is performing optimally. Our team closely monitors market conditions
          and adjusts your holdings as necessary.
        </p>
        <p>
          While our daily updates cover all relevant metrics, most of the{" "}
          <strong className="font-semibold text-neutral-950">
            significant changes
          </strong>{" "}
          tend to happen just before key financial reports or market movements.
          This ensures your investments are always well-positioned for maximum
          returns.
        </p>
        <p>
          We provide in-depth performance reports quarterly, ensuring your{" "}
          <strong className="font-semibold text-neutral-950">portfolio</strong>{" "}
          stays on track. Minor adjustments are made over time, but rest assured
          — any substantial updates will be part of our extended{" "}
          <strong className="font-semibold text-neutral-950">advisory</strong>{" "}
          service, giving you full control of major financial decisions.
        </p>
      </div>
      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Included in this service
      </h3>
      <List>
        <ListItem title="In-Depth Reports">
          Our reports are comprehensive and give you insights that matter —
          except when they’re loaded with graphs that need extra explanation.
        </ListItem>
        <ListItem title="Market Analysis">
          We subscribe to premium market data services, which we fully pass on
          to you — in carefully summarized bullet points.
        </ListItem>
        <ListItem title="Constant Monitoring">
          With automated alerts, we track your portfolio 24/7 — and notify you
          only when something goes terribly wrong.
        </ListItem>
      </List>
    </Section>
  );
};

export default Deliver;
