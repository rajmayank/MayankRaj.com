import React from "react";
import {graphql, Link} from "gatsby";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAws, faDocker, faJsSquare, faPython} from "@fortawesome/free-brands-svg-icons";


import BlogListing from "../components/blog-post-listing";

import PageFooter from "../components/footer";

import "../styles/main.scss";

import ImgBadgeSAA from "../assets/images/badges/aws-certified-solutions-architect-associate.png";
import ImgBadgeSAP from "../assets/images/badges/aws-certified-solutions-architect-professional.png";
import Seo from "../components/seo";
import {OutboundLink} from "gatsby-plugin-google-analytics";


const IndexHeader = () => {
  return (
    <header>

      <Seo title="Home"/>

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

            <OutboundLink href="https://www.credly.com/badges/3b0f1aaa-7afd-4fb5-bb83-a1601f642bb2/public_url" target="_blank" rel="noreferrer">
              <img src={ImgBadgeSAA}
                   alt="AWS Certified Solutions Architect – Professional"
                   className="animate"/>

            </OutboundLink>
            <OutboundLink href="https://www.credly.com/badges/8a486510-a537-48f1-a29e-2643aa626be0/public_url" target="_blank" rel="noreferrer">
              <img src={ImgBadgeSAP}
                   alt="AWS Certified Solutions Architect – Professional"
                   className="animate professional"/>
            </OutboundLink>

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
            <p> I currently work as an Solutions Architect at <OutboundLink href="https://www.cactusglobal.com/">Cactus Communications</OutboundLink>. I've
              previously worked with
              industry leader like <OutboundLink href="https://www.directi.com/">Directi</OutboundLink> while still in the second year of my undergraduate
              study. Prior to that I've
              been involved with <OutboundLink href="https://frapp.in/">Frapp</OutboundLink>, <OutboundLink href="http://workamp.co/">WorkAmp</OutboundLink> etc
              at various stages. I've also served as
              the
              CTO for <OutboundLink href="https://aiesec.org/">AIESEC</OutboundLink> in Mumbai. </p>
            <p>Having had started as a web designer & developer, I have helped startups set up their online presence. From designing the web portals to
              developing, hosting and maintaining them. These initial few years exposed me to JavaScript and the amazing community around it. The language
              still
              manages to throw new things at me after all these years. (shoutout to Kyle Simpson for the <OutboundLink
                href="https://github.com/getify/You-Dont-Know-JS">YDKJS</OutboundLink> series). I have had the opportunity to architect projects that process
              upwards of
              100K events per day. This gave me exposure to cloud services.</p>
            <p>I'm also a core contributor to many open source projects that I use regularly like <OutboundLink
              href="https://bugzilla.mozilla.org/user_profile?user_id=614754">Firefox</OutboundLink>. Recently I have been working in the domain of Artificial
              Intelligence
              and watching the development of <OutboundLink href="https://js.tensorflow.org/">TFJS</OutboundLink> closely. </p>
          </div>

          <div className="content-block">
            {/*<p class="--reduced-margin-bottom">I work with following technologies</p>*/}
            <div className="icons-block">
              <div className="icon">
                <FontAwesomeIcon icon={faJsSquare}/>
                <FontAwesomeIcon icon={faPython}/>
                <FontAwesomeIcon icon={faAws}/>
                <FontAwesomeIcon icon={faDocker}/>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <g>
                    <path fill="currentColor" d="M264 112H24a24 24 0 0 0 0 48h240a24 24 0 0 0 0-48zm352 0H376a24 24 0 0 0 0 48h240a24 24 0 0 0 0-48z"></path>
                    <path fill="currentColor"
                          d="M472 192v45.65l-96.83-29.05a191.93 191.93 0 0 0-110.34 0L168 237.65V192h-48v64.05a32 32 0 0 0 32 32h45.41a179 179 0 0 0-53.33 110.24 16.14 16.14 0 0 0 16 17.71h16.26c8.33 0 14.75-6.58 15.68-14.87a130 130 0 0 1 53.66-91.38l32.93 32.93a32 32 0 0 0 22.62 9.37h37.49a32 32 0 0 0 22.63-9.37l32.93-32.93A130 130 0 0 1 448 401.13c.93 8.29 7.35 14.85 15.68 14.87h16.22a16.13 16.13 0 0 0 16-17.71 178.94 178.94 0 0 0-53.32-110.24H488a32 32 0 0 0 32-32V192zM144 96a23.68 23.68 0 0 0-22.23 16h44.5A23.72 23.72 0 0 0 144 96zm352 0a23.68 23.68 0 0 0-22.23 16h44.5A23.72 23.72 0 0 0 496 96z"></path>
                  </g>
                </svg>
              </div>
              {/*<div className="icon" title="Drone">*/}
              {/*</div>*/}
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