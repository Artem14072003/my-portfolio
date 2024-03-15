'use client';

import CountUp from "@/components/CountUp";

interface IBadge {
    containerStyle: string;
    icon: JSX.Element;
    endCountNum: number;
    endCountText?: string;
    badgeText: string
}

export default function Badge({containerStyle, icon, endCountNum, endCountText, badgeText}: IBadge) {
    return <div className={`badge ${containerStyle}`}>
        <div className={"text-3xl text-primary"}>{icon}</div>
        <div className={'flex items-center gap-x-2'}>
            <div className={'text-4xl leading-none font-bold text-primary'}>
                <CountUp end={endCountNum} duration={4} delay={1} />{endCountText}
            </div>
            <div className={'max-w-[70px] leading-none text-[15px] font-medium text-black'}>{badgeText}</div>
        </div>
    </div>;
}
