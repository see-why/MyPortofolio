const projectCards = [
  {
    id: 'desktop-project-1',
    project_id: -1,
    name: 'Comic Con',
    description: 'A website with About and Home pages, detailing information about a meet-up for comic lovers.',
    image_top: {
      url: 'Images/comicCon.PNG',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Javascript'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'desktop-button-project-1',
      text: 'See this project and more...',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: false,
    IsDesktop: true,
    linktolive: 'https://see-why.github.io/ComicCon/',
    linktosource: 'https://github.com/see-why/ComicCon',
  },
  {
    id: 'desktop-project-2',
    project_id: 0,
    name: 'To-do List',
    description: 'A simple HTML list of To Do tasks, styled with Css and added dynamically using Javascript. Webpack is used in bundling the respective components.',
    image_top: {
      url: 'Images/todoList.PNG',
      alt: '',
    },
    technologies: ['HTML/CSS', 'JavaScript', '+1'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'desktop-button-project-2',
      text: 'See this project and more...',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: true,
    IsDesktop: true,
    linktolive: 'https://see-why.github.io/To-do_List/dist/',
    linktosource: 'https://github.com/see-why/To-do_List',
  },
  {
    id: 'mobile-project-1',
    project_id: 1,
    name: 'Comic Con',
    description: 'A website with About and Home pages, detailing information about a meet-up for comic lovers.',
    image_top: {
      url: 'Images/comicCon.PNG',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Javascript'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'mobile-button-project-1',
      text: 'See this project',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: false,
    IsDesktop: false,
    linktolive: 'https://see-why.github.io/ComicCon/',
    linktosource: 'https://github.com/see-why/ComicCon',
  },
  {
    id: 'mobile-project-2',
    project_id: 2,
    name: 'To-do List',
    description: 'A simple HTML list of To Do tasks, styled with Css and added dynamically using Javascript. Webpack is used in bundling the respective components.',
    image_top: {
      url: 'Images/todoList.PNG',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Javascript', 'LocalStorage'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'mobile-button-project-2',
      text: 'See this project',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: false,
    IsDesktop: false,
    linktolive: 'https://see-why.github.io/To-do_List/dist/',
    linktosource: 'https://github.com/see-why/To-do_List',
  },
  {
    id: 'mobile-project-3',
    project_id: 3,
    name: 'Awesome Books',
    description: 'A single page app with 3 pages, View all books, add books and the contact page, you can add or delete books.',
    image_top: {
      url: 'Images/awesomeBooks.PNG',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Javascript', 'LocalStorage'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'mobile-button-project-3',
      text: 'See this project',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: false,
    IsDesktop: false,
    linktolive: 'https://kdlamini.github.io/awesome-books-javascript/',
    linktosource: 'https://github.com/KDlamini/awesome-books-javascript',
  },
  {
    id: 'mobile-project-4',
    project_id: 4,
    name: 'Final-Space',
    description: 'A mobile Web Application Hub for getting cool details on characters from the Adult swim show Final space.',
    image_top: {
      url: 'Images/finalspace.PNG',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Javascript', 'React-Redux'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'mobile-button-project-4',
      text: 'See this project',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: false,
    IsDesktop: false,
    linktolive: 'https://finalspacehub.netlify.app/',
    linktosource: 'https://github.com/see-why/Final-Space-React-Redux',
  },
  {
    id: 'mobile-project-5',
    project_id: 5,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image_top: {
      url: 'Images/project-image-5.jpg',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'mobile-button-project-5',
      text: 'See this project',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: false,
    IsDesktop: false,
    linktolive: 'https://see-why.github.io/MyPortofolio/',
    linktosource: 'https://github.com/see-why/MyPortofolio',
  },
  {
    id: 'mobile-project-6',
    project_id: 6,
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image_top: {
      url: 'Images/project-image-6.jpg',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'mobile-button-project-6',
      text: 'See this project',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: false,
    IsDesktop: false,
    linktolive: 'https://see-why.github.io/MyPortofolio/',
    linktosource: 'https://github.com/see-why/MyPortofolio',
  },
];

function loadNextProjects(seed, id) {
  let projectID = parseInt(id, 10);

  if (seed === -1) {
    projectID = projectID - 1 < 1 ? 4 : projectID - 1;
  } else {
    projectID = projectID + 1 > 4 ? 1 : projectID + 1;
  }

  // eslint-disable-next-line no-use-before-define
  showPopUp(projectID, id);
}

function closePopUp() {
  const popup = document.getElementById('mobile-pop-up');
  popup.style.display = 'none';
}

function showPopUp(seed, id) {
  const parentDivContainer = document.getElementById('mobile-pop-up');
  parentDivContainer.innerHTML = '';

  const buttonId = id;

  const project = seed === 10 || null ? projectCards.find((obj) => obj.button.id === buttonId)
    : projectCards.find((obj) => obj.project_id === seed);

  const parentDiv = document.createElement('div');
  parentDiv.className = 'desktop-container d-flex';
  parentDiv.id = 'mobile-container';

  const aPrevTag = document.createElement('span');
  aPrevTag.innerHTML = '<';
  aPrevTag.id = project?.project_id;
  aPrevTag.className = 'prev';
  aPrevTag.addEventListener('click', () => loadNextProjects(-1, aPrevTag.id));

  parentDivContainer.appendChild(aPrevTag);

  const header = document.createElement('header');
  header.className = 'd-flex';

  const headerDiv = document.createElement('div');
  headerDiv.className = 'mobile-pop-up-cross-img-div d-flex';

  const headerDivImage = document.createElement('img');
  headerDivImage.src = 'svg/popup_cross.svg';
  headerDivImage.tabIndex = '0';
  headerDivImage.alt = 'close pop-up';
  headerDivImage.className = 'popup-cross-img';
  headerDivImage.id = 'cancel-img-popup';
  headerDivImage.addEventListener('click', closePopUp);

  const h2 = document.createElement('h2');
  h2.className = 'mobile-pop-up-h2';
  h2.innerText = project?.name;

  headerDiv.appendChild(headerDivImage);
  header.appendChild(headerDiv);
  header.appendChild(h2);

  parentDiv.appendChild(header);

  const listDiv = document.createElement('div');
  listDiv.className = 'mobile-popup-div';

  const flex = 'd-flex';

  const listDivUl = document.createElement('ul');
  listDivUl.className = `margin-top ${flex}`;

  project?.technologies.forEach((each) => {
    const li = document.createElement('li');
    li.innerText = each;
    li.className = flex;
    listDivUl.appendChild(li);
  });

  listDiv.appendChild(listDivUl);

  parentDiv.appendChild(listDiv);

  const slideDivContainer = document.createElement('div');
  slideDivContainer.className = 'mobile-popup-slide-container';

  const slideDiv = document.createElement('div');
  slideDiv.className = 'mobile-popup-slide';

  const slideDivImage = document.createElement('img');
  slideDivImage.src = project.image_top.url;
  slideDivImage.alt = '';
  slideDivImage.className = 'slide';

  slideDiv.appendChild(slideDivImage);
  slideDivContainer.appendChild(slideDiv);

  parentDiv.appendChild(slideDivContainer);

  const pDiv = document.createElement('div');
  pDiv.className = 'holder';
  const p = document.createElement('p');
  p.innerHTML = project.description;
  pDiv.appendChild(p);

  parentDiv.appendChild(pDiv);

  const buttonDiv = document.createElement('div');
  buttonDiv.className = 'mobile-popup-button-div d-flex';

  const firstA = document.createElement('a');
  firstA.className = 'mobile-popup-button first d-flex';
  firstA.innerText = 'See live';
  firstA.target = '_blank';
  firstA.href = project.linktolive;

  const firstAImage = document.createElement('img');
  firstAImage.className = 'display-first';
  firstAImage.src = 'svg/see-live-black.svg';
  firstAImage.alt = '';

  firstA.appendChild(firstAImage);
  buttonDiv.appendChild(firstA);

  const lastA = document.createElement('a');
  lastA.className = 'mobile-popup-button last d-flex';
  lastA.innerText = 'See source';
  lastA.target = firstA.target;
  lastA.href = project.linktosource;

  const lastAImage = document.createElement('img');
  lastAImage.className = 'display-first';
  lastAImage.src = 'svg/Github-source-black.svg';
  lastAImage.alt = '';

  lastA.appendChild(lastAImage);
  buttonDiv.appendChild(lastA);

  parentDiv.appendChild(buttonDiv);

  if (project?.IsDesktop === true) {
    const imageDiv = document.createElement('div');
    imageDiv.className = 'mobile-popup-image-div d-flex';

    const projectPreviousImage = document.createElement('img');
    projectPreviousImage.src = 'svg/project-previous.svg';
    projectPreviousImage.tabIndex = '0';
    projectPreviousImage.alt = 'previous project';

    const projectNextImage = document.createElement('img');
    projectNextImage.src = 'svg/next-project.svg';
    projectNextImage.tabIndex = '0';
    projectNextImage.alt = 'next project';

    imageDiv.appendChild(projectPreviousImage);
    imageDiv.appendChild(projectNextImage);

    parentDiv.appendChild(imageDiv);
  }

  const aNextTag = document.createElement('span');
  aNextTag.innerHTML = '>';
  aNextTag.id = project.project_id;
  aNextTag.className = 'next';
  aNextTag.addEventListener('click', () => loadNextProjects(1, aNextTag.id));

  parentDivContainer.appendChild(parentDiv);

  parentDivContainer.appendChild(aNextTag);

  parentDivContainer.style.display = 'flex';
}

function loadProjects() {
  projectCards.forEach((each) => {
    const parentDiv = document.getElementById(each.id);

    const figure = document.createElement('figure');

    if (each.id !== 'desktop-project-1') {
      figure.className = 'wrapper';
    }

    const imagetop = document.createElement('img');

    imagetop.src = each.image_top.url;
    imagetop.alt = each.image_top.url;
    imagetop.className = 'blockImage';

    figure.appendChild(imagetop);

    const gridDiv = document.createElement('div');
    gridDiv.className = 'grid-container';

    if (each.id === 'desktop-project-2') {
      gridDiv.className = 'grid-container aside';
    }

    const h3 = document.createElement('h3');
    h3.innerText = each.name;

    gridDiv.appendChild(h3);

    const innerDiv = document.createElement('div');
    innerDiv.className = 'code-buttons';

    if (each.id === 'desktop-project-1') {
      innerDiv.className = 'code-buttons d-flex';
    }
    const flex = 'd-flex';
    const ul = document.createElement('ul');
    ul.className = flex;

    each.technologies.forEach((each) => {
      const li = document.createElement('li');
      li.innerText = each;
      li.className = flex;
      ul.appendChild(li);
    });

    innerDiv.appendChild(ul);
    gridDiv.appendChild(innerDiv);

    const button = document.createElement('button');
    button.innerText = each.button.text;
    button.className = 'arrow-click d-flex';
    button.id = each.button.id;
    button.addEventListener('click', () => showPopUp(10, button.id));

    const buttonImage = document.createElement('img');
    buttonImage.className = 'display-first';
    buttonImage.src = each.button.image.url;
    buttonImage.alt = each.button.image.alt;

    button.appendChild(buttonImage);

    gridDiv.appendChild(button);

    parentDiv.appendChild(figure);
    parentDiv.appendChild(gridDiv);

    if (each.hasImageBottom) {
      const imagebottom = document.createElement('img');
      imagebottom.src = each.image_bottom.url;
      imagebottom.alt = each.image_bottom.alt;

      const figureBottom = document.createElement('figure');
      figureBottom.className = 'grid-container-bottom';
      figureBottom.appendChild(imagebottom);

      parentDiv.appendChild(figureBottom);
    }
  });
}

const section = document.getElementById('');

if (section !== null) {
  section.addEventListener('click', loadProjects);
}

if (localStorage.getItem('formData') === null) {
  const formData = {
    name: '',
    email: '',
    message: '',
  };
  const formDatestring = JSON.stringify(formData);
  localStorage.setItem('formData', formDatestring);
}
