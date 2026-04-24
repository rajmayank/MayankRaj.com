import React from "react";

import { RedirectPage, buildRedirectHead } from "../components";

const TARGET_URL = "/Mayank_Raj_Resume.pdf";
const TITLE = "Resume PDF";
const DESCRIPTION = "Redirecting you to Mayank Raj's latest resume PDF.";

export default function ResumePdfPage() {
  return (
    <RedirectPage
      to={TARGET_URL}
      title={TITLE}
      description={DESCRIPTION}
      linkLabel="Open Resume PDF"
    />
  );
}

export const Head = () =>
  buildRedirectHead({ title: TITLE, description: DESCRIPTION, to: TARGET_URL });
