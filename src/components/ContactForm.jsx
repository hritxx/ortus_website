import React from "react";
import FadeIn from "./FadeIn";
import TextInput from "./TextInput";
import RadioInput from "./RadioInput";
import Button from "./Button";

const ContactForm = () => {
  return (
    <FadeIn>
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Work inquiries
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput
            label="Company"
            name="company"
            autoComplete="organization"
          />
          <TextInput label="Phone" type="tel" name="phone" autoComplete="tel" />
          <TextInput label="Message" name="message" />
          <div className="border border-neutral-300 px-6 py-8 first:rounded-t-2xl last:rounded-b-2xl">
            <fieldset>
              <legend className="text-base/6 text-neutral-500">Budget</legend>
            </fieldset>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <RadioInput
                label="₹5 Lakhs – ₹20 Lakhs"
                name="budget"
                value="25"
              />
              <RadioInput
                label="₹21 Lakhs – ₹50 Lakhs"
                name="budget"
                value="50"
              />
              <RadioInput
                label="₹51 Lakhs – ₹1 Crore"
                name="budget"
                value="100"
              />
              <RadioInput
                label="More than ₹1 Crore"
                name="budget"
                value="150"
              />
            </div>
          </div>
        </div>
        <Button type="submit" className="mt-10">
          Let’s work together
        </Button>
      </form>
    </FadeIn>
  );
};

export default ContactForm;
