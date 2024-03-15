import React from 'react';
import Image from "next/image";

interface IDevImg {
    containerStyle: string;
    imgSrc: string
}

const DevImg = ({containerStyle, imgSrc}: IDevImg) => {
    return (
        <div className={containerStyle}>
            <Image src={imgSrc} alt={"Krivenko_Artem"} draggable={false} fill priority />
        </div>
    );
};

export default DevImg;