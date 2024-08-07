export const sum = (n1, n2) => {
    return n1 + n2;
};
const sub = (n1, n2) => {
    return n1 - n2;
};
const mult = (n1, n2) => {
    return n1 * n2;
};
const div = (n1, n2) => {
    if (n2 !== 0)
        return n1 / n2;
    if (n1 > 0)
        return "Infinite";
    return "- Infinite";
};
