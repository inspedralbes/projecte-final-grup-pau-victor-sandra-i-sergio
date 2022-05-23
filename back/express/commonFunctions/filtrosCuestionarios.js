module.exports = {
    getMondayandSundayOfCurrentWeek() {
        const today = new Date();
        const first = today.getDate() - today.getDay() + 1;

        const monday = new Date(today.setDate(first)).setHours(0, 0, 0, 0);
        const sunday = new Date(today.setDate(first + 6)).setHours(23, 59, 59, 999);
        return [monday, sunday];
    },


    getFirstandLastDayOfCurrentMonth() {
        var date = new Date();
        var primerDiaMes = new Date(date.getFullYear(), date.getMonth(), 1);
        var ultimoDiaMes = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        return [primerDiaMes, ultimoDiaMes]
    }
}