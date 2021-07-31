import React from 'react'
import Image from "next/image";

export function AvatarWithBg({ img }) {


    return (
        <div className="avatar-container">
            <Image src={img} />
        </div>
    )
}
