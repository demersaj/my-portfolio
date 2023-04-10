"use strict";
exports.id = 678;
exports.ids = [678];
exports.modules = {

/***/ 6830:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
__webpack_unused_export__ = __webpack_unused_export__ = exports.lW = __webpack_unused_export__ = void 0;
var EmailJSResponseStatus_1 = __webpack_require__(6848);
__webpack_unused_export__ = ({ enumerable: true, get: function () { return EmailJSResponseStatus_1.EmailJSResponseStatus; } });
var UI_1 = __webpack_require__(378);
var _userID = null;
var _origin = 'https://api.emailjs.com';
function sendPost(url, data, headers) {
    if (headers === void 0) { headers = {}; }
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.addEventListener('load', function (event) {
            var responseStatus = new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target);
            if (responseStatus.status === 200 || responseStatus.text === 'OK') {
                resolve(responseStatus);
            }
            else {
                reject(responseStatus);
            }
        });
        xhr.addEventListener('error', function (event) {
            reject(new EmailJSResponseStatus_1.EmailJSResponseStatus(event.target));
        });
        xhr.open('POST', url, true);
        for (var key in headers) {
            xhr.setRequestHeader(key, headers[key]);
        }
        xhr.send(data);
    });
}
function appendGoogleCaptcha(templatePrams) {
    var element = document && document.getElementById('g-recaptcha-response');
    if (element && element.value) {
        templatePrams['g-recaptcha-response'] = element.value;
    }
    element = null;
    return templatePrams;
}
function fixIdSelector(selector) {
    if (selector[0] !== '#' && selector[0] !== '.') {
        return '#' + selector;
    }
    return selector;
}
/**
 * Initiation
 * @param {string} userID - set the EmailJS user ID
 * @param {string} origin - set the EmailJS origin
 */
function init(userID, origin) {
    _userID = userID;
    _origin = origin || 'https://api.emailjs.com';
}
__webpack_unused_export__ = init;
/**
 * Send a template to the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {Object} templatePrams - the template params, what will be set to the EmailJS template
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function send(serviceID, templateID, templatePrams, userID) {
    var params = {
        lib_version: '2.6.4',
        user_id: userID || _userID,
        service_id: serviceID,
        template_id: templateID,
        template_params: appendGoogleCaptcha(templatePrams)
    };
    return sendPost(_origin + '/api/v1.0/email/send', JSON.stringify(params), {
        'Content-type': 'application/json'
    });
}
exports.lW = send;
/**
 * Send a form the specific EmailJS service
 * @param {string} serviceID - the EmailJS service ID
 * @param {string} templateID - the EmailJS template ID
 * @param {string | HTMLFormElement} form - the form element or selector
 * @param {string} userID - the EmailJS user ID
 * @returns {Promise<EmailJSResponseStatus>}
 */
function sendForm(serviceID, templateID, form, userID) {
    if (typeof form === 'string') {
        form = document.querySelector(fixIdSelector(form));
    }
    if (!form || form.nodeName !== 'FORM') {
        throw 'Expected the HTML form element or the style selector of form';
    }
    UI_1.UI.progressState(form);
    var formData = new FormData(form);
    formData.append('lib_version', '2.6.4');
    formData.append('service_id', serviceID);
    formData.append('template_id', templateID);
    formData.append('user_id', userID || _userID);
    return sendPost(_origin + '/api/v1.0/email/send-form', formData)
        .then(function (response) {
        UI_1.UI.successState(form);
        return response;
    }, function (error) {
        UI_1.UI.errorState(form);
        return Promise.reject(error);
    });
}
__webpack_unused_export__ = sendForm;
__webpack_unused_export__ = {
    init: init,
    send: send,
    sendForm: sendForm
};


/***/ }),

/***/ 6848:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmailJSResponseStatus = void 0;
var EmailJSResponseStatus = /** @class */ (function () {
    function EmailJSResponseStatus(httpResponse) {
        this.status = httpResponse.status;
        this.text = httpResponse.responseText;
    }
    return EmailJSResponseStatus;
}());
exports.EmailJSResponseStatus = EmailJSResponseStatus;


/***/ }),

/***/ 378:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UI = void 0;
var UI = /** @class */ (function () {
    function UI() {
    }
    UI.clearAll = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.remove(this.DONE);
        form.classList.remove(this.ERROR);
    };
    UI.progressState = function (form) {
        this.clearAll(form);
        form.classList.add(this.PROGRESS);
    };
    UI.successState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.DONE);
    };
    UI.errorState = function (form) {
        form.classList.remove(this.PROGRESS);
        form.classList.add(this.ERROR);
    };
    UI.PROGRESS = 'emailjs-sending';
    UI.DONE = 'emailjs-success';
    UI.ERROR = 'emailjs-error';
    return UI;
}());
exports.UI = UI;


/***/ }),

/***/ 8678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5458);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5697);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5482);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4718);
const Layout=({children,location})=>{let content;if(location&&location.pathname==='/'){content=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,children);}else{content=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{id:"wrapper",className:"page"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",null,children));}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_2__.StaticQuery,{query:"3649515864",render:data=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"],{title:data.site.siteMetadata.title,meta:[{name:'portfolio',content:'portfolio'}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html",{lang:"en"})),content)});};Layout.propTypes={children:(prop_types__WEBPACK_IMPORTED_MODULE_3___default().node.isRequired)};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ }),

/***/ 6307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/Users/andrew.demers/Documents/dev/my-portfolio/node_modules/react/index.js"
var index_js_ = __webpack_require__(5458);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/layout.js
var layout = __webpack_require__(8678);
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(5697);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// CONCATENATED MODULE: ./src/components/Header.js
const Header=props=>/*#__PURE__*/index_js_default().createElement("header",{id:"header",style:props.timeout?{display:'none'}:{}},/*#__PURE__*/index_js_default().createElement("div",{className:"logo"},/*#__PURE__*/index_js_default().createElement("span",{className:"icon fa-diamond"})),/*#__PURE__*/index_js_default().createElement("div",{className:"content"},/*#__PURE__*/index_js_default().createElement("div",{className:"inner"},/*#__PURE__*/index_js_default().createElement("p",null,"Hi, my name is:"),/*#__PURE__*/index_js_default().createElement("h1",null,"Andrew Demers"),/*#__PURE__*/index_js_default().createElement("p",null,"I am a product manager living in Austin, TX."),/*#__PURE__*/index_js_default().createElement("p",null,"Welcome to my page."))),/*#__PURE__*/index_js_default().createElement("nav",null,/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"javascript:;",onClick:()=>{props.onOpenArticle('intro');}},"Intro")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"javascript:;",onClick:()=>{props.onOpenArticle('work');}},"Work")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"javascript:;",onClick:()=>{props.onOpenArticle('about');}},"Projects")),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"javascript:;",onClick:()=>{props.onOpenArticle('contact');}},"Contact")))));Header.propTypes={onOpenArticle:(prop_types_default()).func,timeout:(prop_types_default()).bool};/* harmony default export */ const components_Header = (Header);
// EXTERNAL MODULE: ./node_modules/emailjs-com/source/index.js
var source = __webpack_require__(6830);
;// CONCATENATED MODULE: ./src/images/pic01.jpg
/* harmony default export */ const pic01 = ("/static/pic01-28bb50e53341beeee787fe08939ef04b.jpg");
;// CONCATENATED MODULE: ./src/components/Main.js
class Main extends index_js_.Component{constructor(...args){super(...args);this.state={name:'',email:'',message:'',redirect:false};this.onChange=event=>{this.setState({[event.target.name]:event.target.value});};this.clearForm=()=>{this.setState({name:'',email:'',message:''});};this.handleSubmit=event=>{event.preventDefault();// preserve initial state
this.baseState=this.state;const formParams={fromName:this.state.name,fromEmail:this.state.email,toEmail:'andrew.demers91@gmail.com',message:this.state.message};source/* send */.lW('mailgun','my_portfolio_template',formParams,'user_uABJMRa0kF9MP0dQp0ik9').then(res=>{console.log('Success');}).catch(err=>console.error('Failed to send feedback. Error: ',err));// reset state
this.clearForm();};}render(){const{name,email,message}=this.state;let close=/*#__PURE__*/index_js_default().createElement("div",{className:"close",onClick:()=>{this.props.onCloseArticle();}});return/*#__PURE__*/index_js_default().createElement("div",{ref:this.props.setWrapperRef,id:"main",style:this.props.timeout?{display:'flex'}:{display:'none'}},/*#__PURE__*/index_js_default().createElement("article",{id:"intro",className:`${this.props.article==='intro'?'active':''} ${this.props.articleTimeout?'timeout':''}`,style:{display:'none'}},/*#__PURE__*/index_js_default().createElement("h2",{className:"major"},"Intro"),/*#__PURE__*/index_js_default().createElement("span",{className:"image main"},/*#__PURE__*/index_js_default().createElement("img",{src:pic01,alt:""})),/*#__PURE__*/index_js_default().createElement("p",null,"I am a product manager with a software and mechanical engineering background. I have a B.S. in Mechanical Engineering and in Computer Science, as well as an MBA with a focus in Data Analytics. I have worked in the technology, defense, financial, and fabrication industries in a variety of roles."),/*#__PURE__*/index_js_default().createElement("p",null,"I have experience in C++, Javascript, React, and Python, and I love learning new technologies. I enjoy using data-driven methods to create the best products possible."),close),/*#__PURE__*/index_js_default().createElement("article",{id:"work",className:`${this.props.article==='work'?'active':''} ${this.props.articleTimeout?'timeout':''}`,style:{display:'none'}},/*#__PURE__*/index_js_default().createElement("h2",{className:"major"},"Where I've Worked"),/*#__PURE__*/index_js_default().createElement("h4",null,"Associate AI Product Manager @ FlashParking"),"July 2022 - Present",/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null," Manage bottlenecks, provide escalation management, anticipate and make trade-offs, and maximize business benefit while building great customer experiences for the Flash computer vision program "),/*#__PURE__*/index_js_default().createElement("li",null," Work with key internal stakeholders including Analytics, Design, Engineering, Sales, Operations, and Customer Success to develop accretive value features and products")),/*#__PURE__*/index_js_default().createElement("h4",null,"Project Manager  @ FlashParking"),"Sept. 2020 - July 2022",/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null," Current focus on new construction and special software integration projects  "),/*#__PURE__*/index_js_default().createElement("li",null," Work with development, engineering, and software to complete unique, one-off projects "),/*#__PURE__*/index_js_default().createElement("li",null," Create process improvement tools, including a dynamic implementation timeline that can be adapted to numerous types of project and deliverable requirements")),/*#__PURE__*/index_js_default().createElement("h4",null,"Software Engineer @ Ultra Electronics"),"Nov 2019 - July 2021",/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null,"Responsible for the design, modification, implementation, and integration of software programs to meet the requirements and constraints of the customer scope of work"),/*#__PURE__*/index_js_default().createElement("li",null,"Install, integrate, and test virtualized hardware and software components within the company\u2019s products")),/*#__PURE__*/index_js_default().createElement("h4",null,"Web Developer @ OroSolutions, LLC"),"Mar 2019 - Nov 2019",/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null,"Continuously improve and develop web applications to assist the accounting team in preparation and delivery of web-based financial statements"),/*#__PURE__*/index_js_default().createElement("li",null,"Enhance the company\u2019s automated reporting platform by improving report generation controls using a variety of APIs")),/*#__PURE__*/index_js_default().createElement("h4",null,"Lead Engineer @ Midas Green Tech"),"Jan 2018 - Dec 2018",/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement("li",null,"Led a diverse team in the design of immersion cooling and supporting systems"),/*#__PURE__*/index_js_default().createElement("li",null,"Responsible for the final specifications, tolerance analysis, and design of all company products"),/*#__PURE__*/index_js_default().createElement("li",null,"Created Python scripts to read and parse data to calculate ROI for different cryptocurrencies")),close),/*#__PURE__*/index_js_default().createElement("article",{id:"about",className:`${this.props.article==='about'?'active':''} ${this.props.articleTimeout?'timeout':''}`,style:{display:'none'}},/*#__PURE__*/index_js_default().createElement("h2",{className:"major"},"Projects"),/*#__PURE__*/index_js_default().createElement("h4",null,"Schedule-It"),/*#__PURE__*/index_js_default().createElement("ul",{className:"icons"},/*#__PURE__*/index_js_default().createElement("li",null,"Scheduling web app supporting user authentication made using Django, React, and SQLite"),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/demersaj/schedule-it",target:"_blank",className:"icon fa-github"},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},"Github")))),/*#__PURE__*/index_js_default().createElement("h4",null,"CS493 Final Project"),/*#__PURE__*/index_js_default().createElement("ul",{className:"icons"},/*#__PURE__*/index_js_default().createElement("li",null,"RESTful API using user authentication made using Node.js, Docker, Google Cloud, and Auth 0"),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/demersaj/cs493-final-project",target:"_blank",className:"icon fa-github"},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},"Github")))),/*#__PURE__*/index_js_default().createElement("h4",null,"Build-a-Burger"),/*#__PURE__*/index_js_default().createElement("ul",{className:"icons"},/*#__PURE__*/index_js_default().createElement("li",null,"Dynamic burger building app created using React/Redux, Axios, Webpack, and Firebase"),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://build-a-burger-399bc.firebaseapp.com/",target:"_blank",className:"icon fa-external-link"},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},"Live Version"))),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/demersaj/build-a-burger",target:"_blank",className:"icon fa-github"},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},"Github")))),/*#__PURE__*/index_js_default().createElement("h4",null,"Cyrptocurrency Price Tracker"),/*#__PURE__*/index_js_default().createElement("ul",{className:"icons"},/*#__PURE__*/index_js_default().createElement("li",null,"Live alerts of cryptocurrency prices using Python for desktop notifications"),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/demersaj/Crypto-alert",target:"_blank",className:"icon fa-github"},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},"Github")))),close),/*#__PURE__*/index_js_default().createElement("article",{id:"contact",className:`${this.props.article==='contact'?'active':''} ${this.props.articleTimeout?'timeout':''}`,style:{display:'none'}},/*#__PURE__*/index_js_default().createElement("h2",{className:"major"},"Contact"),/*#__PURE__*/index_js_default().createElement("form",{onSubmit:this.handleSubmit},/*#__PURE__*/index_js_default().createElement("div",{className:"field half first"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"name"},"Name"),/*#__PURE__*/index_js_default().createElement("input",{type:"text",name:"name",id:"name",value:name,onChange:this.onChange})),/*#__PURE__*/index_js_default().createElement("div",{className:"field half"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"email"},"Email"),/*#__PURE__*/index_js_default().createElement("input",{type:"text",name:"email",id:"email",value:email,onChange:this.onChange})),/*#__PURE__*/index_js_default().createElement("div",{className:"field"},/*#__PURE__*/index_js_default().createElement("label",{htmlFor:"message"},"Message"),/*#__PURE__*/index_js_default().createElement("textarea",{name:"message",id:"message",rows:"4",value:message,onChange:this.onChange})),/*#__PURE__*/index_js_default().createElement("ul",{className:"actions"},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("input",{type:"submit",value:"Send Message",className:"special",onClick:this.props.onCloseArticle})),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("input",{type:"reset",value:"Reset",onClick:this.clearForm})))),/*#__PURE__*/index_js_default().createElement("ul",{className:"icons"},/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.linkedin.com/in/andrew-demers/",target:"_blank",className:"icon fa-linkedin"},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},"Twitter"))),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/demersaj",target:"_blank",className:"icon fa-github"},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},"Github"))),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"mailto: andrew.demers91@gmail.com",target:"_blank",className:"icon fa-envelope"},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},"Email"))),/*#__PURE__*/index_js_default().createElement("li",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.instagram.com/druskeyy/",target:"_blank",className:"icon fa-instagram"},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},"Instagram")))),close));}}Main.propTypes={route:(prop_types_default()).object,article:(prop_types_default()).string,articleTimeout:(prop_types_default()).bool,onCloseArticle:(prop_types_default()).func,timeout:(prop_types_default()).bool,setWrapperRef:(prop_types_default()).func.isRequired};/* harmony default export */ const components_Main = (Main);
;// CONCATENATED MODULE: ./src/components/Footer.js
const Footer=props=>/*#__PURE__*/index_js_default().createElement("footer",{id:"footer",style:props.timeout?{display:'none'}:{}},/*#__PURE__*/index_js_default().createElement("p",{className:"copyright"},"Built with: \u2665 & \u2615"));Footer.propTypes={timeout:(prop_types_default()).bool};/* harmony default export */ const components_Footer = (Footer);
;// CONCATENATED MODULE: ./src/pages/index.js
class IndexPage extends (index_js_default()).Component{constructor(props){super(props);this.state={isArticleVisible:false,timeout:false,articleTimeout:false,article:'',loading:'is-loading'};this.handleOpenArticle=this.handleOpenArticle.bind(this);this.handleCloseArticle=this.handleCloseArticle.bind(this);this.setWrapperRef=this.setWrapperRef.bind(this);this.handleClickOutside=this.handleClickOutside.bind(this);}componentDidMount(){this.timeoutId=setTimeout(()=>{this.setState({loading:''});},100);document.addEventListener('mousedown',this.handleClickOutside);}componentWillUnmount(){if(this.timeoutId){clearTimeout(this.timeoutId);}document.removeEventListener('mousedown',this.handleClickOutside);}setWrapperRef(node){this.wrapperRef=node;}handleOpenArticle(article){this.setState({isArticleVisible:!this.state.isArticleVisible,article});setTimeout(()=>{this.setState({timeout:!this.state.timeout});},325);setTimeout(()=>{this.setState({articleTimeout:!this.state.articleTimeout});},350);}handleCloseArticle(){this.setState({articleTimeout:!this.state.articleTimeout});setTimeout(()=>{this.setState({timeout:!this.state.timeout});},325);setTimeout(()=>{this.setState({isArticleVisible:!this.state.isArticleVisible,article:''});},350);}handleClickOutside(event){if(this.wrapperRef&&!this.wrapperRef.contains(event.target)){if(this.state.isArticleVisible){this.handleCloseArticle();}}}render(){return/*#__PURE__*/index_js_default().createElement(layout/* default */.Z,{location:this.props.location},/*#__PURE__*/index_js_default().createElement("div",{className:`body ${this.state.loading} ${this.state.isArticleVisible?'is-article-visible':''}`},/*#__PURE__*/index_js_default().createElement("div",{id:"wrapper"},/*#__PURE__*/index_js_default().createElement(components_Header,{onOpenArticle:this.handleOpenArticle,timeout:this.state.timeout}),/*#__PURE__*/index_js_default().createElement(components_Main,{isArticleVisible:this.state.isArticleVisible,timeout:this.state.timeout,articleTimeout:this.state.articleTimeout,article:this.state.article,onCloseArticle:this.handleCloseArticle,setWrapperRef:this.setWrapperRef}),/*#__PURE__*/index_js_default().createElement(components_Footer,{timeout:this.state.timeout})),/*#__PURE__*/index_js_default().createElement("div",{id:"bg"})));}}/* harmony default export */ const pages = (IndexPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map