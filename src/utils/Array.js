export const extractRandomItemFromArray = array => {
    return array[Math.floor(Math.random() * array.length)];
};