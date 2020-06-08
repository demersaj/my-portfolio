(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{145:function(e,t,a){"use strict";a.r(t);var n=a(35),i=a.n(n),l=a(7),r=a.n(l),s=a(0),c=a.n(s),o=a(148),m=a(4),u=a.n(m),p=function(e){return c.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},c.a.createElement("div",{className:"logo"},c.a.createElement("span",{className:"icon fa-diamond"})),c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"inner"},c.a.createElement("p",null,"Hi, my name is:"),c.a.createElement("h1",null,"Andrew Demers"),c.a.createElement("p",null,"I am a software engineer living in Austin, TX."),c.a.createElement("p",null,"Welcome to my page."))),c.a.createElement("nav",null,c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("intro")}},"Intro")),c.a.createElement("li",null,c.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("work")}},"Work")),c.a.createElement("li",null,c.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("about")}},"Projects")),c.a.createElement("li",null,c.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("contact")}},"Contact")))))};p.propTypes={onOpenArticle:u.a.func,timeout:u.a.bool};var d=p,h=(a(161),a(162)),f=a(165),E=a.n(f),g=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={name:"",email:"",message:"",redirect:!1},t.onChange=function(e){var a;t.setState(((a={})[e.target.name]=e.target.value,a))},t.clearForm=function(){t.setState({name:"",email:"",message:""})},t.handleSubmit=function(e){e.preventDefault(),t.baseState=t.state;var a={fromName:t.state.name,fromEmail:t.state.email,toEmail:"andrew.demers91@gmail.com",message:t.state.message};h.send("mailgun","my_portfolio_template",a,"user_uABJMRa0kF9MP0dQp0ik9").then(function(e){console.log("Success")}).catch(function(e){return console.error("Failed to send feedback. Error: ",e)}),t.clearForm()},t}return r()(t,e),t.prototype.render=function(){var e=this,t=this.state,a=t.name,n=t.email,i=t.message,l=c.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return c.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},c.a.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},c.a.createElement("h2",{className:"major"},"Intro"),c.a.createElement("span",{className:"image main"},c.a.createElement("img",{src:E.a,alt:""})),c.a.createElement("p",null,"I am a software engineer with a mechanical engineering background. I have a B.S. in Mechanical Engineering and Computer Science. I have worked in the defense, financial, technology, and fabrication industries in a variety of roles. I have experience in C, C++, Javascript, HTML5/CSS3, React, and Python, and I enjoy learning new technologies."),l),c.a.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},c.a.createElement("h2",{className:"major"},"Where I've Worked"),c.a.createElement("h4",null,"Software Engineer @ Ultra Electronics"),"Nov. 2019 - Present",c.a.createElement("ul",null,c.a.createElement("li",null,"Responsible for the design, modification, implementation, and integration of software programs to meet the requirements and constraints of the customer scope of work"),c.a.createElement("li",null,"Install, integrate, and test virtualized hardware and software components within the company’s products")),c.a.createElement("h4",null,"Web Developer @ OroSolutions, LLC"),"Mar 2019 - Present",c.a.createElement("ul",null,c.a.createElement("li",null,"Continuously improve and develop web applications to assist the accounting team in preparation and delivery of web-based financial statements"),c.a.createElement("li",null,"Enhance the company’s automated reporting platform by improving report generation controls using a variety of APIs")),c.a.createElement("h4",null,"Lead Engineer @ Midas Green Tech"),"Jan 2018 - Dec 2018",c.a.createElement("ul",null,c.a.createElement("li",null,"Led a diverse team in the design of immersion cooling and supporting systems"),c.a.createElement("li",null,"Responsible for the final specifications, tolerance analysis, and design of all company products"),c.a.createElement("li",null,"Created Python scripts to read and parse data to calculate ROI for different cryptocurrencies")),l),c.a.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},c.a.createElement("h2",{className:"major"},"Projects"),c.a.createElement("h4",null,"Schedule-It"),c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,"Scheduling web app supporting user authentication made using Django, React, and SQLite"),c.a.createElement("br",null),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/demersaj/schedule-it",target:"_blank",className:"icon fa-github"},c.a.createElement("span",{className:"label"},"Github")))),c.a.createElement("h4",null,"Build-a-Burger"),c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,"Dynamic burger building app created using React/Redux, Axios, Webpack, and Firebase"),c.a.createElement("li",null,c.a.createElement("a",{href:"https://build-a-burger-399bc.firebaseapp.com/",target:"_blank",className:"icon fa-external-link"},c.a.createElement("span",{className:"label"},"Live Version"))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/demersaj/build-a-burger",target:"_blank",className:"icon fa-github"},c.a.createElement("span",{className:"label"},"Github")))),c.a.createElement("h4",null,"Small Shell"),c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,"Mini shell in C to demonstrate knowledge of Linux process management, signals, and I/O processing"),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/demersaj/CS344/tree/master/Program3",target:"_blank",className:"icon fa-github"},c.a.createElement("span",{className:"label"},"Github")))),l),c.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},c.a.createElement("h2",{className:"major"},"Contact"),c.a.createElement("form",{onSubmit:this.handleSubmit},c.a.createElement("div",{className:"field half first"},c.a.createElement("label",{htmlFor:"name"},"Name"),c.a.createElement("input",{type:"text",name:"name",id:"name",value:a,onChange:this.onChange})),c.a.createElement("div",{className:"field half"},c.a.createElement("label",{htmlFor:"email"},"Email"),c.a.createElement("input",{type:"text",name:"email",id:"email",value:n,onChange:this.onChange})),c.a.createElement("div",{className:"field"},c.a.createElement("label",{htmlFor:"message"},"Message"),c.a.createElement("textarea",{name:"message",id:"message",rows:"4",value:i,onChange:this.onChange})),c.a.createElement("ul",{className:"actions"},c.a.createElement("li",null,c.a.createElement("input",{type:"submit",value:"Send Message",className:"special",onClick:this.props.onCloseArticle})),c.a.createElement("li",null,c.a.createElement("input",{type:"reset",value:"Reset",onClick:this.clearForm})))),c.a.createElement("ul",{className:"icons"},c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.linkedin.com/in/andrew-demers/",target:"_blank",className:"icon fa-linkedin"},c.a.createElement("span",{className:"label"},"Twitter"))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://github.com/demersaj",target:"_blank",className:"icon fa-github"},c.a.createElement("span",{className:"label"},"Github"))),c.a.createElement("li",null,c.a.createElement("a",{href:"mailto: andrew.demers91@gmail.com",target:"_blank",className:"icon fa-envelope"},c.a.createElement("span",{className:"label"},"Email"))),c.a.createElement("li",null,c.a.createElement("a",{href:"https://www.instagram.com/druskeyy/",target:"_blank",className:"icon fa-instagram"},c.a.createElement("span",{className:"label"},"Instagram")))),l))},t}(s.Component);g.propTypes={route:u.a.object,article:u.a.string,articleTimeout:u.a.bool,onCloseArticle:u.a.func,timeout:u.a.bool,setWrapperRef:u.a.func.isRequired};var v=g,b=function(e){return c.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},c.a.createElement("p",{className:"copyright"},"Built with: ♥ & ",c.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))};b.propTypes={timeout:u.a.bool};var y=b,w=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(i()(a)),a.handleCloseArticle=a.handleCloseArticle.bind(i()(a)),a.setWrapperRef=a.setWrapperRef.bind(i()(a)),a.handleClickOutside=a.handleClickOutside.bind(i()(a)),a}r()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100),document.addEventListener("mousedown",this.handleClickOutside)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},a.setWrapperRef=function(e){this.wrapperRef=e},a.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout(function(){t.setState({timeout:!t.state.timeout})},325),setTimeout(function(){t.setState({articleTimeout:!t.state.articleTimeout})},350)},a.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout(function(){e.setState({timeout:!e.state.timeout})},325),setTimeout(function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})},350)},a.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},a.render=function(){return c.a.createElement(o.a,{location:this.props.location},c.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},c.a.createElement("div",{id:"wrapper"},c.a.createElement(d,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),c.a.createElement(v,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),c.a.createElement(y,{timeout:this.state.timeout})),c.a.createElement("div",{id:"bg"})))},t}(c.a.Component);t.default=w},146:function(e,t,a){var n;e.exports=(n=a(150))&&n.default||n},147:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),i=a.n(n),l=a(4),r=a.n(l),s=a(33),c=a.n(s);a.d(t,"a",function(){return c.a});a(146);var o=i.a.createContext({}),m=function(e){return i.a.createElement(o.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},148:function(e,t,a){"use strict";var n=a(149),i=a(0),l=a.n(i),r=a(4),s=a.n(r),c=a(151),o=a.n(c),m=a(147),u=(a(152),function(e){var t,a=e.children,i=e.location;return t=i&&"/"===i.pathname?l.a.createElement("div",null,a):l.a.createElement("div",{id:"wrapper",className:"page"},l.a.createElement("div",null,a)),l.a.createElement(m.b,{query:"2994927498",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{title:e.site.siteMetadata.title,meta:[{name:"portfolio",content:"portfolio"}]},l.a.createElement("html",{lang:"en"})),t)},data:n})});u.propTypes={children:s.a.node.isRequired},t.a=u},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Andrew Demers | Software Engineer"}}}}},150:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),i=a.n(n),l=a(4),r=a.n(l),s=a(54),c=a(2),o=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return a?i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json)):null};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=o},161:function(e,t,a){var n=a(25).f,i=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in i||a(18)&&n(i,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},162:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a(163),i=a(164),l=null,r="https://api.emailjs.com";function s(e,t,a){return void 0===a&&(a={}),new Promise(function(i,l){var r=new XMLHttpRequest;for(var s in r.addEventListener("load",function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?i(t):l(t)}),r.addEventListener("error",function(e){l(new n.EmailJSResponseStatus(e.target))}),r.open("POST",e,!0),a)r.setRequestHeader(s,a[s]);r.send(t)})}function c(e){var t=document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}t.init=function(e,t){l=e,r=t||"https://api.emailjs.com"},t.send=function(e,t,a,n){var i={lib_version:"2.3.2",user_id:n||l,service_id:e,template_id:t,template_params:c(a)};return s(r+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},t.sendForm=function(e,t,a,n){if("string"==typeof a&&(a=document.querySelector(a)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(a);var c=new FormData(a);return c.append("lib_version","2.3.2"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n||l),s(r+"/api/v1.0/email/send-form",c).then(function(e){return i.UI.successState(a),e},function(e){return i.UI.errorState(a),Promise.reject(e)})}},163:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){return function(e){this.status=e.status,this.text=e.responseText}}();t.EmailJSResponseStatus=n},164:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n},165:function(e,t,a){e.exports=a.p+"static/pic01-1108e1d998dfab5b361fea97a3150227.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-eea8e8ed1e02cfe7ef99.js.map