var wheel = document.querySelector('.wheel-img');
var resultWrapper = document.querySelector('.spin-result-wrapper');
// направляем все ссылки на форму, если это ленд

// запускаем колесо по клику
$('.cursor-text').click(function() {
  if (wheel.classList.contains('rotated')) {
    resultWrapper.style.display = "block";
  } else {
    wheel.classList.add('super-rotation');
    setTimeout(function() {
      resultWrapper.style.display = "block";
    }, 8000);
    setTimeout(function() {
      $('.spin-wrapper').slideUp();
      $('.order_block').slideDown();
      start_timer();

    }, 10000);
    wheel.classList.add('rotated');
  }
});
$('.close-popup, .pop-up-button').click(function(e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
  var top = $('#toform').offset().top;
  $('body,html').animate({
    scrollTop: top
  }, 800);
});

var time = 600;
var intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}


function tick() {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  mins = mins >= 10 ? mins : "0" + mins;
  $("#min").html(mins);
  $("#sec").html(secs);
}

$('a').click(function(e) {
  var top = $('.scrollto_form').offset().top;
  e.preventDefault();
  $('body,html').animate({
    scrollTop: top
  }, 800);
});



document.addEventListener("DOMContentLoaded", function() {
  // Вивід дати (+ час).
  // Arguments: dateFormat (string), language (string), abbreviated (bool). Default: 'dd.mm.yyyy', 'ru', false
  postDate( /*'dateFormat', 'ru', false*/ );
});

function postDate(sa, countryName, isAbbreviated) {
  // Додаємо клас "date-N", де N - кількість "відмотаних" днів.
  // Наприклад, span class="date-0"></span> - мотає 0 днів назад (сьогодні).
  // Наприклад, span class="date-5"></span> - мотає 5 днів назад.

  // Вивід дати (+ години + хвилини), додаємо клас "time". Наприклад, <span class="date-1 time"></span>.
  // Виводить у форматі на зразок "14.02.2018 14:22"
  // Працює як в порядку зростання, так і в порядку спадання (міняємо флажок нижче)

  var sa = sa || 'dd.mm.yyyy',
    msInDay = 86400000,
    counterLength = 90, // Максимальна кількість вімотаних днів. Змінюємо за необхідності.
    months,
    countryName = countryName || 'ro', // Мова для місяців.
    isAbbreviated = isAbbreviated || false, // Якщо потрібно скорочений варіант місяців з трьох букв, наприклад "янв", "июн", тоді ставим TRUE.
    localDate = new Date();

  switch (countryName) {
    case 'ge': // Грузинский
      months = ['იანვარი', 'თებერვალი', 'მარტი', 'აპრილი', 'მაისი', 'ივნისი', 'ივლისი', 'აგვისტო', 'სექტემბერი', 'ოქტომბერი', 'ნოემბერი', 'დეკემბერი'];
      break;
    case 'it': // Italy
      months = ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'];
      break;
    case 'es': // Spain
      months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
      break;
    case 'fr': // France
      months = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
      break;
    case 'pt': // Portugal
      months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
      break;
    case 'de': // Germany
      months = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
      break;
    case 'bg': // Bulgaria
      months = ['Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни', 'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'];
      break;
    case 'pl': // Poland
      months = ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'];
      break;
    case 'ro': // Romania
      months = ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'];
      break;
    case 'hu': // Hungary (Румунія)
      months = ['Január', 'Február', 'Március', 'Április', 'Május', 'Június', 'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'];
      break;
    case 'gr': // Greece
    case 'cy': // Cyprus (Кіпр)
      months = ['Ιανουάριος', 'Φεβρουάριος', 'Μάρτιος', 'Απρίλιος', 'Μάιος', 'Ιούνιος', 'Ιούλιος', 'Αύγουστος', 'Σεπτέμβριος', 'Οκτώβριος', 'Νοέμβριος', 'Δεκέμβριος'];
      break;
    case 'ru': // Russia
      months = ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'];
      break;
  }

  if (isAbbreviated) {
    for (var i = 0; i < months.length; i++) {
      months[i] = months[i].slice(0, 3).toLowerCase(); // Прибираємо ".toLowerCase()", якщо перша буква повинна бути великою.
    }
  }

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = "date-" + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() - counter * msInDay),
      timeCounter = 0,
      timeArray = time(nodeList /*, true*/ ); // Розкоментувати, якщо необхідне сортування в порядку спадання.

    timeArray = timeFormat(timeArray);

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
        // format: особливий формать для окремої дати. Додаємo як data-format="фомарт".
        /// Формати дивитись в switch нижче. dd - числом, day - прописом.

        // Наприклад, <span class="date-1" data-format="dd month yyyy"></span>
        // мотає на 1 день назад і виводить цей span у вигляді "14 Лютого 2018".
      } else {
        // Загальний формат виводу дати змінювати ТУТ!
        nodeList[i].innerHTML = format(date, sa); // Default: dd.mm.yyyy
      }
      if (/\btime\b/.test(nodeList[i].className)) {
        nodeList[i].innerHTML += " " + timeArray[timeCounter]; // Рядок для формату виводу часу.
        timeCounter++;
      }
    }
  }

  // <span clas="date-N"></span> - мотає час назад на N днів. Наприклад, <span className="date-5"></span>
  // <span clas="dateN"></span> - мотає час вперед на N днів. Наприклад, <span className="date5"></span>

  for (var counter = 0; counter < counterLength; counter++) {
    var dateClass = "date" + counter,
      nodeList = document.getElementsByClassName(dateClass),
      date = new Date(localDate.getTime() + counter * msInDay),
      timeCounter = 0;

    for (var i = 0; i < nodeList.length; i++) {
      var data = nodeList[i].dataset;

      if (data.format) {
        nodeList[i].innerHTML = format(date, data.format);
      } else {
        nodeList[i].innerHTML = format(date /*, "dd month yyyy"*/ );
      }
    }
  }



  function time(nodeList, reverse) {
    var timeArray = [],
      timeStatement = false;

    for (var i = 0; i < nodeList.length; i++) {
      if (nodeList[i].className.match(/\btime\b/)) {
        if (nodeList[i].className.match(/\bdate-0\b/)) {
          timeStatement = true;
        }
        timeArray.push(timeRandom(timeStatement));
      }
    }

    if (reverse) timeArray.sort(function(a, b) {
      return b - a;
    });
    else timeArray.sort(function(a, b) {
      return a - b;
    });

    return timeArray;
  }

  function timeRandom(statement) {
    if (statement) {
      var date = new Date(),
        timeLimit = date.getHours() * 60 + date.getMinutes();

      return Math.round(0 + Math.random() * timeLimit);
    }
    return Math.round(0 + Math.random() * 1440);
  }

  function timeFormat(timearray) {
    var array = [];

    for (var i = 0; i < timearray.length; i++) {
      var htemp = Math.floor(timearray[i] / 60),
        mtemp = timearray[i] % 60,
        hours = htemp < 10 ? "0" + htemp : htemp,
        minutes = mtemp < 10 ? "0" + mtemp : mtemp;
      array.push(hours + ":" + minutes);
    }


    return array;
  }

  function format(date, formatstring) {
    var innerDate = "",
      day = date.getDate(),
      year = date.getFullYear(),
      month = date.getMonth() + 1,
      fo = formatstring || true;

    switch (fo) {
      case "mm.dd.yyyy":
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += ".";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "." + year;
        return innerDate;

      case "dd month yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd month":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        return innerDate;

      case "day dd, month yyyy":
        var days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
        innerDate += days[new Date(year, month - 1, day).getDay()];
        innerDate += " ";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += " " + year;
        return innerDate;

      case "dd/mm/yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "/";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "/" + year;
        return innerDate;

      case "dd-mm-yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += "-";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "-" + year;
        return innerDate;

      case "yyyy.mm.dd":
        innerDate += year;
        innerDate += ".";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += ".";
        innerDate += (day < 10) ? ("0" + day) : day;
        return innerDate;

      case "month dd, yyyy":
        innerDate += months[month - 1];
        innerDate += " ";
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += ", ";
        innerDate += year;
        return innerDate;

      case "dd month, yyyy":
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += " ";
        innerDate += months[month - 1];
        innerDate += ", ";
        innerDate += year;
        return innerDate;

      default:
        innerDate += (day < 10) ? ("0" + day) : day;
        innerDate += ".";
        innerDate += (month < 10) ? ("0" + month) : month;
        innerDate += "." + year;
        return innerDate;
    }
  }
};

$(".only_number").on("keydown", function (t) {
	46 == t.keyCode || 8 == t.keyCode || 9 == t.keyCode || 27 == t.keyCode || 187 == t.keyCode || 65 == t.keyCode && !0 === t.ctrlKey || 35 <= t.keyCode && t.keyCode <= 39 || (t.keyCode < 48 || 57 < t.keyCode) && (t.keyCode < 96 || 105 < t.keyCode) && t.preventDefault()
})

$(".inputCover").click(function () {
	$(this).find(".tooltip").css("display", "block")
})

$(".ac_footer a").unbind("click")
