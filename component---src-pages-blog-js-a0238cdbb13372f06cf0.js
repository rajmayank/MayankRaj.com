"use strict";(self.webpackChunkmayankraj_com=self.webpackChunkmayankraj_com||[]).push([[711],{363:function(e,t,a){var n=a(1467),r=a(1647),l=a(5022),c=a(4686);t.A=e=>{let{posts:t,is_compact:a=!1}=e;const m=t.length;return t=a?t.slice(0,4):t,n.createElement("div",{className:"section-top-margin"},a&&n.createElement("h3",{className:"--reduced-margin-bottom"},"Recent articles from ",n.createElement(r.Link,{to:"/blog"},"blog")),n.createElement("div",{className:"post-list-wrapper "+(a?"--compact":"")},t.map(((e,t)=>{let{node:a}=e;return n.createElement("div",{className:"post-list text",key:t},n.createElement("div",null,a.frontmatter.external_link?n.createElement(l.rd,{href:a.frontmatter.external_link,target:"_blank",rel:"noreferrer"},n.createElement("span",{className:"title text-strong text-uppercase"},n.createElement("div",null,a.frontmatter.title,n.createElement("div",{className:"icon"},n.createElement(c.A,{name:"outboundLink"}))))):n.createElement(r.Link,{to:a.frontmatter.page_slug},n.createElement("span",{className:"title text-strong text-uppercase"},a.frontmatter.title)),a.frontmatter.category&&n.createElement("span",{className:"space-left muted-font"},n.createElement("span",null,"posted in")," ",n.createElement("span",{className:"category text-strong text-uppercase muted-font"},a.frontmatter.category)),a.frontmatter.external_site_name&&n.createElement("span",{className:"muted-font"},"at",n.createElement(l.rd,{href:a.frontmatter.external_site_link,target:"_blank",rel:"noreferrer"},n.createElement("span",{className:"external_site text-strong"},a.frontmatter.external_site_name))),n.createElement("br",null),n.createElement("span",{className:"date space-left muted-font"},a.frontmatter.date)))}))),a&&n.createElement("h4",{className:"--reduced-margin-bottom"},"...read ",m," more posts in ",n.createElement(r.Link,{to:"/blog"},"blog")))}},4610:function(e,t,a){var n=a(1467),r=a(3932),l=a(1647);const c=()=>n.createElement("svg",{style:{visibility:"hidden",position:"absolute"},width:"0",height:"0",xmlns:"http://www.w3.org/2000/svg",version:"1.1"},n.createElement("defs",null,n.createElement("filter",{id:"goo"},n.createElement("feGaussianBlur",{in:"SourceGraphic",stdDeviation:"10",result:"blur"}),n.createElement("feColorMatrix",{in:"blur",mode:"matrix",values:"1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9",result:"goo"}),n.createElement("feComposite",{in:"SourceGraphic",in2:"goo",operator:"atop"}))));t.A=e=>{let{title:t,category:a,date:m,bgImageName:o,mood:s="#fdfdfd",readingTime:i}=e;const d=(0,l.useStaticQuery)("1997719401"),p=d.allFile.edges.find((e=>e.node.name===o)),u=p?(0,r.c)(p.node.childImageSharp.gatsbyImageData):(0,r.c)(d.allFile.edges.find((e=>"blog_index_cover"===e.node.name)).node.childImageSharp.gatsbyImageData);return n.createElement("header",{className:"compact",style:{"--mood":s}},u&&n.createElement(r.G,{image:u,alt:"",style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),n.createElement("div",{className:"compact-header-container"},n.createElement(c,null),n.createElement("div",{className:"text-container"},n.createElement("div",{className:"merged-bg-container title"},n.createElement("span",null,t)),(a||m)&&n.createElement("div",{className:"merged-bg-container meta-data"},n.createElement("span",null,a,a&&m&&n.createElement("br",null),m,i&&` | ${i}`)))))}},1698:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(8767),r=a(1467),l=a.p+"static/blog_index_cover-200a7a78fbf83a7bbf35ad9b51b50b9c.jpeg",c=a(4610),m=a(363),o=a(1436),s=a(1226);let i=function(e){function t(){return e.apply(this,arguments)||this}return(0,n.A)(t,e),t.prototype.render=function(){const e=this.props.data.allMarkdownRemark.edges;return r.createElement("div",null,r.createElement(s.A,{title:"Blog"})," ",r.createElement(c.A,{title:"Blog Articles",mood:"#fdfdfd",bgUrl:l}),r.createElement("main",null,r.createElement("div",{className:"post-list-container"},r.createElement(m.A,{posts:e}))),r.createElement(o.A,null))},t}(r.Component);var d=i}}]);
//# sourceMappingURL=component---src-pages-blog-js-a0238cdbb13372f06cf0.js.map