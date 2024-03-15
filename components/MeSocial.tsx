import React, {useCallback, useMemo} from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

interface IMeSocial {
    name: string,
    size: number
}

const MeSocial = ({name, size}: IMeSocial) => {

    return <Button variant={'outline'} size={'icon'} className={`border-none text-center bg-transparent w-[${size}px] h-[${size}px]`}>
        <Image src={`/social/${name}.svg`} width={size} height={size} alt={name} className={'scale-100 dark:scale-0'}/>
        <Image src={`/social/${name}-dark.svg`} width={size} height={size} alt={name} className={'absolute scale-0 dark:scale-100'} />
    </Button>;
}


export default MeSocial;