import React from "react";

/**
 * Test component to demonstrate Tailwind typography alternatives
 * This component shows both SCSS and Tailwind typography classes working together
 */
const TypographyTest = () => {
  return (
    <div className="p-4">
      <h2 className="tw-text tw-text-strong mb-4">Typography Test Component</h2>

      <div className="mb-6">
        <h3 className="tw-text-small tw-text-strong mb-2">
          SCSS Typography Classes (Preserved)
        </h3>
        <p className="text">This is the original .text class from SCSS</p>
        <p className="text text--small">
          This is .text with .text--small modifier
        </p>
        <p className="text text--tiny">
          This is .text with .text--tiny modifier
        </p>
        <p className="text text-strong">This is .text with .text-strong</p>
        <p className="text text-uppercase">
          This is .text with .text-uppercase
        </p>
        <p className="text muted-font">This is .text with .muted-font</p>
      </div>

      <div className="mb-6">
        <h3 className="tw-text-small tw-text-strong mb-2">
          Tailwind Typography Alternatives
        </h3>
        <p className="tw-text">This is the .tw-text alternative</p>
        <p className="tw-text-small">This is .tw-text-small alternative</p>
        <p className="tw-text-tiny">This is .tw-text-tiny alternative</p>
        <p className="tw-text tw-text-strong">
          This is .tw-text with .tw-text-strong
        </p>
        <p className="tw-text tw-text-uppercase">
          This is .tw-text with .tw-text-uppercase
        </p>
        <p className="tw-text tw-muted-font">
          This is .tw-text with .tw-muted-font
        </p>
      </div>

      <div className="mb-6">
        <h3 className="tw-text-small tw-text-strong mb-2">
          Additional Tailwind Typography Utilities
        </h3>
        <p className="tw-text tw-text-primary">Primary text color</p>
        <p className="tw-text tw-text-accent">Accent text color</p>
        <p className="tw-text tw-text-subtle">Subtle text color</p>
        <p className="tw-font-primary tw-text">Primary font family</p>
        <p className="tw-font-secondary tw-text">Secondary font family</p>
        <p className="tw-font-code tw-text">Code font family</p>
      </div>

      <div>
        <h3 className="tw-text-small tw-text-strong mb-2">Mixed Usage</h3>
        <p className="text tw-text-accent">
          SCSS .text class with Tailwind accent color
        </p>
        <p className="tw-text text-strong">
          Tailwind .tw-text with SCSS .text-strong
        </p>
      </div>
    </div>
  );
};

export default TypographyTest;
