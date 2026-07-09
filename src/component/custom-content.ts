export function divTemplate(content?: (HTMLElement | string | DocumentFragment), id?: string, classList?: string | string[]): HTMLElement {
    const container = document.createElement('div');

    if (undefined !== id)
        container.setAttribute('id', id || '');


    if (undefined !== classList && 'string' === typeof classList) {
        container.classList.add(classList as string);
    }
    else if (undefined !== classList) {
        container.classList.add(...classList!);
    }


    if (typeof content === 'string') {
        container.append(document.createRange().createContextualFragment(content as string));
    }
    else {
        container.append(content as HTMLElement);
    }


    return container;
}


export function experienceGrid(): HTMLElement {
    const design = `
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
    `
    const template = divTemplate(design, undefined, 'experience-grid');
    return template;
}

export function scrollForMore(): HTMLElement {
    const design = `
    <span class="scroll-remind"> Scroll for more </span>
    <i class="vr-line"></i>
    `
    const template = divTemplate(design, undefined, 'scroll-for-more');
    return template;
}

export function aboutTemplate(): HTMLElement {
    const design =
        `
    <div class='pad-right'>
    <h1> Greetings !</h1>
    <h3> Welcome to my portfolio page. </h3>
    <h3> <i> Marcus Gajo </i>, a Web Developer aspiring to create better experiences for the common people. </h3>
    <h3> I’m a Front-End Developer with 3 years of experience developing UI/UX for the web.  I also have background in backend development including but not limited to querying, API services, and automation.</h3>
    </div>
    `

    const template = divTemplate(design, undefined, 'center-content');
    template.append(scrollForMore());
    return template;
}

export function expTemplate(): HTMLElement {
    const design =
        `
    <div class='no-pad'>
    <h3> ABOUT </h3>
    <h1> Providing seamless and meaningful experiences</h1>
    <h3> I purposefully specialize on UI/UX that enhance and/or improve the way to navigate the new web with the least compromises.</h3>
    <h3> From my years of working in the industry, I’ve come to value the importance of sending people to their connections appropriately. If the person still gets lost even when given a map, then that map failed it’s job. </h3>
    <h3> My specialty lies to create new and inspiring ways to navigate clients through designing and developing tools of navigation. Keeping the clients on track to their tasks.</h3>
    <h3> I appreciate the liberty of providing the best possible experiences to everyone as much as possible. </h3>
    </div>
    `

    const template = divTemplate(design, undefined, 'center-content');
    return template;
}

export function canBringContent(): HTMLElement {
    const design =
        `
    <div class='no-pad'>
    <h1> What I can bring from my talent to the team </h1>
    <h3> While I still have much to learn from seniors, meaningful contributions to a team is still essential to a successful product. </h3>
    </div>
    `

    const template = divTemplate(design, undefined, 'center-content');
    template.append(experienceGrid());
    return template;
}

export function experienceSection() : HTMLElement{
    const design =
        `
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
    `

    const template = divTemplate(design, undefined, 'center-content');
    return template;
}

export function projectsSection() : HTMLElement{
    const design =
        `
    <div class='no-pad'>
    <h3> Projects </h3>
    <h1> The proof of labor </h1>
    <div class="coming-soon">
    </div>
    </div>
    `

    //add carousel for later;

    const template = divTemplate(design, undefined, 'center-content');
    return template;
}

export function contactSection() : HTMLElement{
    const design =
        `
    <div class='no-pad'>
    <h3> Contact </h3>
    <div class="coming-soon">
    </div>
    </div>
    `

    //add carousel for later;

    const template = divTemplate(design, undefined, 'center-content');
    return template;
}




