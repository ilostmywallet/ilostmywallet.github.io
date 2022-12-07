//--------------------------task 1--------------------------------
document.write("<div class=\"title\"><span>task 1</span></div>");
document.write(new Date(2021, 2, 20, 3, 12));

//--------------------------task 2--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>task 2</span></div>");

function getWeekDay(date) {
    let days = ['НД', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return days[date.getDay()]
}

let date = new Date(2015, 3, 15)
document.writeln("День тижня [" + getWeekDay(date) + "] з дати [" + date + "]")

//--------------------------task 3--------------------------------
document.write("<br><br>");
document.write("<div class=\"title\"><span>task 3</span></div>");
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}

document.writeln("Останній день лютого місяця 2020 року: " + getLastDayOfMonth(2020, 1) )

