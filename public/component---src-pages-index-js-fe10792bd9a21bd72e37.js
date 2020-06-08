(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{D5Hz:function(e,t,a){"use strict";a("VRzm"),a("Btvt"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n=a("MkV5");t.EmailJSResponseStatus=n.EmailJSResponseStatus;var i=a("USkh"),l=null,r="https://api.emailjs.com";function s(e,t,a){return void 0===a&&(a={}),new Promise((function(i,l){var r=new XMLHttpRequest;for(var s in r.addEventListener("load",(function(e){var t=new n.EmailJSResponseStatus(e.target);200===t.status||"OK"===t.text?i(t):l(t)})),r.addEventListener("error",(function(e){l(new n.EmailJSResponseStatus(e.target))})),r.open("POST",e,!0),a)r.setRequestHeader(s,a[s]);r.send(t)}))}function c(e){var t=document.getElementById("g-recaptcha-response");return t&&t.value&&(e["g-recaptcha-response"]=t.value),t=null,e}function o(e,t){l=e,r=t||"https://api.emailjs.com"}function m(e,t,a,n){var i={lib_version:"2.4.1",user_id:n||l,service_id:e,template_id:t,template_params:c(a)};return s(r+"/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})}function u(e,t,a,n){if("string"==typeof a&&(a=document.querySelector(a)),!a||"FORM"!==a.nodeName)throw"Expected the HTML form element or the style selector of form";i.UI.progressState(a);var c=new FormData(a);return c.append("lib_version","2.4.1"),c.append("service_id",e),c.append("template_id",t),c.append("user_id",n||l),s(r+"/api/v1.0/email/send-form",c).then((function(e){return i.UI.successState(a),e}),(function(e){return i.UI.errorState(a),Promise.reject(e)}))}t.init=o,t.send=m,t.sendForm=u,t.default={init:o,send:m,sendForm:u}},MkV5:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){this.status=e.status,this.text=e.responseText};t.EmailJSResponseStatus=n},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),l=a("Bl7J"),r=function(e){return i.a.createElement("header",{id:"header",style:e.timeout?{display:"none"}:{}},i.a.createElement("div",{className:"logo"},i.a.createElement("span",{className:"icon fa-diamond"})),i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"inner"},i.a.createElement("p",null,"Hi, my name is:"),i.a.createElement("h1",null,"Andrew Demers"),i.a.createElement("p",null,"I am a software engineer living in Austin, TX."),i.a.createElement("p",null,"Welcome to my page."))),i.a.createElement("nav",null,i.a.createElement("ul",null,i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("intro")}},"Intro")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("work")}},"Work")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("about")}},"Projects")),i.a.createElement("li",null,i.a.createElement("a",{href:"javascript:;",onClick:function(){e.onOpenArticle("contact")}},"Contact")))))},s=(a("f3/d"),a("D5Hz")),c=a("RYzB"),o=a.n(c);var m=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={name:"",email:"",message:"",redirect:!1},t.onChange=function(e){var a;t.setState(((a={})[e.target.name]=e.target.value,a))},t.clearForm=function(){t.setState({name:"",email:"",message:""})},t.handleSubmit=function(e){e.preventDefault(),t.baseState=t.state;var a={fromName:t.state.name,fromEmail:t.state.email,toEmail:"andrew.demers91@gmail.com",message:t.state.message};s.send("mailgun","my_portfolio_template",a,"user_uABJMRa0kF9MP0dQp0ik9").then((function(e){console.log("Success")})).catch((function(e){return console.error("Failed to send feedback. Error: ",e)})),t.clearForm()},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.state,a=t.name,n=t.email,l=t.message,r=i.a.createElement("div",{className:"close",onClick:function(){e.props.onCloseArticle()}});return i.a.createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:"flex"}:{display:"none"}},i.a.createElement("article",{id:"intro",className:("intro"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"Intro"),i.a.createElement("span",{className:"image main"},i.a.createElement("img",{src:o.a,alt:""})),i.a.createElement("p",null,"I am a software engineer with a mechanical engineering background. I have a B.S. in Mechanical Engineering and Computer Science. I have worked in the defense, financial, technology, and fabrication industries in a variety of roles. I have experience in C, C++, Javascript, HTML5/CSS3, React, and Python, and I enjoy learning new technologies."),r),i.a.createElement("article",{id:"work",className:("work"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"Where I've Worked"),i.a.createElement("h4",null,"Software Engineer @ Ultra Electronics"),"Nov. 2019 - Present",i.a.createElement("ul",null,i.a.createElement("li",null,"Responsible for the design, modification, implementation, and integration of software programs to meet the requirements and constraints of the customer scope of work"),i.a.createElement("li",null,"Install, integrate, and test virtualized hardware and software components within the company’s products")),i.a.createElement("h4",null,"Web Developer @ OroSolutions, LLC"),"Mar 2019 - Present",i.a.createElement("ul",null,i.a.createElement("li",null,"Continuously improve and develop web applications to assist the accounting team in preparation and delivery of web-based financial statements"),i.a.createElement("li",null,"Enhance the company’s automated reporting platform by improving report generation controls using a variety of APIs")),i.a.createElement("h4",null,"Lead Engineer @ Midas Green Tech"),"Jan 2018 - Dec 2018",i.a.createElement("ul",null,i.a.createElement("li",null,"Led a diverse team in the design of immersion cooling and supporting systems"),i.a.createElement("li",null,"Responsible for the final specifications, tolerance analysis, and design of all company products"),i.a.createElement("li",null,"Created Python scripts to read and parse data to calculate ROI for different cryptocurrencies")),r),i.a.createElement("article",{id:"about",className:("about"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"Projects"),i.a.createElement("h4",null,"Schedule-It"),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,"Scheduling web app supporting user authentication made using Django, React, and SQLite"),i.a.createElement("br",null),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/demersaj/schedule-it",target:"_blank",className:"icon fa-github"},i.a.createElement("span",{className:"label"},"Github")))),i.a.createElement("h4",null,"Build-a-Burger"),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,"Dynamic burger building app created using React/Redux, Axios, Webpack, and Firebase"),i.a.createElement("li",null,i.a.createElement("a",{href:"https://build-a-burger-399bc.firebaseapp.com/",target:"_blank",className:"icon fa-external-link"},i.a.createElement("span",{className:"label"},"Live Version"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/demersaj/build-a-burger",target:"_blank",className:"icon fa-github"},i.a.createElement("span",{className:"label"},"Github")))),i.a.createElement("h4",null,"Small Shell"),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,"Mini shell in C to demonstrate knowledge of Linux process management, signals, and I/O processing"),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/demersaj/CS344/tree/master/Program3",target:"_blank",className:"icon fa-github"},i.a.createElement("span",{className:"label"},"Github")))),r),i.a.createElement("article",{id:"contact",className:("contact"===this.props.article?"active":"")+" "+(this.props.articleTimeout?"timeout":""),style:{display:"none"}},i.a.createElement("h2",{className:"major"},"Contact"),i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{className:"field half first"},i.a.createElement("label",{htmlFor:"name"},"Name"),i.a.createElement("input",{type:"text",name:"name",id:"name",value:a,onChange:this.onChange})),i.a.createElement("div",{className:"field half"},i.a.createElement("label",{htmlFor:"email"},"Email"),i.a.createElement("input",{type:"text",name:"email",id:"email",value:n,onChange:this.onChange})),i.a.createElement("div",{className:"field"},i.a.createElement("label",{htmlFor:"message"},"Message"),i.a.createElement("textarea",{name:"message",id:"message",rows:"4",value:l,onChange:this.onChange})),i.a.createElement("ul",{className:"actions"},i.a.createElement("li",null,i.a.createElement("input",{type:"submit",value:"Send Message",className:"special",onClick:this.props.onCloseArticle})),i.a.createElement("li",null,i.a.createElement("input",{type:"reset",value:"Reset",onClick:this.clearForm})))),i.a.createElement("ul",{className:"icons"},i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.linkedin.com/in/andrew-demers/",target:"_blank",className:"icon fa-linkedin"},i.a.createElement("span",{className:"label"},"Twitter"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://github.com/demersaj",target:"_blank",className:"icon fa-github"},i.a.createElement("span",{className:"label"},"Github"))),i.a.createElement("li",null,i.a.createElement("a",{href:"mailto: andrew.demers91@gmail.com",target:"_blank",className:"icon fa-envelope"},i.a.createElement("span",{className:"label"},"Email"))),i.a.createElement("li",null,i.a.createElement("a",{href:"https://www.instagram.com/druskeyy/",target:"_blank",className:"icon fa-instagram"},i.a.createElement("span",{className:"label"},"Instagram")))),r))},n}(n.Component),u=function(e){return i.a.createElement("footer",{id:"footer",style:e.timeout?{display:"none"}:{}},i.a.createElement("p",{className:"copyright"},"Built with: ♥ & ",i.a.createElement("a",{href:"https://www.gatsbyjs.org/"},"Gatsby.js")))};function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var d=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={isArticleVisible:!1,timeout:!1,articleTimeout:!1,article:"",loading:"is-loading"},a.handleOpenArticle=a.handleOpenArticle.bind(p(a)),a.handleCloseArticle=a.handleCloseArticle.bind(p(a)),a.setWrapperRef=a.setWrapperRef.bind(p(a)),a.handleClickOutside=a.handleClickOutside.bind(p(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=n.prototype;return s.componentDidMount=function(){var e=this;this.timeoutId=setTimeout((function(){e.setState({loading:""})}),100),document.addEventListener("mousedown",this.handleClickOutside)},s.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId),document.removeEventListener("mousedown",this.handleClickOutside)},s.setWrapperRef=function(e){this.wrapperRef=e},s.handleOpenArticle=function(e){var t=this;this.setState({isArticleVisible:!this.state.isArticleVisible,article:e}),setTimeout((function(){t.setState({timeout:!t.state.timeout})}),325),setTimeout((function(){t.setState({articleTimeout:!t.state.articleTimeout})}),350)},s.handleCloseArticle=function(){var e=this;this.setState({articleTimeout:!this.state.articleTimeout}),setTimeout((function(){e.setState({timeout:!e.state.timeout})}),325),setTimeout((function(){e.setState({isArticleVisible:!e.state.isArticleVisible,article:""})}),350)},s.handleClickOutside=function(e){this.wrapperRef&&!this.wrapperRef.contains(e.target)&&this.state.isArticleVisible&&this.handleCloseArticle()},s.render=function(){return i.a.createElement(l.a,{location:this.props.location},i.a.createElement("div",{className:"body "+this.state.loading+" "+(this.state.isArticleVisible?"is-article-visible":"")},i.a.createElement("div",{id:"wrapper"},i.a.createElement(r,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),i.a.createElement(m,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),i.a.createElement(u,{timeout:this.state.timeout})),i.a.createElement("div",{id:"bg"})))},n}(i.a.Component);t.default=d},RYzB:function(e,t,a){e.exports=a.p+"static/pic01-1108e1d998dfab5b361fea97a3150227.jpg"},USkh:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(){}return e.clearAll=function(e){e.classList.remove(this.PROGRESS),e.classList.remove(this.DONE),e.classList.remove(this.ERROR)},e.progressState=function(e){this.clearAll(e),e.classList.add(this.PROGRESS)},e.successState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.DONE)},e.errorState=function(e){e.classList.remove(this.PROGRESS),e.classList.add(this.ERROR)},e.PROGRESS="emailjs-sending",e.DONE="emailjs-success",e.ERROR="emailjs-error",e}();t.UI=n}}]);
//# sourceMappingURL=component---src-pages-index-js-fe10792bd9a21bd72e37.js.map