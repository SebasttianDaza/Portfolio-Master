import "./blog.css";

const Blog = (props) => {
    return (
      <article className="Article">
        <section className="articleHover">
          <div className="hoverInfo">
            <h4>Blog</h4>
            <h3>12 Canales de YouTube para aprender programacion.</h3>
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
              Todos conocemos la gran aplicación que es YouTube, últimamente
              considerada la universidad de todos, casi cualquier cosa que
              quieras aprender la encuentras ahí, pero no todo lo que se publica
              es contenido de calidad.
            </p>
            <p>
              Por eso hoy te traigo los que para mi son canales de muy buen
              contenido para aprender programacion y desarrollo web en español.
            </p>
          </div>
          <div className="childNetwork">
            <a href="https://dev.to/sebasttiandaza/12-canales-de-youtube-para-aprender-programacion-3njo">
              dev.to
            </a>
            <a href="https://emprendeyourlifestyle.com/blog/">Web</a>
          </div>
        </section>
      </article>
    );
}

export default Blog;