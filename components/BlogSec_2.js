import Image from "next/image";
import blogCardOne from "../public/images/blog/blog-item-1.png"
import blogCardTwo from "../public/images/blog/blog-item-2.png"
import blogCardThree from "../public/images/blog/blog-item-3.png"
import blogCardFour from "../public/images/blog/blog-item-4.png"


const BlogS = ({ titulo }) => {
    const items = [
        {
            imagen: blogCardOne,
            titulo: 'Feedback 360º para el desarrollo profesional',
            nombre: 'Mary miley',
            fecha: 'Abril 20, 2021',
            avatar: '',
            item: 1
        },
        {
            imagen: blogCardTwo,
            titulo: 'Errores terroríficos en la Gestión del Talento ',
            nombre: 'Mauricio Lopez',
            fecha: 'Abril 20, 2021',
            avatar: '',
            item: 2
        },
        {
            imagen: blogCardThree,
            titulo: '¿Qué es la NOM-035?',
            nombre: 'Jose Zamora',
            fecha: 'Abril 20, 2021',
            avatar: '',
            item: 3
        },
        {
            imagen: blogCardFour,
            titulo: '¿Por qué se debe evaluar el desempeño?',
            nombre: 'Mary miley',
            fecha: 'Abril 20, 2021',
            avatar: '',
            item: 4
        }
    ]
    return (
        <div>
            <h2 className="h2">{titulo}</h2>
            <div className="post-container-2">

                {items.map((e, index) => {

                    return (
                        <div className="item-post" key={index}>
                            <Image src={e.imagen} alt="" />
                            {/* <article className={`item-${e.item}`}></article> */}

                            <p className="p">{e.titulo}</p>
                            <div className={`avatar${index}`}>

                                <Image src="https://placeimg.com/52/52/people" alt="" className="_avatar" />
                                <div className="_avat">
                                    <p>{e.nombre}</p>
                                    <h6>{e.fecha}</h6>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default BlogS;
