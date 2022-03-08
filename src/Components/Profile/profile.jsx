import "./profile.css";
import { BsEnvelopeFill } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";


const Profile = () => {
    return (
      <nav className="Main">
        <section className="mainChildImage">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/ImageProfile.jpg?alt=media&token=3078fb60-bbda-4ffe-b393-9414dd0461f9"
            alt=""
          ></img>
        </section>
        <section className="mainChild">
          <section className="child">
            <div className="text">
              <h1>Sebastian Daza</h1>
              <h2>Frontend Developer</h2>
            </div>
            <div className="childChidl">
              <div>
                <BsEnvelopeFill />
                <a href="">jsebastiandaza2002@gmail.com</a>
              </div>
              <div>
                <FaLinkedin />
                <a href="https://www.linkedin.com/in/sebasttiandaza/">
                  Sebastian Daza
                </a>
              </div>
            </div>
          </section>
          <section className="description">
            <p>
              Frontend JavaScript Developer trained through different courses
              and projects, proactive, self-taught and very disciplined person
              with desire to contribute.
            </p>
            <p>
              One of my biggest passions is learning and sharing content, you
              can find me on different social.
            </p>
          </section>
        </section>
      </nav>
    );
}

export default Profile;