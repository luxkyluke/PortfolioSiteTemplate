//const the_railway_chronicles_bg = require('./../../data/the_railway_chronicles/background.jpg');

const ProjectApi = {
  projects: [
    { 
      id: 1,   
      name:  "the_railway_chronicles",
      type : "Website",
      title: "The Railway Chronicles",
      desc : "This project is do eiusmo dtempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud exercitation ullamco laboris nisi ",
      link : "http://luxkyluke.github.io/therailwaychronicles/",
      background : './data/background.jpg',
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
          src : "/data/the_railway_chronicles/3.jpg",
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
          src : "/data/the_railway_chronicles/5.jpg",
          full: false
        }
      ]
    }
  ],

  all: function() {return this.projects},
  get: function(id) {
    const isProject = p => p.id === id
    return this.projects.find(isProject)
  }
}

export default ProjectApi;