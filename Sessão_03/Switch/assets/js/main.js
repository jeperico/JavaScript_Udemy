function getDat(day) {
    const dayWek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return dayWek[day]
}

function getMon(mon) {
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    return month[mon]
}

const date = new Date();
const mon = date.getMonth();
const yea = date.getFullYear();
const day = date.getDay();

setTimeout(function time() {
    setTimeout(() => {
        const date = new Date();
        let dat = date.getDate();
        let hou = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();

        function zero(num) {
            return num < 10 ? `0${num}` : num;
        }

        function turn(hour) {
            var tur;
            if (hour < 12) {
                return tur = 'am';
            } else {
                return tur = 'pm';
            }
        }

        function conHour(hour) {
            return hour < 12 ? hour : hour - 12;
        }

        switch (dat) {
            case 1:
            case 11:
            case 21:
            case 31:
                dat = dat + 'st'
                break;
            case 2:
            case 12:
            case 22:
                dat = dat + 'nd'
                break;
            case 3:
            case 13:
            case 23:
                dat = dat + 'rd'
                break;
            default:
                dat = dat + 'th'
                break;
        }

        const res = document.querySelector('#tittleMain');
        res.innerHTML = `Today is ${getDat(day)}, ${getMon(mon)} ${dat}, ${yea}. ${zero(conHour(hou))}:${zero(min)}:${zero(sec)}${turn(hou)}.`;

        time(1000);
        
    }, 500);
});
document.querySelector('#tittleMain').innerHTML = 'Today is ' + (new Date()).toLocaleDateString('en', { dateStyle: 'full'}) + `.`;