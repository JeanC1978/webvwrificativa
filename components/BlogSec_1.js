import Image from "next/image";

const Blog = () => {
  return (
    <section className="post-container">
      <article className="item1">
        <p>Super porderes para gestionar y resolver un conflicto</p>

        <div className="avatar">
          <Image src="https://placeimg.com/52/52/people" alt="" className="_avatar" />
          <div className="_avat">
            <p>victor Cansilla</p>
            <h6>Mayo 12, 2021</h6>
          </div>
        </div>

      </article>
      <article className="item2">
        <p>Feeback 360 para el desarrollo profesional</p>
        <div className="avatar">
          <Image src="https://placeimg.com/52/52/people" alt="" className="_avatar" />
          <div className="_avat">
            <p>victor Cansilla</p>
            <h6>Mayo 12, 2021</h6>
          </div>
        </div>
      </article>
      <article className="item3">
        <p>¿Por que los empleados se van de la empresa?</p>
        <div className="avatar">
          <Image src="https://placeimg.com/52/52/people" alt="" className="_avatar" />
          <div className="_avat">
            <p>victor Cansilla</p>
            <h6>Mayo 12, 2021</h6>
          </div>
        </div>
      </article>
      <article className="item4">
        <p>Este año regala un empoderamiento</p>
        <div className="avatar">
          <Image src="https://placeimg.com/52/52/people" alt="" className="_avatar" />
          <div className="_avat">
            <p>victor Cansilla</p>
            <h6>Mayo 12, 2021</h6>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Blog
