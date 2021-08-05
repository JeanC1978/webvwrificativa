import React from 'react'
import Image from 'next/image'

export function AuthorData({ avatar, name, date, color = "white" }) {


    return (
        <div className="author-data">
            <div className="author-data__img">
                <Image src={avatar} alt="" />
            </div>
            <div className={`author-data__info ${color}`}>
                <h5>{name}</h5>
                <p>{date}</p>
            </div>
        </div>
    )
}
