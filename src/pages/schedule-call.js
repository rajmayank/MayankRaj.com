import React from "react";

import { RedirectPage, buildRedirectHead } from "../components";

const TARGET_URL = "https://calendly.com/mayank-raj/catch-up";
const TITLE = "Schedule a Call";
const DESCRIPTION =
  "Redirecting you to Mayank Raj's Calendly page to schedule a call.";

export default function ScheduleCallPage() {
  return (
    <RedirectPage
      to={TARGET_URL}
      title={TITLE}
      description={DESCRIPTION}
      linkLabel="Open Calendly"
    />
  );
}

export const Head = () =>
  buildRedirectHead({ title: TITLE, description: DESCRIPTION, to: TARGET_URL });
