const content = {
  titles: [
    { about: { en: "ABOUT", ru: "ОБО МНЕ" } },
    { skills: { en: "SKILLS & TOOLS", ru: "НАВЫКИ" } },
    { hobby: { en: "HOBBY", ru: "ХОББИ" } },
    { projects: { en: "PROJECTS", ru: "ПРОЕКТЫ" } },
    { education: { en: "EDUCATION", ru: "ОБРАЗОВАНИЕ" } },
    { contacts: { en: "CONTACTS", ru: "КОНТАКТЫ" } },
    { languages: { en: "LANGUAGES", ru: "ЯЗЫКИ" } },
    { social: { en: "SOCIAL", ru: "СОЦСЕТИ" } },
  ],
  my: {
    name: { en: "Oleg", ru: "Олег" },
    surname: { en: "Senko", ru: "Сенько" },

    phone: "+375297631758",
    email: "senkooleg@gmail.com",
    profession: "Full Stack Developer",
    linkedin: "https://www.linkedin.com/in/oleg-senko-b85029205/",
    github: "https://github.com/Oleegg/",
  },
  sections: {
    about: {
      en: {
        text: "I have been studying JavaScript since 2020. Completed RSSchool frontend development courses. Studied HTML, CSS/SCSS, JS/TS, (React/Next), NodeJS (express/Nest), PostgreSQL/MongoDB, Webpack, Git, Jira, testing. I have been freelancing since 2022. I have experience with geodata and OSM-based mapping (OpenStreetMap, Mapshaper, QGIS). Before that I worked in Beltelecom for more than 10 years as an engineer. Was engaged in maintenance of fire and security alarm systems, video surveillance systems, access control systems. I have a B, C category licence. Married, has two children. Responsible, conscientious and self-organised.",
      },
      ru: {
        text: "Я изучаю JavaScript c 2020 года. Закончил курсы RSSchool frontend development. Изучал HTML, CSS/SCSS, JS/TS, (React/Next), NodeJS (express/Nest), PostgreSQL/MongoDB, Webpack, Git, Jira, тестирование. С 2022 года работаю на фрилансере. Имею опыт работы с геоданными и картографированием на основе OSM (OpenStreetMap, Mapshaper, QGIS). До этого работал в Белтелекоме более 10 лет инженером. Занимался обслуживанием систем пожарной и охранной сигнализации, систем видеонаблюдения, систем контроля доступа. Есть права категории В, С. Женат, есть двое детей. Ответственный, добросовестный и самоорганизованный.",
      },
    },
    skills: [
      "HTML",
      "CSS",
      // "SCSS",
      "JavaScript",
      // "TypeScript",
      "React",
      "Redux",
      "NodeJS",
      "RabbitMQ",
      "PostgreSQL",
      "MongoDB",
      "Git",
      "jest",
      "Webpack",
      "ESLint",
    ],
    hobby: {
      en: [
        "active holiday",
        "hike",
        "kayaks",
        "bicycle",
        "radio-controlled cars",
        "Fishing",
      ],
      ru: [
        "активный отдых",
        "поход",
        "байдарки",
        "велосипед",
        "машины на радио управлении",
        "рыбалка",
      ],
    },
    projects: [
      {
        title: { en: "freelance work RB", ru: "работа на фрилансе РБ" },
        link: "https://poputka.probilets.com/",
      },
      {
        title: { en: "freelance work UK", ru: "работа на фрилансе UK" },
        link: "https://crystalroof.co.uk/",
      },
      {
        title: { en: "mini game MEMO", ru: "мини игра МЕМО" },

        link: "https://rolling-scopes-school.github.io/oleegg-JSFEPRESCHOOL/game",
      },
      {
        title: { en: "portfolio layout", ru: "верстка портфолио" },
        link: "https://rolling-scopes-school.github.io/oleegg-JSFEPRESCHOOL/portfolio/",
      },
      {
        title: { en: "shelter-site", ru: "сайт приюта" },
        link: "https://rolling-scopes-school.github.io/oleegg-JSFE2022Q1/shelter/pages/main",
      },

      {
        title: { en: "virtual keyboard", ru: "виртуальная клавиатура" },
        link: "https://oleegg.github.io/virtual-keyboard/src/",
      },

      {
        title: {
          en: "online-store and filter",
          ru: "интернет-магазин и фильтр",
        },
        link: "https://rolling-scopes-school.github.io/oleegg-JSFE2022Q1/online-store/",
      },
      {
        title: {
          en: "learning English",
          ru: "изучение Английского языка",
        },
        link: "https://rs-lang-2.netlify.app/",
      },
      {
        title: { en: "Racing (Rest API)", ru: "Гонки (Rest API)" },
        link: "https://rolling-scopes-school.github.io/oleegg-JSFE2022Q1/race/",
        addition: {
          title: { en: "racing server", ru: "сервер для гонок" },
          link: "https://github.com/Oleegg/async-race-api-server",
        },
      },
    ],
    education: [
      {
        name: {
          en: "College of mehenical-technology",
          ru: "Механико-технологический техникум",
        },
        link: "",
      },
      {
        name: {
          en: "Pedagogical university",
          ru: "Педагогический университет",
        },
        link: "",
      },
      {
        name: {
          en: "preliminary level certificate",
          ru: "сертификат предварительного обучения",
        },
        link: "https://app.rs.school/certificate/vk4ud12h",
      },
      {
        name: {
          en: "Full Course Certificate JS",
          ru: "Сертификат полного курса JS",
        },
        link: "https://app.rs.school/certificate/8zh94oxo",
      },
    ],
    languages: {
      en: [
        {
          title: "English",
          level: "A2 - B1, I can read technical literature",
        },
        { title: "Russian", level: "native" },
      ],
      ru: [
        {
          title: "Английский",
          level: "A2 - B1, Могу читать техническую литературу",
        },
        { title: "Русский", level: "родной" },
      ],
    },
  },
};

export default content;
