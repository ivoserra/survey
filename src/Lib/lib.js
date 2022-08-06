const api = {
  welcome: {
    id: "01",
    path: "welcome",
    title: "Welcome to our Survey.",
    text: "Lorem ipsum odor amet, consectetuer adipiscing elit. Lobortis phasellus congue mollis convallis; maximus curae magna proin aliquet. Cubilia vestibulum sed himenaeos arcu sollicitudin libero tempor nostra malesuada. Ante vivamus suspendisse turpis hac taciti taciti lacinia auctor. Maximus aenean montes habitasse, nostra potenti quisque aenean etiam. Nascetur mus convallis nibh euismod vivamus laoreet. Sapien arcu elit condimentum purus nascetur quis varius aliquet elementum. Condimentum ut euismod tempus vehicula amet praesent phasellus cras sociosqu.",
  },
  survey: {
    id: "01",
    path: "survey",
    name: "WHO ARE YOU?",
    title: "Please enter your name.",
  },
  question: [
    {
      id: "01",
      path: "question1",
      name: "QUESTION 1",
      title: "How often do you visit this Website?",
      options: [
        { name: "Often", id: "01", value: "5" },
        { name: "Rarely", id: "01", value: "3" },
        { name: "Never", id: "03", value: "0" },
      ],
    },
    {
      id: "02",
      path: "question2",
      name: "QUESTION 2",
      title: "Please select at least one option",
      options: [
        { name: "Option 1", id: "01", value: "2" },
        { name: "Option 2", id: "02", value: "2" },
        { name: "Option 3", id: "03", value: "2" },
      ],
    },
    {
      id: "03",
      path: "question3",
      name: "QUESTION 3",
      title: "Where are you from?",

      options: [
        { label: "Please chose your country", id: "01", value: "" },
        { label: "Germany", id: "03", value: "3" },
        { label: "Sweeden", id: "04", value: "5" },
        { label: "Italy", id: "05", value: "5" },
        { label: "Spain", id: "06", value: "3" },
      ],
    },
  ],
};

export default api;
