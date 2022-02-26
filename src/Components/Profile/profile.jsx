import "./profile.css";


const Profile = () => {
    return (
      <main className="Main">
        <section className="mainChild">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/ImageProfile.jpg?alt=media&token=3078fb60-bbda-4ffe-b393-9414dd0461f9"
            alt=""
          ></img>
        </section>
        <section className="mainChild">
          <section className="child">
            <div>
              <h1>Sebastian Daza</h1>
              <h2>Frontend Developer</h2>
            </div>
            <div>
              <span>
                <a href="">jsebastiandaza2002@gmail.com</a>
              </span>
              <span>
                <a href="">+57 321 470 0676</a>
              </span>
            </div>
          </section>
          <section>
            <p>
              Self-motivated developer, who is willing to learn and create
              outstanding UI applications.
            </p>
            <p>
              Donec aliquam est dui, vel vestibulum diam sollicitudin id.
              Quisque feugiat malesuada molestie
            </p>
          </section>
        </section>
      </main>
    );
}

export default Profile;