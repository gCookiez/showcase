(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e,t,n){let r=document.createElement(`div`);return t!==void 0&&r.setAttribute(`id`,t||``),n!==void 0&&typeof n==`string`?r.classList.add(n):n!==void 0&&r.classList.add(...n),typeof e==`string`?r.append(document.createRange().createContextualFragment(e)):r.append(e),r}function t(){return e(`
    <div class="square-grid-padding">
        <div class="square-item">
            <div class="square-logo-padding"> 
                <div class="square-logo">
                <i class="material-symbols-outlined">
                code
                </i>
                </div>
            </div>
            <div class="desc-padding"> 
                <h3> 
                Strong knowledge of JavaScript and other related libraries
                such as React.js, Node.js,
                jQuery, etc.
                </h3>
            </div>
        </div>
    </div>
    <div class="square-grid-padding">
        <div class="square-item">
            <div class="square-logo-padding"> 
                <div class="square-logo">
                <i class="material-symbols-outlined">
                target
                </i>
                </div>
            </div>
            <div class="desc-padding"> 
                <h3> 
                Focuses on reliability rather than velocity. 
                Values understanding before executing.
                </h3>
            </div>
        </div>
    </div>
    <div class="square-grid-padding">
        <div class="square-item">
            <div class="square-logo-padding"> 
                <div class="square-logo">
                <i class="material-symbols-outlined">
                autorenew
                </i>
                </div>
            </div>
            <div class="desc-padding"> 
                <h3> 
                Ability to adapt to changing of requirements from a moment’s notice.
                </h3>
            </div>
        </div>
    </div>
    `,void 0,`experience-grid`)}function n(){return e(`
    <span class="scroll-remind"> Scroll for more </span>
    <i class="vr-line"></i>
    `,void 0,`scroll-for-more`)}function r(){let t=e(`
    <div class='pad-right'>
    <h1> Greetings !</h1>
    <h3> Welcome to my portfolio page. </h3>
    <h3> <i> Marcus Gajo </i>, a Web Developer aspiring to create better experiences for the common people. </h3>
    <h3> I’m a Front-End Developer with 3 years of experience developing UI/UX for the web.  I also have background in backend development including but not limited to querying, API services, and automation.</h3>
    </div>
    `,void 0,`center-content`);return t.append(n()),t}function i(){return e(`
    <div class='no-pad'>
    <h3> ABOUT </h3>
    <h1> Providing seamless and meaningful experiences</h1>
    <h3> I purposefully specialize on UI/UX that enhance and/or improve the way to navigate the new web with the least compromises.</h3>
    <h3> From my years of working in the industry, I’ve come to value the importance of sending people to their connections appropriately. If the person still gets lost even when given a map, then that map failed it’s job. </h3>
    <h3> My specialty lies to create new and inspiring ways to navigate clients through designing and developing tools of navigation. Keeping the clients on track to their tasks.</h3>
    <h3> I appreciate the liberty of providing the best possible experiences to everyone as much as possible. </h3>
    </div>
    `,void 0,`center-content`)}function a(){let n=e(`
    <div class='no-pad'>
    <h1> What I can bring from my talent to the team </h1>
    <h3> While I still have much to learn from seniors, meaningful contributions to a team is still essential to a successful product. </h3>
    </div>
    `,void 0,`center-content`);return n.append(t()),n}function o(){return e(`
    <div class='no-pad'>
    <h3> Experience </h3>
    <h1> The skills and tools that make it happen </h1>
    <h3 class="further"> My current main focus of tools that help build my creations to reality. Note that I'm not limited to these specialties. Willing to learn new avenues for the sake of growth.</h3>
    <h4 class="category"> Frontend </h4>
    <ul class="skills-buttons">
        <li> HTML </li>
        <li> CSS </li>
        <li> JavaScript </li>
        <li> TypeScript </li>
        <li> React.Js </li>
        <li> Bootstrap </li>
        <li> jQuery </li>
    </ul>
    <h4 class="category"> Backend </h4>
    <ul class="skills-buttons">
        <li> Oracle PL/SQL </li>
        <li> Supabase </li>
        <li> Node.Js </li>
        <li> Express.Js </li>
        <li> REST API </li>
    </ul>
    <h4 class="category"> Other Related Skills </h4>
    <ul class="skills-buttons">
        <li> Python </li>
        <li> Github </li>
        <li> Git </li>
        <li> Adobe Photoshop </li>
        <li> Adobe illustrator </li>
        <li> Affinity Studio </li>
        <li> Figma </li>
    </ul>
    </div>
    `,void 0,`center-content`)}function s(){return e(`
    <div class='no-pad'>
    <h3> Projects </h3>
    <h1> The proof of labor </h1>
    <div class="coming-soon">
    </div>
    </div>
    `,void 0,`center-content`)}function c(){return e(`
    <div class='no-pad'>
    <h3> Contact </h3>
    <div class="coming-soon">
    </div>
    </div>
    `,void 0,`center-content`)}var l=[{name:`about`,href:`about`,display:`About`,content:[r(),i(),a()],height:`300vh`},{name:`exp`,href:`experience`,display:`Experience`,content:[o()]},{name:`proj`,href:`projects`,display:`Projects`,content:[s()]},{name:`contact`,href:`contact`,display:`Contact`,content:[c()]}];function u(e){let t=document.createElement(`div`),n=document.createElement(`h4`);return t.classList.add(`nav-button`),t.setAttribute(`href`,`#${e.href}`),t.addEventListener(`click`,()=>{let t=document.getElementById(e.href);history.pushState(null,``,`#${e.href}`),t?.scrollIntoView({behavior:`smooth`,block:`start`})}),n.innerHTML=e.display,t.append(n),t}function d(){let e=document.createElement(`div`);e.classList.add(`navbar`);for(var t of l){let n=u(t);e.append(n)}return e}function f(){let e=document.createElement(`div`);e.classList.add(`nav-bar-padding`);let t=d();return e.append(t),e}function p(e){let t=document.createElement(`div`);if(t.classList.add(`hero-container`),t.setAttribute(`id`,e.href),t.style.setProperty(`--height`,e.height===void 0?`100vh`:e.height),e.content===`string`)t.append(document.createRange().createContextualFragment(e.content));else{let n=Array.from(e.content);t.append(...n)}return t}function m(){let e=[];for(var t of l)e.push(p(t));return e}var h=[...m()];function g(){let e=document.createElement(`div`);return e.setAttribute(`id`,`main-body`),e.append(...h||null),e}window.addEventListener(`DOMContentLoaded`,()=>{if(window.location.hash){let e=document.querySelector(window.location.hash);e&&(window.scrollTo(0,0),setTimeout(()=>{e.scrollIntoView({behavior:`smooth`,block:`start`})},100))}}),document.querySelector(`#app`)?.append(f(),g());