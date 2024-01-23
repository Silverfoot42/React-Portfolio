const projects = [
  {
    title: 'Movies Worth Your Time',
    deploymentLink: 'https://sush-tech.github.io/Movies-worth-your-time/index.html',
    repositoryLink: 'https://github.com/sush-tech/Movies-worth-your-time',
    image: 'project1-image.png',
  },
  {
    title: 'Weather Dashboard',
    deploymentLink: 'https://silverfoot42.github.io/weather-dashboard/',
    repositoryLink: 'https://github.com/Silverfoot42/weather-dashboard',
    image: 'project2-image.png',
  },
  {
    title: 'Work Day Scheduler',
    deploymentLink: 'https://silverfoot42.github.io/Work-Day-Scheduler/',
    repositoryLink: 'https://github.com/Silverfoot42/Work-Day-Scheduler',
    image: 'project3-image.png',
  },
  {
    title: 'Javascript Coding Quiz',
    deploymentLink: 'https://silverfoot42.github.io/module-four-challenge/',
    repositoryLink: 'https://github.com/Silverfoot42/module-four-challenge',
    image: 'project4-image.png',
  },
  {
    title: 'Password Generator',
    deploymentLink: 'https://silverfoot42.github.io/module-three-challenge/',
    repositoryLink: 'https://github.com/Silverfoot42/module-three-challenge',
    image: 'project5-image.png',
  },
  {
    title: 'Old Portfolio Page',
    deploymentLink: 'https://silverfoot42.github.io/module-two-challenge/',
    repositoryLink: 'https://github.com/Silverfoot42/module-two-challenge',
    image: 'project6-image.png',
  },
]

const Content = ({ activeSection }) => {
  return (
    <div className="content">
      {activeSection === 'about' && (
        <section className="about">

          <div className="bio">
            <h2>About Me</h2>
            <div className="profile-picture">
            <img
              src="/profile_picture.JPG"
              alt="Profile Picture"
              className="picture"
            />
            </div>
            {/*content pulled straight from previous portfolio application*/}
            <p>I am a coding bootcamp student trying to gain new knowledge through a coding course. I have some previous experience with HTML as well as C++, Python, and Java. I am eager to learn more about coding and hopefully do well in the bootcamp. I am not very good at CSS.</p>
          </div>
        </section>
      )}

      {activeSection === 'projects' && (
        <section className="projects">
          <h2>My Projects</h2>
          <div className="project-cards">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <div className="project-background" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="project-links">
                    <a href={project.deploymentLink}>View Project</a>
                    <a href={project.repositoryLink}>GitHub Repository</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="contact">
        </section>
      )}

      {activeSection === 'resume' && (
        <section className="resume">
        </section>
      )}
    </div>
  );
};

export default Content;