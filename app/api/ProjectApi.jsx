//const the_railway_chronicles_bg = require('/././data/the_railway_chronicles/background.jpg');


const ProjectApi = {
  projects: [
    { 
      id: 0,   
      name:  "monaco_porcelaine",
      type : "Webapp",
      title: "Chinese Porcelains",
      desc : "<p>This project was made for the exibition of the chinese imperial collection at Grimadli Forum of Monaco. It's composted by one webapps and one website. The webapp was install on a touch table in the exhibition offering the chance to visitors to create their own porcelains. After the editing part, their creations will be send to them by email and upload on the exhibition website</p><p>Technos : <span>HTML5</span>, <span>CSS3</span>, <span>WebGL</span>, <span>JavaScript ES6</span>, <span>Electron</span>, <span>GSAP</span></p>",
      background : '/data/monaco_porcelaine/background.jpg',
      role: "Developer",
      context:'Intership at <br> <a href="http://fleurdepapier.com" target="_blank">Fleur de Papier</a>',
      year: "2017",
      color: "#232846",
      txtcolor: "#000314",
      imgs: [
        {
          src : "/data/monaco_porcelaine/3.jpg",
          full: false
        },
        {
          src : "/data/monaco_porcelaine/1.jpg",
          full: false
        },
        {
          src : "/data/monaco_porcelaine/2.jpg",
          full: true
        },
        {
          src : "/data/monaco_porcelaine/4.jpg",
          full: false
        },
        {
          src : "/data/monaco_porcelaine/6.jpg",
          full: false
        }

      ]
    },
    { 
      id: 1,   
      name:  "the_railway_chronicles",
      type : "Website",
      title: "The Railway Chronicles",
      desc : "<p>Ceci est projet universitaire réalisé pour le cours de webdesign. Par groupe de 3 nous devions designer et intégrer l'ensemble d'un site de magazine de voyage. Nous avons décider d'orienté notre magazine autour des voix de chemins de fer et des voyages en train. </p><p>Technos : <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>, <span>jQuery</span></p>",
      link : "http://luxkyluke.github.io/therailwaychronicles/",
      background : '/data/the_railway_chronicles/background.jpg',
      role: "Developer,<br> Web Designer",
      context:"Student Project",
      year: "2016",
      color: "#A4632A",
      txtcolor: "#5A2A00",
      imgs: [
        {
          src : "/data/the_railway_chronicles/1.jpg",
          full: false
        },
        {
          src : "/data/the_railway_chronicles/5.gif",
          full: false
        },
        {
          src : "/data/the_railway_chronicles/2.jpg",
          full: true
        },
        {
          src : "/data/the_railway_chronicles/4.jpg",
          full: false
        },
        {
          src : "/data/the_railway_chronicles/3.jpg",
          full: false
        }
      ]
    },
    { 
      id: 2,   
      name:  "giverny_galaxy",
      type : "Website",
      title: "Impressionnist Galaxy",
      desc : "<p>This project is a website asked by the Musée des Impressionnismes from Giverny. The website is composed by two main part. One where the users navigate on a 3D space around impressionnist artworks. And in the second part, we'll find the same artworks include into stories.</p><p>Technos : <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript</span>, <span>WebGL</span>, <span>GSAP</span></p>",
      link : "http://galaxie.mdig.fr/en/",
      background : '/data/giverny_galaxy/background.jpg',
      role: "Developer",
      context:'Intership at <br> <a href="http://fleurdepapier.com" target="_blank">Fleur de Papier</a>',
      year: "2017",
      color: "#a23435",
      txtcolor: "#500101",
      imgs: [
        {
          src : "/data/giverny_galaxy/6.jpg",
          full: false
        },
        {
          src : "/data/giverny_galaxy/2.jpg",
          full: false
        },
        {
          src : "/data/giverny_galaxy/7.jpg",
          full: true
        },
        {
          src : "/data/giverny_galaxy/4.jpg",
          full: false
        },
        {
          src : "/data/giverny_galaxy/3.jpg",
          full: false
        }
      ]
    },
    { 
        id: 3,   
        name:  "delaunay_dreams",
        type : "Digital Installation",
        title: "Delaunay Dreams",
        desc : "<p>Delaunay’s Interactive Dreams est une installation interactive qui immerge le spectateur dans un univers sonore et visuel inspiré des artistes francais Robert et Sonia Delaunay. Selon les gestes des utilisateurs, le son et les visuels se modifient, donnant au spectateur la possibilité de devenir créateur.</p><p>Technos : <span>C++</span>, <span>OpenFrameworks</span>, <span>LeapMotion SDK</span>",
        link : "https://delaunaysinteractivedreams.github.io/",
        background : '/data/delaunay_dreams/background.jpg',
        role: "Developer",
        context:'University Project',
        year: "2016-2017",
        color: "#50180d",
        txtcolor: "#200500",
        imgs: [
          {
            src : "/data/delaunay_dreams/4.jpg",
            full: false
          },
          {
            src : "/data/delaunay_dreams/1.mp4",
            full: true
          },
          {
            src : "/data/delaunay_dreams/6.jpg",
            full: false
          },
          {
            src : "/data/delaunay_dreams/7.jpg",
            full: false
          },
          {
            src : "/data/delaunay_dreams/1.jpg",
            full: true
          },
          {
            src : "/data/delaunay_dreams/5.jpg",
            full: false
          },
          {
            src : "/data/delaunay_dreams/8.jpg",
            full: false
          }
        ]
      },
    { 
        id: 4,   
        name:  "the_challenger",
        type : "Website",
        title: "The Challenger",
        desc : "<p>The Challenger is a social network for artists who want to developpe and challenge their own creativity. The website periodically propose ephemeral Challenges, where all artists can publish their own creation around the theme. At the end of the periode the most liked post will win the challenge and be publish on the website homepage. The projet was made during a workshop week with an other front-end developer and deux back-end developers </p><p>Technos : <span>HTML5</span>, <span>CSS3</span>, <span>JavaScript ES6</span>, <span>React.js</span></p>",
        link : "https://www.yorka-design.fr/thechallenger",
        background : '/data/the_challenger/background.jpg',
        role: "Front-end Developer",
        context:'University Project',
        year: "2017",
        color: "#42ab9d",
        txtcolor: "#00312a",
        imgs: [
          {
            src : "/data/the_challenger/1.jpg",
            full: false
          },
          {
            src : "/data/the_challenger/3.jpg",
            full: true
          },
          {
            src : "/data/the_challenger/2.jpg",
            full: false
          },
          {
            src : "/data/the_challenger/6.jpg",
            full: true
          },
          {
            src : "/data/the_challenger/4.jpg",
            full: false
          }
        ]
      }
  ],

  nbProjects: function(){return this.projects.length},
  all: function() {return this.projects},
  get: function(id) {
    const isProject = p => p.id === id
    return this.projects.find(isProject)
  }
}

export default ProjectApi;