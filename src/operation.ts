export const sum = (n1: number, n2: number): number => {
    return (n1*1 + n2*1);
}

export const sub = (n1: number, n2: number): number => {
    return n1 - n2;
}

export const mult = (n1: number, n2: number): number => {
    return n1 * n2;
}

export const div = (n1: number, n2: number): number | string => {
    if (n2 !== 0) return n1 / n2;
    if (n1 > 0) return "Infinite";
    return "-Infinite";
}
