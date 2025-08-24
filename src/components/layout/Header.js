import React from "react";
import { OutboundLink } from "gatsby-plugin-google-analytics";
import { StaticImage } from "gatsby-plugin-image";
import Icon from "../common/Icon";

/**
 * Main header component for the homepage
 * Features animated design layers and personal branding
 */
const Header = () => (
  <header>
    <div className="design-container">
      <div className="layer-1"></div>
      <div className="layer-2 --layer-2"></div>
      <div className="layer-3 --layer-3"></div>
    </div>

    <div className="content-container">
      <div className="name-container">
        <div className="name-block">
          <Icon name="headerName" />
        </div>
      </div>

      <div className="description-container">
        <div className="row">
          <div className="description-block">
            <span className="row-1 title animate">
              Lead Engineer, Security @ Salesforce
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
              className="animate professional"
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
              className="animate size-bg"
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
