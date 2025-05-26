$(document).ready(() => {
  render_projects("featured");
});

let render_projects = (slug) => {
  let projects_area = $(".projects-wrapper");

  $(".white-button").removeClass("white-button-hover");
  $(`#${slug}`).addClass("white-button-hover");

  let projects_obj = [
    {
      image: "assets/images/camchelin.png",
      link: "https://github.com/CineNorte-WEB/DeepLearning",
      title: "Camchelin",
      demo: false,
      technologies: ["NLP", "Python"],
      description:
        "Developed a sentiment analysis and keyword extraction model for restaurants using user and platform reviews, followed by category-wise sentence generation.",
      categories: ["all", "tave"],
    },
    {
      image: "assets/images/tobemom.png",
      link: "https://github.com/GDSC-23-24-BABY-APP/front-end",
      title: "To Be Mom",
      demo: false,
      technologies: ["Android Studio", "Kotlin"],
      description:
        "Google Solution Challenge 2024 - A healthcare application designed to help pregnant women monitor their condition and access essential information to reduce miscarriage and stillbirth risks.",
      categories: ["all", "gdsc"],
    },
    {
      image: "assets/images/momentum.png",
      link: "https://github.com/codeit-momentum/moment-front",
      title: "Momentum",
      demo: "https://www.codeit-momentum.shop/",
      technologies: ["React", "Typescript"],
      description:
        "Award-winning project at Codeit PowerBoost Demo Day — a goal-tracking app that helps users break down goals into manageable moments with checklist-based progress tracking.",
      categories: ["all", "codeit"],
    },
    {
      image: "assets/images/MediMate.png",
      link: "https://github.com/software-competition-2024/Front-end",
      title: "Medimate",
      demo: false,
      technologies: ["React Native", "Javascript"],
      description:
        "Award-winning project in the senior division of an IT competition — a mobile app for managing medication expiration dates using OCR technology",
      categories: ["all", "contest"],
    },
    {
      image: "assets/images/masterkey.png",
      link: "https://github.com/Kim-Yun-Seo/MasterKey",
      title: "MasterKey",
      demo: false,
      technologies: ["Kotlin", "Android"],
      description:
        "A kiosk practice platfrom designed to support digital literacy for vulnerable groups, developed as a final project for the Mobile Programming course.",
      categories: ["all", "lecture"],
    },
    {
      image: "assets/images/white.jpg",
      link: "https://github.com/askjiyun/DataStructure_Project",
      title: "Data Structure Project",
      demo: false,
      technologies: ["Python", "Data Structures", "Algorithms"],
      description:
        "Planned and implemented a shortest path algorithm to help socially disadvantaged individuals navigate museums easily, as part of a Data Structures course.'",
      categories: ["all", "lecture"],
    },
    {
      image: "assets/images/white.jpg",
      link: "https://github.com/askjiyun/diffusion_model",
      title: "Diffusion Model Study",
      demo: false,
      technologies: ["Python", "Diffusion"],
      description:
        "Undergraduate research project focused on studying the theory and implementation of Diffusion Models, including hands-on experiments and paper reviews.",
      categories: ["all", "lab"],
    },
    {
      image: "assets/images/white.jpg",
      link: "https://github.com/Sungshin-Capstone/ezpage_AI",
      title: "Capstone Design Project",
      demo: false,
      technologies: ["Python", "CV", "ML"],
      description:
        "Capstone project that developed a travel assistant app using OCR and image classification models to recognize and manage foreign currency expenses.",
      categories: ["all", "lecture"],
    },
    {
      image: "assets/images/white.jpg",
      link: "https://github.com/askjiyun/recommender-system/tree/main",
      title: "Recommender System",
      demo: false,
      technologies: ["Recommender System"],
      description:
        "Practice and assignments for the Recommender Systems course in the first semester of 2024",
      categories: ["all", "lecture"],
    },
    {
      image: "assets/images/white.jpg",
      link: "https://github.com/askjiyun/BigDataAnalysis/tree/main",
      title: "Big Data Analysis",
      demo: false,
      technologies: ["Big Data", "Python"],
      description:
        "Practice and assignments for the Big Data Analysis course in the second semester of 2024",
      categories: ["all", "lecture"],
    },
    {
      image: "assets/images/white.jpg",
      link: "https://github.com/askjiyun/Restoring-obfuscated-Hangeul-Review_Dacon",
      title: "Restoring Obfuscated Hangeul Reviews",
      demo: false,
      technologies: ["NLP", "Korean PLM", "Dacon"],
      description:
        "Participated in the Dacon competition to restore obfuscated Korean reviews using PLMs. Achieved performance improvement by applying model comparison, data augmentation, and a two-stage decoding strategy.",
      categories: ["all", "contest"],
    },
  ];

  let projects = [];
  if (slug == "all") {
    projects = projects_obj.map(project_mapper);
  } else {
    projects = projects_obj
      .filter((project) => project.categories.includes(slug))
      .map(project_mapper);
  }
  projects_area.hide().html(projects).fadeIn();
};

let project_mapper = (project) => {
  return `
        <div class="wrapper">
                
            <div class="card radius shadowDepth1">

                ${
                  project.image
                    ? `<div class="card__image border-tlr-radius">
                        <a href="${project.link}">
                            <img src="${project.image}" alt="image" id="project-image" class="border-tlr-radius">
                        </a>
                    </div>`
                    : ""
                }

        
                <div class="card__content card__padding">
        
                    <article class="card__article">
                        <h2><a href="${project.link}">${project.title}</a></h2>
        
                        <p class="paragraph-text-normal">${
                          project.description
                        } ${
    project.demo ? `<a href="${project.demo}">Demo</a>` : ""
  }</p>
                    </article>

                                
                    <div class="card__meta">
                        ${project.technologies
                          .map(
                            (tech) =>
                              `<span class="project-technology paragraph-text-normal">${tech}</span>`
                          )
                          .join("")}
                    </div>

                </div>
            </div>
        </div>
    `;
};

let selected = (slug) => {
  render_projects(slug);
};
