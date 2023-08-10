import "./About.css";

function About() {
  return (
    <>
      <div className="about">
        <div className="about-image">
          <img src="about.jpg" alt="loading" />
        </div>
        <div className="about-text">
          <h1 className="about-heading">About MeetUp</h1>
          <p className="about-para">
            MeetUp is an all-in-one intelligent collaboration platform that
            makes connecting easier, more immersive, and more dynamic for
            businesses and individuals. MeetUp technology puts people at the
            center, enabling meaningful connections, facilitating modern
            collaboration, and driving human innovation through solutions like
            team chat, phone, meetings, omnichannel cloud contact center, smart
            recordings, whiteboard, and more, in one offering.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
