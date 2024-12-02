/**
 * gets the number of days between two dates
 * @param {Date | number} date 
 * @returns {number}
 */
export const calculateDays = (date) => {
    const today = new Date();
    const diffTime = Math.abs(today - date);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    console.log(diffDays)
    return diffDays;
};