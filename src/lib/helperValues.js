// limit of document each request send
export const limitValue = 10;
export const getSkipValue = (page) => {
    if (page <= 1) {
        return 0
    } else {
        return (page - 1) * limitValue
    }
}