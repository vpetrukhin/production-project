type Mode = Record<string, boolean | string>;

export const classNames = (cls: string, mode: Mode = {}, additional: string[] = []): string => 
    [
        cls,
        Object.entries(mode)
            .filter(([className, condition]) => Boolean(condition))
            .map(([className])=> className),
        ...additional,
    ].join(' ');