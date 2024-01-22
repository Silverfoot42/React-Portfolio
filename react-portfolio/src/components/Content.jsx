const Content = ({ activeSection }) => {
  return (
    <div>
      {activeSection === 'about' && (
        <section className="about">
          <div className="profile-picture">
            <img
              src="../assets/profile-picture.JPG"
              alt="Profile Picture"
              className="picture"
            />
          </div>
          <div className="bio">
            <h2>About Me</h2>
            {/*content pulled straight from previous portfolio application*/}
            <p>I am a coding bootcamp student trying to gain new knowledge through a coding course. I have some previous experience with HTML as well as C++, Python, and Java. I am eager to learn more about coding and hopefully do well in the bootcamp. I am not very good at CSS.</p>
          </div>
        </section>
      )}

      {activeSection === 'projects' && (
        <section className="projects">
        </section>
      )}

      {activeSection === 'contact' && (
        <section className="contact">
        </section>
      )}
    </div>
  );
};

export default Content;