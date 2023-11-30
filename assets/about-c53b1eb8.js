import{d as i,r as l,o as s,c,w as h,a as e,t as a,b as t}from"./index-48c40036.js";const d={class:"markdown-body"},p={id:"%7B%7Bfrontmatter.title%7D%7D",tabindex:"-1"},u=e("h2",{id:"dig-deeper",tabindex:"-1"},"Dig deeper",-1),_=e("p",null,"Please contact us if you need extended access to the data underlying here. The TaxonWorks interfaces used to curate these data include wide range of additional filtering, reporting, and curatorial functionality. With a little training from us we’d be happy to provide you access to this additional functionality. Over time we expect this site to gradually mirror that extended functionality.",-1),m=e("h2",{id:"contact",tabindex:"-1"},"Contact",-1),f=e("p",null,[t("If you have a question, want to report new data relevant to the project, or have error our preferred means of contact is to file an issue on our "),e("a",{href:"https://github.com/our/project/tracker",rel:"noopener noreferrer",target:"_blank"},"project tracker"),t(". You can also "),e("a",{href:"https://slackservername",rel:"noopener noreferrer",target:"_blank"},"chat live with us"),t(". We can also be reached via "),e("a",{href:"{{mailto:frontmatter.contact_email}}",rel:"noopener noreferrer",target:"_blank"},"email"),t(".")],-1),b=e("h2",{id:"team",tabindex:"-1"},"Team",-1),g=e("p",null,[e("em",null,"Please contact us if you would like to join this effort.")],-1),x=e("p",null,"Made possible by the wonderful:",-1),k=e("ul",null,[e("li",null,"Gandalf - Technical lead"),e("li",null,"Aragorn - Outside advisor"),e("li",null,"Frodo - Lead curator"),e("li",null,"Samwise - Emotional support")],-1),w=e("h2",{id:"citing",tabindex:"-1"},"Citing",-1),y=e("li",null,"Individual taxon pages - See citation at the bottom of each page.",-1),v=e("h2",{id:"data",tabindex:"-1"},"Data",-1),T=e("p",null,[t("Data for these pages is collaboratively curated online in a "),e("a",{href:"https://taxonworks",rel:"noopener noreferrer",target:"_blank"},"TaxonWorks"),t(" project. All data behind this site served as JSON through calls to a "),e("a",{href:"https://api.taxonworks.org",rel:"noopener noreferrer",target:"_blank"},"TaxonWorks API"),t(". You can follow along by using the Console of your browser to explore the Network tab.")],-1),C=e("h2",{id:"technical",tabindex:"-1"},"Technical",-1),W=e("p",null,[t("Want to create your own site? This website is built completely on open-source software. There is a "),e("a",{href:"https://github.com/SpeciesFileGroup/%3Csomething%3E",rel:"noopener noreferrer",target:"_blank"},"site template"),t(" with more information. Data are curated in a "),e("a",{href:"https://taxonworks.org",rel:"noopener noreferrer",target:"_blank"},"TaxonWorks"),t(" project then shared via a "),e("a",{href:"https://api.taxonworks.org",rel:"noopener noreferrer",target:"_blank"},"TaxonWorks API"),t(". Come "),e("a",{href:"https://gitter.im/SpeciesFileGroup/taxonworks",rel:"noopener noreferrer",target:"_blank"},"chat"),t(" with the TaxonWorks community at any time.")],-1),A=e("h2",{id:"copyright",tabindex:"-1"},"Copyright",-1),o={title:"About",contact_email:"user@example.com",copyright:"All content is CC 0 so that it maybe be shared throughout the world in places like Wikipedia.",citation:"Project collaborative. 2022. Website title. Available at https://example.com."},B="",I=i({__name:"about",setup(j,{expose:r}){return r({frontmatter:{title:"About",contact_email:"user@example.com",copyright:"All content is CC 0 so that it maybe be shared throughout the world in places like Wikipedia.",citation:"Project collaborative. 2022. Website title. Available at https://example.com."},excerpt:void 0}),(D,P)=>{const n=l("markdown-layout");return s(),c(n,{frontmatter:o},{default:h(()=>[e("div",d,[e("h1",p,a(o.title),1),u,_,m,f,b,g,x,k,w,e("ul",null,[e("li",null,"This website - "+a(o.citation),1),y]),v,T,C,W,A,e("p",null,[e("em",null,a(o.copyright),1)])])]),_:1})}}});export{I as default,B as excerpt,o as frontmatter};