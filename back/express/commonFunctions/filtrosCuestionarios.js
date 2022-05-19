module.exports = {
    getMondayandSundayOfCurrentWeek() {
        const today = new Date();
        const first = today.getDate() - today.getDay() + 1;

        const monday = new Date(today.setDate(first));
        const sunday = new Date(today.setDate(first + 6));
        return [monday, sunday];
    },


    getFirstandLastDayOfCurrentMonth() {
        var date = new Date();
        var primerDiaMes = new Date(date.getFullYear(), date.getMonth(), 1);
        var ultimoDiaMes = new Date(date.getFullYear(), date.getMonth() + 1, 0);

        return [primerDiaMes, ultimoDiaMes]
    }
}