(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{205:function(e,t,a){"use strict";a.r(t),a(218),a(100);var n=a(0),s=a.n(n),i=a(220),o=(a(237),a(219),a(234)),r=a.n(o),l=a(212),c=a.n(l),u=a(12),d=a.n(u),p=function(e){var t=e.image,a=e.link,n=e.name,i=e.published,o=e.title,l=t?s.a.createElement("div",{className:"teaser-grid__image"},s.a.createElement(r.a,{sizes:t.childImageSharp.fixed})):null;return s.a.createElement("div",{className:"teaser-grid--wrapper"},s.a.createElement("div",{className:"teaser-grid"},i&&"/"!==a?s.a.createElement(c.a,{to:a,title:"Link to "+n+"'s profile page"},l):l,s.a.createElement("div",{className:"teaser-grid__text"},s.a.createElement("div",{className:"teaser-grid__name teaser__link"},i&&"/"!==a?s.a.createElement(c.a,{to:a,title:"Link to "+n+"'s profile page"},n):n),s.a.createElement("div",{className:"teaser-grid__title"},o))))},f=p;p.propTypes={image:d.a.object,link:d.a.string,name:d.a.string,title:d.a.string,published:d.a.boolean};var m=a(16),g=a.n(m),M=a(242),y=a.n(M),h=a(232),N=a(215),E=a(483),I=a.n(E),b=a(484),v=a.n(b),D=a(485),j=a.n(D),L=function(e){function t(){return e.apply(this,arguments)||this}return g()(t,e),t.prototype.render=function(){var e=I.a?I.a:null,t=v.a?v.a:null,a=j.a?j.a:null;return s.a.createElement("section",{className:"section section__triple-quotes usa-grid"},s.a.createElement(N.a,{title:"Our Perspectives"}),s.a.createElement("div",{className:"blockquotes__list"},s.a.createElement(y.a,{dots:!0,infinite:!1,speed:500,slidesToShow:3,slidesToScroll:1,arrows:!1,responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}]},s.a.createElement(h.a,{quote:"I love the honest, collaborative atmosphere and the way CivicActions prioritizes the well-being of team members.",quote_source:"Iris Ibekwe, Engineer",quote_image:e}),s.a.createElement(h.a,{quote:"I enjoy digging into the challenges of improving communication and process within organizations doing good.",quote_source:"Jeff Maher, Engineer",quote_image:t}),s.a.createElement(h.a,{quote:"We constantly figure out how to do what needs to be done, so we automatically grow. Then we share our learnings with others.",quote_source:"Kim Davidson",quote_image:a}))))},t}(n.Component),T=a(296),z=a(486),w=a.n(z),_=a(487),A=a.n(_),S=a(488),x=a.n(S),C=a(489),O=a.n(C),k=a(490),U=a.n(k),Y=a(491),Q=a.n(Y),G=a(492),Z=a.n(G),P=a(493),V=a.n(P),R=a(494),W=a.n(R),q=a(495),B=a.n(q);a.d(t,"t",function(){return H}),t.default=function(e){var t=e.data,a=t.markdownRemark,n=t.allMarkdownRemark.edges,o=[w.a,A.a,x.a,O.a,U.a,Q.a,Z.a,V.a,W.a,B.a],r=a.frontmatter,l=r.title,c=r.subtitle,u=n.map(function(e,t){var a=e.node.frontmatter,n=a.image,i=a.name,o=a.path,r=a.published,l=a.role;return s.a.createElement(f,{image:n,name:i,link:o,published:r,title:l})});return s.a.createElement(i.a,{heroTitle:l,heroSubtitle:c},s.a.createElement("section",{className:"section usa-grid section__teaser-grid"},u),s.a.createElement(L,null),s.a.createElement("section",{className:"feed__image--wrapper"},s.a.createElement(T.a,{imageArray:o})))};var H="4032956994"},214:function(e,t,a){"use strict";a(219);var n=a(0),s=a.n(n),i=a(12),o=a.n(i),r=a(213),l=function(e){var t=e.type,a=e.button_text,n=e.link,i=e.isExternal,o="secondary"===t?"usa-button-secondary":"dark"===t?"usa-button-secondary-inverse":"hero"===t?"usa-button-navy":"usa-button",l=i?s.a.createElement("a",{href:n,alt:a},a," "):s.a.createElement(r.Link,{alt:a,to:n},a," ");return s.a.createElement("button",{className:o},l)};t.a=l,l.propTypes={type:o.a.string,button_text:o.a.string,link:o.a.string,isExternal:o.a.bool}},215:function(e,t,a){"use strict";var n=a(0),s=a.n(n);t.a=function(e){var t=e.title,a=e.subtitle,n=a?s.a.createElement("p",{className:"section__subtitle"},a):"";return s.a.createElement("div",{className:"section__title--wrapper"},s.a.createElement("h2",{className:"section__title"},t),n)}},216:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(212),o=a.n(i),r=a(217),l=a.n(r),c=a(222);t.a=function(e){return e.pages,s.a.createElement("nav",{role:"navigation",className:"usa-nav"},s.a.createElement("div",{className:"usa-grid mobile-nav--logo"},s.a.createElement("div",{className:"mobile-nav--logo-container"},s.a.createElement(c.a,{siteTitle:"CivicActions"})),s.a.createElement("div",{className:"mobile-nav--close--container"},s.a.createElement("button",{className:"usa-nav-close"},"Menu ",s.a.createElement("img",{src:l.a,alt:"close menu"})))),s.a.createElement("ul",{className:"usa-nav-primary usa-accordion"},s.a.createElement("li",{className:"menu-item"},s.a.createElement("button",{className:"usa-accordion-button usa-nav-link","aria-expanded":"false","aria-controls":"basic-nav-section-one"},s.a.createElement("span",null,"About")),s.a.createElement("ul",{id:"basic-nav-section-one",className:"usa-nav-submenu","aria-hidden":"true"},s.a.createElement("li",null,s.a.createElement(o.a,{to:"/values",activeClassName:"usa-current"}," Our Values ")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/team",activeClassName:"usa-current"}," Our People ")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/communities",activeClassName:"usa-current"}," Our Community  ")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/press",activeClassName:"usa-current"}," Press ")))),s.a.createElement("li",{className:"menu-item"},s.a.createElement("button",{className:"usa-accordion-button usa-nav-link","aria-expanded":"false","aria-controls":"basic-nav-section-two"},s.a.createElement("span",null,"Work")),s.a.createElement("ul",{id:"basic-nav-section-two",className:"usa-nav-submenu","aria-hidden":"true"},s.a.createElement("li",null,s.a.createElement(o.a,{to:"/approach",activeClassName:"usa-current"}," Our Approach ")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/case-study",activeClassName:"usa-current"}," Case Studies ")))),s.a.createElement("li",{className:"menu-item"},s.a.createElement("a",{href:"https://medium.com/civicactions",className:"usa-nav-link"},s.a.createElement("span",null,"Blog"))),s.a.createElement("li",{className:"menu-item"},s.a.createElement("button",{className:"usa-accordion-button usa-nav-link","aria-expanded":"false","aria-controls":"basic-nav-section-three"},s.a.createElement("span",null,"Connect")),s.a.createElement("ul",{id:"basic-nav-section-three",className:"usa-nav-submenu","aria-hidden":"true"},s.a.createElement("li",null,s.a.createElement(o.a,{to:"/careers",activeClassName:"usa-current"}," Careers ")),s.a.createElement("li",null,s.a.createElement(o.a,{to:"/contact",activeClassName:"usa-current"}," Contact "))))))}},217:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTVweCIgaGVpZ2h0PSIxNXB4IiB2aWV3Qm94PSIwIDAgMTUgMTUiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQzLjIgKDM5MDY5KSAtIGh0dHA6Ly93d3cuYm9oZW1pYW5jb2RpbmcuY29tL3NrZXRjaCAtLT4KICAgIDx0aXRsZT5VSSBlbGVtZW50IC8gSWNvbnMgLyBDbG9zZTwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxkZWZzPjwvZGVmcz4KICAgIDxnIGlkPSJVSS1jb21wb25lbnRzIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0iSGVhZGVycy0tLU1vYmlsZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTI5OC4wMDAwMDAsIC0zNjIuMDAwMDAwKSIgZmlsbD0id2hpdGUiPgogICAgICAgICAgICA8ZyBpZD0iSGVhZGVyLS0tTW9iaWxlLS0tQ29sbGFwc2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCAyNzkuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iVUktZWxlbWVudC0vLUljb25zLS8tQ2xvc2UiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDI5OC4wMDAwMDAsIDgzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0xNC42NDY3Nzc4LDExLjIxMjYwMzcgQzE0Ljg4MTg0MDMsMTEuNDQ3NjY2MSAxNSwxMS43MzQyNjYzIDE1LDEyLjA3MTE0NzIgQzE1LDEyLjQwODAyODIgMTQuODgxODQwMywxMi42OTQ2MjgzIDE0LjY0Njc3NzgsMTIuOTI5NjkwOCBMMTIuOTI5NjkwOCwxNC42NDY3Nzc4IEMxMi42OTMzNzEzLDE0Ljg4MzA5NzMgMTIuNDA2NzcxMSwxNS4wMDEyNTcgMTIuMDY5ODkwMiwxNS4wMDEyNTcgQzExLjczNDI2NjMsMTUuMDAxMjU3IDExLjQ0NzY2NjEsMTQuODgzMDk3MyAxMS4yMTI2MDM3LDE0LjY0Njc3NzggTDcuNDk5MzcxNDksMTAuOTM0ODAyNiBMMy43ODczOTYzLDE0LjY0Njc3NzggQzMuNTUyMzMzODYsMTQuODgzMDk3MyAzLjI2NTczMzY4LDE1LjAwMTI1NyAyLjkyODg1Mjc2LDE1LjAwMTI1NyBDMi41OTE5NzE4NCwxNS4wMDEyNTcgMi4zMDY2Mjg2OCwxNC44ODMwOTczIDIuMDcwMzA5MjMsMTQuNjQ2Nzc3OCBMMC4zNTMyMjIxNTcsMTIuOTI5NjkwOCBDMC4xMTY5MDI3MDcsMTIuNjk0NjI4MyAwLDEyLjQwODAyODIgMCwxMi4wNzExNDcyIEMwLDExLjczNDI2NjMgMC4xMTY5MDI3MDcsMTEuNDQ3NjY2MSAwLjM1MzIyMjE1NywxMS4yMTI2MDM3IEw0LjA2NTE5NzM1LDcuNTAwNjI4NTEgTDAuMzUzMjIyMTU3LDMuNzg4NjUzMzEgQzAuMTE2OTAyNzA3LDMuNTUyMzMzODYgMCwzLjI2Njk5MDcgMCwyLjkyODg1Mjc2IEMwLDIuNTkzMjI4ODYgMC4xMTY5MDI3MDcsMi4zMDY2Mjg2OCAwLjM1MzIyMjE1NywyLjA3MTU2NjI0IEwyLjA3MDMwOTIzLDAuMzUzMjIyMTU3IEMyLjMwNjYyODY4LDAuMTE4MTU5NzI1IDIuNTkxOTcxODQsMCAyLjkyODg1Mjc2LDAgQzMuMjY1NzMzNjgsMCAzLjU1MjMzMzg2LDAuMTE4MTU5NzI1IDMuNzg3Mzk2MywwLjM1MzIyMjE1NyBMNy40OTkzNzE0OSw0LjA2NTE5NzM1IEwxMS4yMTI2MDM3LDAuMzUzMjIyMTU3IEMxMS40NDc2NjYxLDAuMTE4MTU5NzI1IDExLjczNDI2NjMsMCAxMi4wNjk4OTAyLDAgQzEyLjQwNjc3MTEsMCAxMi42OTMzNzEzLDAuMTE4MTU5NzI1IDEyLjkyOTY5MDgsMC4zNTMyMjIxNTcgTDE0LjY0Njc3NzgsMi4wNzE1NjYyNCBDMTQuODgxODQwMywyLjMwNjYyODY4IDE1LDIuNTkzMjI4ODYgMTUsMi45Mjg4NTI3NiBDMTUsMy4yNjY5OTA3IDE0Ljg4MTg0MDMsMy41NTIzMzM4NiAxNC42NDY3Nzc4LDMuNzg4NjUzMzEgTDEwLjkzNDgwMjYsNy41MDA2Mjg1MSBMMTQuNjQ2Nzc3OCwxMS4yMTI2MDM3IFoiIGlkPSJGaWxsLTE1LUNvcHkiPjwvcGF0aD4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+"},220:function(e,t,a){"use strict";var n=a(221),s=a(0),i=a.n(s),o=a(229),r=a.n(o),l=a(213),c=a(225),u=(a(218),a(100),a(12)),d=a.n(u),p=a(214),f=function(e){var t,a,n=e.client_name,s=e.title,o=e.subtitle,r=e.cta_text,l=e.cta_link,c=e.cta_is_external,u=e.hero_class,d=e.image,f=e.location,m=e.social,g=d?i.a.createElement("div",{className:"hero__image"},i.a.createElement("img",{src:d,alt:n})):"",M=r?i.a.createElement(p.a,{type:"hero",button_text:r,link:l,isExternal:c}):"",y=f?i.a.createElement("div",{className:"hero__location"},f," "):"";return m&&(t=m.map(function(e,t){return i.a.createElement("a",{className:"hero__social--link",href:e.url}," ",e.name," ")}),a=i.a.createElement("div",{className:"hero__social"},t," ")),i.a.createElement("section",{className:"hero usa-grid "+u},g,i.a.createElement("div",{className:"hero__text"},i.a.createElement("div",{className:"hero__client-name"},n),i.a.createElement("h1",{className:"hero__title"},s),i.a.createElement("div",{className:"hero__intro-text"},o),y,a,M))},m=f;f.propTypes={title:d.a.string,subtitle:d.a.string,cta_text:d.a.string,cta_link:d.a.string};var g=a(228),M=a(227),y=a(224),h=a.n(y),N=a(216),E=a(226),I=a.n(E);t.a=function(e){e.siteData;var t=e.children,a=e.pageTitle,s=e.clientName,o=e.heroTitle,u=e.heroSubtitle,d=e.heroCTAText,p=e.heroCTALink,f=e.heroClass,y=e.heroIsExternal,E=e.hideSubFooter,b=e.teamImage,v=e.location,D=e.social;return i.a.createElement(l.StaticQuery,{query:"1879170749",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(r.a,{title:a,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"},{name:"og:site_name",content:e.site.siteMetadata.title},{property:"og:type",content:"website"},{property:"og:url",content:v},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:image",content:b},{name:"twitter:card",content:h.a.seo.twitterCard},{name:"twitter:site",content:h.a.seo.twitterSite},{property:"fb:app_id",content:h.a.seo.fbAppId},{property:"og:email",content:e.site.siteMetadata.email},{property:"og:phone_number",content:e.site.siteMetadata.phone}]}),i.a.createElement("header",{className:"section header__main",style:{backgroundImage:"url("+I.a+")"}},i.a.createElement("section",{className:"usa-nav-container"},i.a.createElement("div",{className:"usa-navbar"},i.a.createElement(c.a,{siteTitle:"CivicActions"}),i.a.createElement("button",{className:"usa-menu-btn"},"Menu")),i.a.createElement(N.a,{pages:e.allSitePage})),i.a.createElement(m,{client_name:s,title:o,subtitle:u,cta_text:d,cta_link:p,cta_is_external:y,hero_class:f,image:b,location:v,social:D})),i.a.createElement("main",null,i.a.createElement("div",null,t)),i.a.createElement(g.a,{hide:E}),i.a.createElement(M.a,{email:e.site.siteMetadata.email,phone:e.site.siteMetadata.phone,address:e.site.siteMetadata.address,address_line_2:e.site.siteMetadata.address_line_2,city:e.site.siteMetadata.city}))},data:n})}},221:function(e){e.exports={data:{site:{siteMetadata:{title:"CivicActions | Open and Agile Digital Government Services",email:"contact@civicactions.com",phone:"(510) 408-7510",address:"2625 Alcatraz Avenue,",address_line_2:"Suite 320,",city:"Berkeley, CA 94705"}},allSitePage:{edges:[{node:{path:"/dev-404-page/",fields:{slug:"/dev-404-page/"}}},{node:{path:"/",fields:{slug:"/"}}},{node:{path:"/capabilities",fields:{slug:"/capabilities"}}},{node:{path:"/case-study/california-dmv",fields:{slug:"/case-study/california-dmv"}}},{node:{path:"/case-study/eatfresh",fields:{slug:"/case-study/eatfresh"}}},{node:{path:"/case-study/digital-democracy",fields:{slug:"/case-study/digital-democracy"}}},{node:{path:"/case-study/fcc",fields:{slug:"/case-study/fcc"}}},{node:{path:"/case-study/globalnet",fields:{slug:"/case-study/globalnet"}}},{node:{path:"/case-study/foss",fields:{slug:"/case-study/foss"}}},{node:{path:"/case-study/hhs",fields:{slug:"/case-study/hhs"}}},{node:{path:"/case-study/msf",fields:{slug:"/case-study/msf"}}},{node:{path:"/case-study/smithsonian",fields:{slug:"/case-study/smithsonian"}}},{node:{path:"/case-study/usva",fields:{slug:"/case-study/usva"}}},{node:{path:"/case-study/lincs",fields:{slug:"/case-study/lincs"}}},{node:{path:"/press/aaron-pava-executive-director-agl",fields:{slug:"/press/aaron-pava-executive-director-agl"}}},{node:{path:"/press/govtech-2018-top-100-companies",fields:{slug:"/press/govtech-2018-top-100-companies"}}},{node:{path:"/press/best-50-top-workplaces-2017",fields:{slug:"/press/best-50-top-workplaces-2017"}}},{node:{path:"/press/happy-productive-remote-teams",fields:{slug:"/press/happy-productive-remote-teams"}}},{node:{path:"/press/people-are-the-real-metrics",fields:{slug:"/press/people-are-the-real-metrics"}}},{node:{path:"/404.html",fields:{slug:"/404.html"}}},{node:{path:"/404",fields:{slug:"/404"}}},{node:{path:"/approach",fields:{slug:"/approach"}}},{node:{path:"/careers",fields:{slug:"/careers"}}},{node:{path:"/case-study",fields:{slug:"/case-study"}}},{node:{path:"/communities",fields:{slug:"/communities"}}},{node:{path:"/contact",fields:{slug:"/contact"}}},{node:{path:"/dkan-open-data",fields:{slug:"/dkan-open-data"}}},{node:{path:"/press",fields:{slug:"/press"}}},{node:{path:"/team",fields:{slug:"/team"}}},{node:{path:"/thank-you",fields:{slug:"/thank-you"}}},{node:{path:"/values",fields:{slug:"/values"}}},{node:{path:"/404/",fields:{slug:"/404/"}}},{node:{path:"/approach/",fields:{slug:"/approach/"}}},{node:{path:"/careers/",fields:{slug:"/careers/"}}},{node:{path:"/case-study/",fields:{slug:"/case-study/"}}},{node:{path:"/communities/",fields:{slug:"/communities/"}}},{node:{path:"/contact/",fields:{slug:"/contact/"}}},{node:{path:"/dkan-open-data/",fields:{slug:"/dkan-open-data/"}}},{node:{path:"/press/",fields:{slug:"/press/"}}},{node:{path:"/team/",fields:{slug:"/team/"}}},{node:{path:"/thank-you/",fields:{slug:"/thank-you/"}}},{node:{path:"/values/",fields:{slug:"/values/"}}}]}}}},231:function(e,t){e.exports={}},232:function(e,t,a){"use strict";var n=a(0),s=a.n(n),i=a(12),o=a.n(i),r=a(233),l=a.n(r),c=function(e){var t,a=e.quote,n=e.quote_source,i=e.quote_class,o=e.quote_image,r="blockquote__wrapper "+i;return o&&(t=s.a.createElement("div",{className:"blockquote__image"},s.a.createElement("img",{src:o,alt:n}))),s.a.createElement("div",{className:r},t,s.a.createElement("img",{className:"blockquote__icon ",src:l.a,alt:"blockquote icon"}),s.a.createElement("blockquote",{className:"blockquote__text"},s.a.createElement("p",null,a),s.a.createElement("cite",null," ",n," ")))};t.a=c,c.propTypes={quote:o.a.string,quote_class:o.a.string,quote_image:o.a.string,quote_source:o.a.string}},233:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwLjA1MyAzLjcxN2MtMS43MS44NzQtMi45OTIgMS44NzEtMy44NDggMi45OTMtLjg1NSAxLjEyLTEuMjgyIDIuNTM2LTEuMjgyIDQuMjQ2LjExNC0uMDM4LjMwNC0uMDU3LjU3LS4wNTcgMS4yMTYgMCAyLjI1MS4zNyAzLjEwNyAxLjExMi44NTUuNzQgMS4yODIgMS43NTcgMS4yODIgMy4wNDkgMCAxLjQ0NC0uNDE4IDIuNTg0LTEuMjU0IDMuNDItLjgzNi44MzYtMS44ODEgMS4yNTQtMy4xMzUgMS4yNTQtMS43ODYgMC0zLjEyNS0uNjU1LTQuMDE5LTEuOTY3LS44OTMtMS4zMS0xLjMzOS0zLjE0NC0xLjMzOS01LjUgMC0yLjY5OC42NjUtNS4wNzMgMS45OTUtNy4xMjVDMy40NiAzLjA5IDUuNDkzIDEuMzk5IDguMjI5LjA2OWwxLjgyNCAzLjY0OHptMTMuNDUyIDBjLTEuNzEuODc0LTIuOTkyIDEuODcxLTMuODQ4IDIuOTkzLS44NTUgMS4xMi0xLjI4MiAyLjUzNi0xLjI4MiA0LjI0Ni4xMTQtLjAzOC4zMDQtLjA1Ny41Ny0uMDU3IDEuMjE2IDAgMi4yNTEuMzcgMy4xMDcgMS4xMTIuODU1Ljc0IDEuMjgyIDEuNzU3IDEuMjgyIDMuMDQ5IDAgMS40NDQtLjQxOCAyLjU4NC0xLjI1NCAzLjQyLS44MzYuODM2LTEuODgxIDEuMjU0LTMuMTM1IDEuMjU0LTEuNzg2IDAtMy4xMjUtLjY1NS00LjAxOC0xLjk2Ny0uODk0LTEuMzEtMS4zNC0zLjE0NC0xLjM0LTUuNSAwLTIuNjk4LjY2NS01LjA3MyAxLjk5NS03LjEyNSAxLjMzLTIuMDUyIDMuMzYzLTMuNzQzIDYuMDk5LTUuMDczbDEuODI0IDMuNjQ4eiIgZmlsbD0iI0RCMUIzQiIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"},234:function(e,t,a){"use strict";t.__esModule=!0;var n=u(a(250)),s=u(a(251)),i=u(a(267)),o=u(a(273)),r=u(a(274)),l=u(a(0)),c=u(a(12));function u(e){return e&&e.__esModule?e:{default:e}}var d=function(e){var t=(0,r.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},p={},f=function(e){var t=d(e),a=t.sizes?t.sizes.src:t.resolutions.src;return!!p[a]||(p[a]=!0,!1)},m=void 0,g=[],M=null,y=function(){if(null!==M)return M;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return M=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.sizes?'sizes="'+e.sizes+'" ':"",s=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",r=e.height?'height="'+e.height+'" ':"",l=e.opacity?e.opacity:"1";return"<img "+o+r+t+a+i+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+l+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},N=function(e){var t=e.style,a=e.onLoad,n=(0,o.default)(e,["style","onLoad"]);return l.default.createElement("img",(0,r.default)({},n,{onLoad:a,style:(0,r.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};N.propTypes={style:c.default.object,onLoad:c.default.func};var E=function(e){function t(a){(0,n.default)(this,t);var i=(0,s.default)(this,e.call(this,a)),o=!0,r=!0,l=!1;return!f(a)&&"undefined"!=typeof window&&window.IntersectionObserver&&(o=!1,r=!1,l=!0),"undefined"==typeof window&&(o=!1,r=!1),i.state={isVisible:o,imgLoaded:r,IOSupported:l},i.handleRef=i.handleRef.bind(i),i}return(0,i.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&function(e,t){(void 0===m&&"undefined"!=typeof window&&window.IntersectionObserver&&(m=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(m.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),m).observe(e),g.push([e,t])}(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e,t=this,a=d(this.props),n=a.title,s=a.alt,i=a.className,o=a.outerWrapperClassName,c=a.style,u=void 0===c?{}:c,p=a.imgStyle,f=void 0===p?{}:p,m=a.placeholderStyle,g=void 0===m?{}:m,M=a.sizes,E=a.resolutions,I=a.backgroundColor,b=a.Tag;e="boolean"==typeof I?"lightgray":I;var v=(0,r.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},f,g),D=(0,r.default)({opacity:this.state.imgLoaded||!1===this.props.fadeIn?1:0},f);if(M){var j=M;return j.srcWebp&&j.srcSetWebp&&y()&&(j.src=j.srcWebp,j.srcSet=j.srcSetWebp),l.default.createElement(b,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:(0,r.default)({position:"relative",overflow:"hidden"},u),ref:this.handleRef},l.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&l.default.createElement(N,{alt:s,title:n,src:j.base64,style:v}),j.tracedSVG&&l.default.createElement(N,{alt:s,title:n,src:j.tracedSVG,style:v}),e&&l.default.createElement(b,{title:n,style:{backgroundColor:e,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&l.default.createElement(N,{alt:s,title:n,srcSet:j.srcSet,src:j.src,sizes:j.sizes,style:D,onLoad:function(){t.state.IOSupported&&t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,r.default)({alt:s,title:n},j))}})))}if(E){var L=E,T=(0,r.default)({position:"relative",overflow:"hidden",display:"inline-block",width:L.width,height:L.height},u);return"inherit"===u.display&&delete T.display,L.srcWebp&&L.srcSetWebp&&y()&&(L.src=L.srcWebp,L.srcSet=L.srcSetWebp),l.default.createElement(b,{className:(o||"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===u.position?"initial":"relative"}},l.default.createElement(b,{className:(i||"")+" gatsby-image-wrapper",style:T,ref:this.handleRef},L.base64&&l.default.createElement(N,{alt:s,title:n,src:L.base64,style:v}),L.tracedSVG&&l.default.createElement(N,{alt:s,title:n,src:L.tracedSVG,style:v}),e&&l.default.createElement(b,{title:n,style:{backgroundColor:e,width:L.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:L.height}}),this.state.isVisible&&l.default.createElement(N,{alt:s,title:n,width:L.width,height:L.height,srcSet:L.srcSet,src:L.src,style:D,onLoad:function(){t.setState({imgLoaded:!0}),t.props.onLoad&&t.props.onLoad()}}),l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,r.default)({alt:s,title:n,width:L.width,height:L.height},L))}})))}return null},t}(l.default.Component);E.defaultProps={fadeIn:!0,alt:"",Tag:"div"},E.propTypes={responsiveResolution:c.default.object,responsiveSizes:c.default.object,resolutions:c.default.object,sizes:c.default.object,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),outerWrapperClassName:c.default.oneOfType([c.default.string,c.default.object]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,position:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,Tag:c.default.string},t.default=E},238:function(e,t,a){"use strict";t.__esModule=!0;var n=o(a(252)),s=o(a(262)),i="function"==typeof s.default&&"symbol"==typeof n.default?function(e){return typeof e}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":typeof e};function o(e){return e&&e.__esModule?e:{default:e}}t.default="function"==typeof s.default&&"symbol"===i(n.default)?function(e){return void 0===e?"undefined":i(e)}:function(e){return e&&"function"==typeof s.default&&e.constructor===s.default&&e!==s.default.prototype?"symbol":void 0===e?"undefined":i(e)}},239:function(e,t,a){"use strict";var n=a(103),s=a(61),i=a(281),o=a(101),r=a(231),l=a(256),c=a(240),u=a(257),d=a(230)("iterator"),p=!([].keys&&"next"in[].keys()),f=function(){return this};e.exports=function(e,t,a,m,g,M,y){l(a,t,m);var h,N,E,I=function(e){if(!p&&e in j)return j[e];switch(e){case"keys":case"values":return function(){return new a(this,e)}}return function(){return new a(this,e)}},b=t+" Iterator",v="values"==g,D=!1,j=e.prototype,L=j[d]||j["@@iterator"]||g&&j[g],T=L||I(g),z=g?v?I("entries"):T:void 0,w="Array"==t&&j.entries||L;if(w&&(E=u(w.call(new e)))!==Object.prototype&&E.next&&(c(E,b,!0),n||"function"==typeof E[d]||o(E,d,f)),v&&L&&"values"!==L.name&&(D=!0,T=function(){return L.call(this)}),n&&!y||!p&&!D&&j[d]||o(j,d,T),r[t]=T,r[b]=f,g)if(h={values:v?T:I("values"),keys:M?T:I("keys"),entries:z},y)for(N in h)N in j||i(j,N,h[N]);else s(s.P+s.F*(p||D),t,h);return h}},250:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},251:function(e,t,a){"use strict";t.__esModule=!0;var n,s=(n=a(238))&&n.__esModule?n:{default:n};t.default=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==(void 0===t?"undefined":(0,s.default)(t))&&"function"!=typeof t?e:t}},252:function(e,t,a){e.exports={default:a(253),__esModule:!0}},253:function(e,t,a){a(254),a(258),e.exports=a(245).f("iterator")},254:function(e,t,a){"use strict";var n=a(255)(!0);a(239)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,a=this._i;return a>=t.length?{value:void 0,done:!0}:(e=n(t,a),this._i+=e.length,{value:e,done:!1})})},255:function(e,t,a){var n=a(66),s=a(106);e.exports=function(e){return function(t,a){var i,o,r=String(s(t)),l=n(a),c=r.length;return l<0||l>=c?e?"":void 0:(i=r.charCodeAt(l))<55296||i>56319||l+1===c||(o=r.charCodeAt(l+1))<56320||o>57343?e?r.charAt(l):i:e?r.slice(l,l+2):o-56320+(i-55296<<10)+65536}}},256:function(e,t,a){"use strict";var n=a(104),s=a(102),i=a(240),o={};a(101)(o,a(230)("iterator"),function(){return this}),e.exports=function(e,t,a){e.prototype=n(o,{next:s(1,a)}),i(e,t+" Iterator")}},257:function(e,t,a){var n=a(62),s=a(246),i=a(67)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=s(e),n(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},258:function(e,t,a){a(259);for(var n=a(34),s=a(101),i=a(231),o=a(230)("toStringTag"),r="CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","),l=0;l<r.length;l++){var c=r[l],u=n[c],d=u&&u.prototype;d&&!d[o]&&s(d,o,c),i[c]=i.Array}},259:function(e,t,a){"use strict";var n=a(260),s=a(261),i=a(231),o=a(63);e.exports=a(239)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,a=this._i++;return!e||a>=e.length?(this._t=void 0,s(1)):s(0,"keys"==t?a:"values"==t?e[a]:[a,e[a]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},260:function(e,t){e.exports=function(){}},261:function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},262:function(e,t,a){e.exports={default:a(263),__esModule:!0}},263:function(e,t,a){a(280),a(264),a(265),a(266),e.exports=a(23).Symbol},264:function(e,t){},265:function(e,t,a){a(241)("asyncIterator")},266:function(e,t,a){a(241)("observable")},267:function(e,t,a){"use strict";t.__esModule=!0;var n=o(a(268)),s=o(a(272)),i=o(a(238));function o(e){return e&&e.__esModule?e:{default:e}}t.default=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+(void 0===t?"undefined":(0,i.default)(t)));e.prototype=(0,s.default)(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(n.default?(0,n.default)(e,t):e.__proto__=t)}},268:function(e,t,a){e.exports={default:a(269),__esModule:!0}},269:function(e,t,a){a(270),e.exports=a(23).Object.setPrototypeOf},270:function(e,t,a){var n=a(61);n(n.S,"Object",{setPrototypeOf:a(271).set})},271:function(e,t,a){var n=a(42),s=a(44),i=function(e,t){if(s(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(108)(Function.call,a(283).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(e){t=!0}return function(e,a){return i(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:i}},272:function(e,t,a){e.exports={default:a(107),__esModule:!0}},273:function(e,t,a){"use strict";t.__esModule=!0,t.default=function(e,t){var a={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(a[n]=e[n]);return a}},274:function(e,t,a){"use strict";t.__esModule=!0;var n,s=(n=a(275))&&n.__esModule?n:{default:n};t.default=s.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}},275:function(e,t,a){e.exports={default:a(284),__esModule:!0}},296:function(e,t,a){"use strict";a(100);var n=a(0),s=a.n(n),i=a(307),o=a.n(i),r=a(297),l=a.n(r);t.a=l()()(function(e){var t=e.size,a=e.imageArray,n=t.width,i="20%";switch(!0){case n<=480:i="50%";break;case n<=640:i="33%";break;case n<=960:i="25%";break;default:i="20%"}var r=a.map(function(e,t){var a="team-image-"+t;return s.a.createElement("img",{className:"feed__image",src:e,alt:a,key:t})});return s.a.createElement("div",null,s.a.createElement(o.a,{columnWidth:i,gutterWidth:39.2,gutterHeight:39.2,monitorImagesLoaded:!0},r))})},483:function(e,t,a){e.exports=a.p+"c91f956178abc79b2858f6d26978281e.jpg"},484:function(e,t,a){e.exports=a.p+"d406828b1dd26bd47e4b24d4fc7451fa.jpg"},485:function(e,t,a){e.exports=a.p+"3b07b4f73cc5bfb43180c711a6d3a519.jpg"},486:function(e,t,a){e.exports=a.p+"9d68216e2835c9cd3f6d8ef0998ad8eb.jpg"},487:function(e,t,a){e.exports=a.p+"bebd639b17cec9e63175f4f71f2cc247.jpg"},488:function(e,t,a){e.exports=a.p+"1b396025ea782faf635fd8a7d3bf2d05.jpg"},489:function(e,t,a){e.exports=a.p+"a26d88f8560e7aa4b2d78b0724ed94e3.jpg"},490:function(e,t,a){e.exports=a.p+"dcba93b9fba453798615760a4ea4e9aa.jpg"},491:function(e,t,a){e.exports=a.p+"bc72b90d6ce70553969aea4d20170418.jpg"},492:function(e,t,a){e.exports=a.p+"55649099cae902f08b50f82b2c19e5e1.jpg"},493:function(e,t,a){e.exports=a.p+"5f183e1ed1ef2f215163ce92300f6b00.jpg"},494:function(e,t,a){e.exports=a.p+"a42ee2b03b271c1d975ce1e1781270ad.jpg"},495:function(e,t,a){e.exports=a.p+"1624f167430b3712a43fe3d07c805ee8.jpg"}}]);
//# sourceMappingURL=component---src-pages-team-js-ce89ebab0ad43af8f205.js.map