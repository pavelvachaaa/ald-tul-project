export const getRandomNumber = (n) => {
    return Math.random() * n | 0;
}

export const setCharAt = (str, index, chr) => {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}
