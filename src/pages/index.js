import React from "react";
import {graphql, Link} from "gatsby";

import BlogListing from "../components/blog-post-listing";

import PageFooter from "../components/footer";

import "../styles/main.scss";

import ImgBadgeSAA from "../assets/images/badges/aws-certified-solutions-architect-associate.png";
import ImgBadgeSAP from "../assets/images/badges/aws-certified-solutions-architect-professional.png";


const IndexHeader = () => {
  return (
    <header>
      <div className="design-container">
        <div className="layer-1"></div>
        <div className="layer-2"></div>
        <div className="layer-3"></div>
        <div className="layer-4"></div>
      </div>
      <div className="content-container">
        <div className="name-container">
          <div className="name-block">
            <svg viewBox="0 0 140 80" xmlns='http://www.w3.org/2000/svg' version='1.1'>
              <text text-anchor="start" x="10" y="30" className="text text-stroke" clip-path="url(#text1)"> Mayank
              </text>
              <text text-anchor="start" x="10" y="70" className="text text-stroke" clip-path="url(#text2)"> Raj
              </text>
              <text text-anchor="start" x="10" y="30" className="text text-stroke text-stroke-2" clip-path="url(#text1)">
                Mayank
              </text>
              <text text-anchor="start" x="10" y="70" className="text text-stroke text-stroke-2" clip-path="url(#text2)">
                Raj
              </text>
              <defs>
                <clipPath id="text1">
                  <text text-anchor="start" x="10" y="30" className="text"> Mayank</text>
                </clipPath>
                <clipPath id="text2">
                  <text text-anchor="start" x="10" y="70" className="text"> Raj</text>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="description-container">
          <div className="row">
            <div className="description-block">
              <span className="row-1 title animate">SaaS Founder & Associate Director of Engineering</span>
            </div>
          </div>
          <div className="badges">

            <a href="https://www.credly.com/badges/3b0f1aaa-7afd-4fb5-bb83-a1601f642bb2/public_url" target="_blank" rel="noreferrer">
              <img src={ImgBadgeSAA}
                   alt="AWS Certified Solutions Architect – Professional"
              className="animate"/>

            </a>
            <a href="https://www.credly.com/badges/8a486510-a537-48f1-a29e-2643aa626be0/public_url" target="_blank" rel="noreferrer">
              <img src={ImgBadgeSAP}
                   alt="AWS Certified Solutions Architect – Professional"
                   className="animate professional"/>
            </a>

          </div>
        </div>
      </div>
    </header>
  );
};

const IndexBody = ({posts}) => {
  return (
    <div className="body-container" /*style="--mood: #8E8EC5"*/>
      <div className="content-container">
        <div className="text text-justify text-spacers">


          {/*TODO: Update this to track it*/}

          <div className="content-resume">
            <div className="icon">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path fill="currentColor"
                      d="M369.9 97.98L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zM272 480.01H112v-31.15c0-18.38 13.05-32.86 33.25-32.86 12.45 0 20.8 6.99 46.75 6.99 25.5 0 34.56-6.99 46.75-6.99 20.16 0 33.25 14.43 33.25 32.86v31.15zm80.01-16c0 8.8-7.2 16-16 16H304v-31.15c0-13.88-4.21-26.77-11.41-37.48-12.08-17.94-32.67-27.38-53.84-27.38-19.46 0-24.36 6.99-46.75 6.99-22.41 0-27.26-6.99-46.75-6.99-21.17 0-41.76 9.44-53.83 27.38-7.21 10.7-11.42 23.6-11.42 37.48v31.15H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01zM112 288c0 44.18 35.82 80 80 80s80-35.82 80-80c0-44.19-35.82-80-80-80s-80 35.81-80 80zm128 0c0 26.47-21.53 48-48 48s-48-21.53-48-48 21.53-48 48-48 48 21.53 48 48z"></path>
              </svg>
            </div>
            <Link to="/Mayank_Raj_Resume.pdf" target="_blank" rel="noreferrer"> <span>Resume</span> </Link>
          </div>

          <div className="section-top-margin">
            <p>Hi, I'm Mayank Raj and I'm Solutions Architect currently based in Mumbai, India. I have experience in high performant system architecture,
              cloud
              services and have recently been exploring projects that are in the data science domain. </p>
            <p> I currently work as an Solutions Architect at <a href="https://www.cactusglobal.com/">Cactus Communications</a>. I've previously worked with
              industry leader like <a href="https://www.directi.com/">Directi</a> while still in the second year of my undergraduate study. Prior to that I've
              been involved with <a href="https://frapp.in/">Frapp</a>, <a href="http://workamp.co/">WorkAmp</a> etc at various stages. I've also served as
              the
              CTO for <a href="https://aiesec.org/">AIESEC</a> in Mumbai. </p>
            <p>Having had started as a web designer & developer, I have helped startups set up their online presence. From designing the web portals to
              developing, hosting and maintaining them. These initial few years exposed me to JavaScript and the amazing community around it. The language
              still
              manages to throw new things at me after all these years. (shoutout to Kyle Simpson for the <a
                href="https://github.com/getify/You-Dont-Know-JS">YDKJS</a> series). I have had the opportunity to architect projects that process upwards of
              100K events per day. This gave me exposure to cloud services.</p>
            <p>I'm also a core contributor to many open source projects that I use regularly like <a
              href="https://bugzilla.mozilla.org/user_profile?user_id=614754">Firefox</a>. Recently I have been working in the domain of Artificial
              Intelligence
              and watching the development of <a href="https://js.tensorflow.org/">TFJS</a> closely. </p>
          </div>

          <div className="content-block">
            {/*<p class="--reduced-margin-bottom">I work with following technologies</p>*/}
            <div className="icons-block">
              <div className="icon" title="JavaScript">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                        d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM243.8 381.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"></path>
                </svg>
              </div>
              <div className="icon" title="NodeJS">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                        d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
                </svg>
              </div>
              <div className="icon" title="Python">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                        d="M167.8 36.4c-45.2 8-53.4 24.7-53.4 55.6v40.7h106.9v13.6h-147c-31.1 0-58.3 18.7-66.8 54.2-9.8 40.7-10.2 66.1 0 108.6 7.6 31.6 25.7 54.2 56.8 54.2H101v-48.8c0-35.3 30.5-66.4 66.8-66.4h106.8c29.7 0 53.4-24.5 53.4-54.3V91.9c0-29-24.4-50.7-53.4-55.6-35.8-5.9-74.7-5.6-106.8.1zm-6.7 28.4c11 0 20.1 9.2 20.1 20.4s-9 20.3-20.1 20.3c-11.1 0-20.1-9.1-20.1-20.3.1-11.3 9-20.4 20.1-20.4zm185.2 81.4v47.5c0 36.8-31.2 67.8-66.8 67.8H172.7c-29.2 0-53.4 25-53.4 54.3v101.8c0 29 25.2 46 53.4 54.3 33.8 9.9 66.3 11.7 106.8 0 26.9-7.8 53.4-23.5 53.4-54.3v-40.7H226.2v-13.6h160.2c31.1 0 42.6-21.7 53.4-54.2 11.2-33.5 10.7-65.7 0-108.6-7.7-30.9-22.3-54.2-53.4-54.2h-40.1zM286.2 404c11.1 0 20.1 9.1 20.1 20.3 0 11.3-9 20.4-20.1 20.4-11 0-20.1-9.2-20.1-20.4.1-11.3 9.1-20.3 20.1-20.3z"></path>
                </svg>
              </div>
              <div className="icon" title="AWS">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                        d="M180.41 203.01c-.72 22.65 10.6 32.68 10.88 39.05a8.164 8.164 0 0 1-4.1 6.27l-12.8 8.96a10.66 10.66 0 0 1-5.63 1.92c-.43-.02-8.19 1.83-20.48-25.61a78.608 78.608 0 0 1-62.61 29.45c-16.28.89-60.4-9.24-58.13-56.21-1.59-38.28 34.06-62.06 70.93-60.05 7.1.02 21.6.37 46.99 6.27v-15.62c2.69-26.46-14.7-46.99-44.81-43.91-2.4.01-19.4-.5-45.84 10.11-7.36 3.38-8.3 2.82-10.75 2.82-7.41 0-4.36-21.48-2.94-24.2 5.21-6.4 35.86-18.35 65.94-18.18a76.857 76.857 0 0 1 55.69 17.28 70.285 70.285 0 0 1 17.67 52.36l-.01 69.29zM93.99 235.4c32.43-.47 46.16-19.97 49.29-30.47 2.46-10.05 2.05-16.41 2.05-27.4-9.67-2.32-23.59-4.85-39.56-4.87-15.15-1.14-42.82 5.63-41.74 32.26-1.24 16.79 11.12 31.4 29.96 30.48zm170.92 23.05c-7.86.72-11.52-4.86-12.68-10.37l-49.8-164.65c-.97-2.78-1.61-5.65-1.92-8.58a4.61 4.61 0 0 1 3.86-5.25c.24-.04-2.13 0 22.25 0 8.78-.88 11.64 6.03 12.55 10.37l35.72 140.83 33.16-140.83c.53-3.22 2.94-11.07 12.8-10.24h17.16c2.17-.18 11.11-.5 12.68 10.37l33.42 142.63L420.98 80.1c.48-2.18 2.72-11.37 12.68-10.37h19.72c.85-.13 6.15-.81 5.25 8.58-.43 1.85 3.41-10.66-52.75 169.9-1.15 5.51-4.82 11.09-12.68 10.37h-18.69c-10.94 1.15-12.51-9.66-12.68-10.75L328.67 110.7l-32.78 136.99c-.16 1.09-1.73 11.9-12.68 10.75h-18.3zm273.48 5.63c-5.88.01-33.92-.3-57.36-12.29a12.802 12.802 0 0 1-7.81-11.91v-10.75c0-8.45 6.2-6.9 8.83-5.89 10.04 4.06 16.48 7.14 28.81 9.6 36.65 7.53 52.77-2.3 56.72-4.48 13.15-7.81 14.19-25.68 5.25-34.95-10.48-8.79-15.48-9.12-53.13-21-4.64-1.29-43.7-13.61-43.79-52.36-.61-28.24 25.05-56.18 69.52-55.95 12.67-.01 46.43 4.13 55.57 15.62 1.35 2.09 2.02 4.55 1.92 7.04v10.11c0 4.44-1.62 6.66-4.87 6.66-7.71-.86-21.39-11.17-49.16-10.75-6.89-.36-39.89.91-38.41 24.97-.43 18.96 26.61 26.07 29.7 26.89 36.46 10.97 48.65 12.79 63.12 29.58 17.14 22.25 7.9 48.3 4.35 55.44-19.08 37.49-68.42 34.44-69.26 34.42zm40.2 104.86c-70.03 51.72-171.69 79.25-258.49 79.25A469.127 469.127 0 0 1 2.83 327.46c-6.53-5.89-.77-13.96 7.17-9.47a637.37 637.37 0 0 0 316.88 84.12 630.22 630.22 0 0 0 241.59-49.55c11.78-5 21.77 7.8 10.12 16.38zm29.19-33.29c-8.96-11.52-59.28-5.38-81.81-2.69-6.79.77-7.94-5.12-1.79-9.47 40.07-28.17 105.88-20.1 113.44-10.63 7.55 9.47-2.05 75.41-39.56 106.91-5.76 4.87-11.27 2.3-8.71-4.1 8.44-21.25 27.39-68.49 18.43-80.02z"></path>
                </svg>
              </div>
              <div className="icon" title="Docker">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor"
                        d="M349.9 236.3h-66.1v-59.4h66.1v59.4zm0-204.3h-66.1v60.7h66.1V32zm78.2 144.8H362v59.4h66.1v-59.4zm-156.3-72.1h-66.1v60.1h66.1v-60.1zm78.1 0h-66.1v60.1h66.1v-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7H2.4c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4.4 67.6.1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zm-511.1-27.9h-66v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm78.1 0h-66.1v59.4h66.1v-59.4zm-78.1-72.1h-66.1v60.1h66.1v-60.1z"></path>
                </svg>
              </div>
              <div className="icon" title="Drone">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <g>
                    <path fill="currentColor" d="M264 112H24a24 24 0 0 0 0 48h240a24 24 0 0 0 0-48zm352 0H376a24 24 0 0 0 0 48h240a24 24 0 0 0 0-48z"></path>
                    <path fill="currentColor"
                          d="M472 192v45.65l-96.83-29.05a191.93 191.93 0 0 0-110.34 0L168 237.65V192h-48v64.05a32 32 0 0 0 32 32h45.41a179 179 0 0 0-53.33 110.24 16.14 16.14 0 0 0 16 17.71h16.26c8.33 0 14.75-6.58 15.68-14.87a130 130 0 0 1 53.66-91.38l32.93 32.93a32 32 0 0 0 22.62 9.37h37.49a32 32 0 0 0 22.63-9.37l32.93-32.93A130 130 0 0 1 448 401.13c.93 8.29 7.35 14.85 15.68 14.87h16.22a16.13 16.13 0 0 0 16-17.71 178.94 178.94 0 0 0-53.32-110.24H488a32 32 0 0 0 32-32V192zM144 96a23.68 23.68 0 0 0-22.23 16h44.5A23.72 23.72 0 0 0 144 96zm352 0a23.68 23.68 0 0 0-22.23 16h44.5A23.72 23.72 0 0 0 496 96z"></path>
                  </g>
                </svg>
              </div>
              <div className="icon" title="and a few more...">
                <span>. . .</span>
              </div>
            </div>
            {/*<div class="content-resume">*/}
            {/*        <div class="icon">*/}
            {/*            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">*/}
            {/*                <path fill="currentColor" d="M369.9 97.98L286.02 14.1c-9-9-21.2-14.1-33.89-14.1H47.99C21.5.1 0 21.6 0 48.09v415.92C0 490.5 21.5 512 47.99 512h288.02c26.49 0 47.99-21.5 47.99-47.99V131.97c0-12.69-5.1-24.99-14.1-33.99zM256.03 32.59c2.8.7 5.3 2.1 7.4 4.2l83.88 83.88c2.1 2.1 3.5 4.6 4.2 7.4h-95.48V32.59zM272 480.01H112v-31.15c0-18.38 13.05-32.86 33.25-32.86 12.45 0 20.8 6.99 46.75 6.99 25.5 0 34.56-6.99 46.75-6.99 20.16 0 33.25 14.43 33.25 32.86v31.15zm80.01-16c0 8.8-7.2 16-16 16H304v-31.15c0-13.88-4.21-26.77-11.41-37.48-12.08-17.94-32.67-27.38-53.84-27.38-19.46 0-24.36 6.99-46.75 6.99-22.41 0-27.26-6.99-46.75-6.99-21.17 0-41.76 9.44-53.83 27.38-7.21 10.7-11.42 23.6-11.42 37.48v31.15H47.99c-8.8 0-16-7.2-16-16V48.09c0-8.8 7.2-16.09 16-16.09h176.04v104.07c0 13.3 10.7 23.93 24 23.93h103.98v304.01zM112 288c0 44.18 35.82 80 80 80s80-35.82 80-80c0-44.19-35.82-80-80-80s-80 35.81-80 80zm128 0c0 26.47-21.53 48-48 48s-48-21.53-48-48 21.53-48 48-48 48 21.53 48 48z"></path>*/}
            {/*            </svg>*/}
            {/*        </div>*/}
            {/*        <a href="/resume" target="_blank" rel="noreferrer"> <span>Resume</span> </a>*/}
            {/*      </div>*/}
          </div>

          <BlogListing posts={posts} is_compact={true} show_bl> </BlogListing>
          {/*<IndexBlogPreview posts={posts}> </IndexBlogPreview>*/}
        </div>
      </div>
    </div>

  );
};


// const IndexBlogPreview = ({posts}) => {
//   return (
//     <div className="section-top-margin">
//       <p className="--reduced-margin-bottom">
//         Recent articles from <Link to="/blog"> blog </Link>
//       </p>
//       <div className="post-list-wrapper --compact">
//         <div className="post-list text">
//
//           <div className="post-list-wrapper">
//
//             {posts.map((node) => {
//               const post = node.node;
//
//               let externalLinkHeader = null;
//               if (post.frontmatter.external_link != null) {
//                 externalLinkHeader = (
//                   <a href={node.node.frontmatter.external_link} target="_blank" rel="noreferrer">
//                 <span className="title text-strong text-uppercase">
//                     <div>
//                        {post.frontmatter.title}
//                       <div className="icon">
//                             <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
//                                 <path fill="currentColor"
//                                       d="M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z"></path>
//                             </svg>
//                         </div>
//                     </div>
//                 </span>
//                   </a>
//                 );
//               } else {
//                 externalLinkHeader = (
//                   <Link to={node.node.frontmatter.page_slug}>
//                     <span className="title text-strong text-uppercase">{post.frontmatter.title}</span>
//                   </Link>
//                 );
//               }
//
//               let postCategory = null;
//               if (post.frontmatter.category) {
//                 (
//                   postCategory = (
//                     <span>
//                 <span>posted in</span> &nbsp;
//                       <span className="category text-strong text-uppercase"> {post.frontmatter.category}</span>
//                 </span>
//                   )
//                 );
//               }
//
//               let external_site_name = null;
//               if (post.frontmatter.external_site_name) {
//                 external_site_name = (
//                   <span>
//                   at <a href="{post.frontmatter.external_site_link}" target="_blank" rel="noreferrer">
//                     <span className="external_site text-strong"> {post.frontmatter.external_site_name}</span></a> </span>
//                 );
//               }
//
//               return (
//                 <div>
//                   {externalLinkHeader}
//                   {postCategory} {external_site_name}
//                   <br/>
//                   <span class="date">{post.frontmatter.date} </span>
//                 </div>
//               );
//             })}
//
//           </div>
//         </div>
//       </div>
//     </div>
//
//   );
// };


// TODO: Convert the blog into actual blogs
class IndexPage extends React.Component {
  render() {
    // const {data} = this.props;
    // const siteTitle = data.site.siteMetadata.title;
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <section>
        <IndexHeader> </IndexHeader>
        <IndexBody posts={posts}> </IndexBody>

        <PageFooter> </PageFooter>
      </section>

    );
  }
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 20) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            basecolor
            author
            enablecomments
            category
            bgimage
            external_link
            external_site_name
            external_site_link
            page_slug
          }
        }
      }
    }
  }
`;
