import React from "react";
import OutboundLink from "../common/OutboundLink";
import { StaticImage } from "gatsby-plugin-image";
import Icon from "../common/Icon";

/**
 * Main header component for the homepage
 * Features animated design layers and personal branding
 * Uses Tailwind utilities with custom CSS for the signature choreography
 */
const Header = () => (
  <header className="signature-header relative">
    <div className="design-container" aria-hidden="true">
      <div className="layer-1"></div>
      <div className="layer-2 --layer-2"></div>
      <div className="layer-3 --layer-3"></div>
    </div>

    <div className="header-content">
      <div className="name-container">
        <h1 className="name-block">
          <span className="sr-only">Mayank Raj</span>
          <Icon name="headerName" aria-hidden="true" className="block w-full" />
        </h1>
      </div>

      <div className="description-container">
        <div className="row">
          <div className="description-block">
            <span className="row-1 title animate">
              Staff Engineer, Infrastructure @ Stripe
            </span>
          </div>
        </div>

        <div className="badges">
          <OutboundLink
            href="https://www.credly.com/badges/3b0f1aaa-7afd-4fb5-bb83-a1601f642bb2/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../assets/images/badges/aws-certified-solutions-architect-associate.png"
              alt="AWS Certified Solutions Architect – Associate"
              className="animate"
              width={150}
              placeholder="blurred"
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.credly.com/badges/8a486510-a537-48f1-a29e-2643aa626be0/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../assets/images/badges/aws-certified-solutions-architect-professional.png"
              alt="AWS Certified Solutions Architect – Professional"
              className="animate"
              width={150}
              placeholder="blurred"
            />
          </OutboundLink>
          <OutboundLink
            href="https://www.credly.com/badges/1d2d51a2-4c93-44d2-869a-d75e367d3845/public_url"
            target="_blank"
            rel="noreferrer"
          >
            <StaticImage
              src="../../assets/images/badges/cka-certified-kubernetes-administrator.png"
              alt="CKA - Certified Kubernetes Administrator"
              className="animate"
              width={150}
              placeholder="blurred"
            />
          </OutboundLink>
        </div>
      </div>
    </div>
  </header>
);

export default Header;
