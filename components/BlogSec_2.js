const BlogS = ({titulo}) => {
    return (
        <>
            <h2 className="h2">{titulo}</h2>
            <section className="post-container-2">
                <div className="item-post">
                    <article className="item-1"></article>

                    <p className="p">Feedback 360 para el desarrollo personal</p>
                    <div className="avatar">
                        <img src="https://placeimg.com/52/52/people" alt="" className="_avatar" />
                        <div className="_avat">
                            <p>victor Cansilla</p>
                            <h6>Mayo 12, 2021</h6>
                        </div>
                    </div>
                </div>

                <div className="item-post">
                    <article className="item-2"></article>

                    <p>Errores terrorificos en la gestion del talento</p>
                    <div className="avatar1">
                        <img src="https://placeimg.com/52/52/people" alt="" className="_avatar" />
                        <div className="_avat">
                            <p>victor Cansilla</p>
                            <h6>Mayo 12, 2021</h6>
                        </div>
                    </div>
                </div>

                <div className="item-post">
                    <article className="item-3"></article>

                    <p>¿Que es la NOM-035?</p>
                    <div className="avatar2">
                        <img src="https://placeimg.com/52/52/people" alt="" className="_avatar" />
                        <div className="_avat">
                            <p>victor Cansilla</p>
                            <h6>Mayo 12, 2021</h6>
                        </div>
                    </div>
                </div>

                <div className="item-post">
                    <article className="item-4"></article>

                    <p className="p">¿Por que se debe evaluar el desempeño?</p>
                    <div className="avatar">
                        <img src="https://placeimg.com/52/52/people" alt="" className="_avatar" />
                        <div className="_avat">
                            <p>victor Cansilla</p>
                            <h6>Mayo 12, 2021</h6>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogS;
