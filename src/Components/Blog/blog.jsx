import "./blog.css";

const Blog = (props) => {
    return (
      <article className="Article">
        <section className="articleHover">
          <div className="hoverInfo">
            <h4>Blog</h4>
            <h3>Name of the Article</h3>
          </div>
          <div className="hoverImage">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/emprendeyourlifestyle.appspot.com/o/imageGitHub1.jpg?alt=media&token=82e83aa2-fe3a-468b-9d0f-3ae368d4a83d"
              alt=""
            ></img>
          </div>
        </section>

        <section className="articleInformation">
          <div className="informationDescription">
            <p>
              In this article I tell the story about Proin eu justo sit amet
              lacus bibendum tincidunt. Vivamus non volutpat nisl, a luctus mi.
            </p>
            <p>
              Donec aliquam est dui, vel vestibulum diam sollicitudin id.
              Quisque feugiat malesuada molestie.
            </p>
          </div>
          <div className="childNetwork">
            <a href="">dev.to</a>
            <a href="">Web</a>
          </div>
        </section>
      </article>
    );
}

export default Blog;