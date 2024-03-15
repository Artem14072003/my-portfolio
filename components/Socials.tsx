'use client';

import {RiGithubFill, RiTelegramFill} from "react-icons/ri"
import Link from 'next/link'
import MeSocial from "@/components/MeSocial";

interface ISocials {
    containerStyle: string,
    iconsStyle: string
}

const icons = [
    {
        path: 'https://t.me/Tema10300202',
        name: <RiTelegramFill className={'text-[22px]'} />
    },    {
        path: 'https://github.com/Artem14072003',
        name: <RiGithubFill className={'text-[22px]'}/>
    },    {
        path: 'https://vk.com/love_my_little_kitten',
        name: <MeSocial name={'vk'}  size={22}/>
    }, {
        path: 'https://wa.me/79099144320?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82...',
        name: <MeSocial name={'whatsapp'} size={22}/>
    },
]

export default function Socials({containerStyle, iconsStyle}: ISocials) {
    return <div className={`${containerStyle}`}>{icons.map(({path, name }, idx) =>  (
        <Link target={'_blank'} href={path} key={idx+path}>
            <div className={`${iconsStyle}`}>{name}</div>
        </Link>
    ))}</div>
}
