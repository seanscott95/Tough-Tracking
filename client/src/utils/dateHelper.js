module.exports = {
    date_month: (date) => {
        return date.slice(0, 8)
    },
    date_year: (date) => {
        return date.slice(0, 14)
    }
};
