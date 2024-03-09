import Link from "next/link";

import {usePathname} from "next/navigation";
import {motion} from "framer-motion";

interface INav {
    containerStyles: string;
    linkStyle: string;
    underlineStyle: string;
}

const links = [
    {
        path: '/',
        name: 'Главная'
    }, {
        path: '/projects',
        name: 'Мои проекты'
    }, {
        path: '/contact',
        name: 'Контакты'
    },
]

export default function Nav({containerStyles, linkStyle, underlineStyle}: INav) {
    const urlPath = usePathname();
    return <nav className={containerStyles}>
        {links.map(({path, name}) =>
            <Link key={path} href={path} className={`capitalize ${linkStyle}`}>
                {path === urlPath && (
                    <motion.span
                        initial={{y: '-100%'}}
                        animate={{y: 0}}
                        transition={{type: 'tween'}}
                        layoutId={"underline"}
                        className={underlineStyle}
                    />
                )}
                {name}
            </Link>
        )}
    </nav>;
}
