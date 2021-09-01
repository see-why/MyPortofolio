const projectCards = [
  {
    id: 'desktop-project-1',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image_top: {
      url: 'Images/project-image-1.jpg',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'desktop-button-project-1',
      text: 'See this project',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: false,
    IsDesktop: true,
    linktolive: 'https://see-why.github.io/MyPortofolio/',
    linktosource: 'https://github.com/see-why/MyPortofolio',
  },
  {
    id: 'desktop-project-2',
    name: 'Project name goes...',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image_top: {
      url: 'Images/project-image-2.jpg',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Ruby on Rails', '+1'],
    image_bottom: {
      url: '#',
      alt: '',
    },
    button: {
      id: 'desktop-button-project-2',
      text: 'See this project',
      image: {
        url: 'svg/ic_arrowright.svg',
        alt: '',
      },
    },
    hasImageBottom: true,
    IsDesktop: true,
    linktolive: 'https://see-why.github.io/MyPortofolio/',
    linktosource: 'https://github.com/see-why/MyPortofolio',
  },
  {
    id: 'mobile-project-1',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image_top: {
      url: 'Images/project-image-1.jpg',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
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
    linktolive: 'https://see-why.github.io/MyPortofolio/',
    linktosource: 'https://github.com/see-why/MyPortofolio',
  },
  {
    id: 'mobile-project-2',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image_top: {
      url: 'Images/project-image-2.jpg',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
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
    linktolive: 'https://see-why.github.io/MyPortofolio/',
    linktosource: 'https://github.com/see-why/MyPortofolio',
  },
  {
    id: 'mobile-project-3',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image_top: {
      url: 'Images/project-image-3.jpg',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
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
    linktolive: 'https://see-why.github.io/MyPortofolio/',
    linktosource: 'https://github.com/see-why/MyPortofolio',
  },
  {
    id: 'mobile-project-4',
    name: 'Project name goes here',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image_top: {
      url: 'Images/project-image-4.jpg',
      alt: '',
    },
    technologies: ['HTML/CSS', 'Ruby on Rails', 'Javascript'],
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
    linktolive: 'https://see-why.github.io/MyPortofolio/',
    linktosource: 'https://github.com/see-why/MyPortofolio',
  },
  {
    id: 'mobile-project-5',
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

function closePopUp() {
  const popup = document.getElementById('mobile-pop-up');
  popup.style.display = 'none';
}

function showPopUp() {
  const parentDivContainer = document.getElementById('mobile-pop-up');
  parentDivContainer.innerHTML = '';

  if (parentDivContainer.style.display === 'flex') {
    parentDivContainer.style.display = 'none';
    return;
  }

  const buttonId = this.id;
  const project = projectCards.find((obj) => obj.button.id === buttonId);

  const parentDiv = document.createElement('div');
  parentDiv.className = 'desktop-container d-flex';
  parentDiv.id = 'mobile-container';

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
  h2.innerText = project.name;

  headerDiv.appendChild(headerDivImage);
  header.appendChild(headerDiv);
  header.appendChild(h2);

  parentDiv.appendChild(header);

  const listDiv = document.createElement('div');
  listDiv.className = 'mobile-popup-div';

  const flex = 'd-flex';

  const listDivUl = document.createElement('ul');
  listDivUl.className = flex;

  project.technologies.forEach((each) => {
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
  slideDivImage.src = 'svg/image-slide-complete.svg';
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

  if (project.IsDesktop === true) {
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

  parentDivContainer.appendChild(parentDiv);

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
    button.addEventListener('click', showPopUp);

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