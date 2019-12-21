function initialize() {
    var earth = new WE.map('earth');
    WE.tileLayer('http://tileserver.maptiler.com/nasa/{z}/{x}/{y}.jpg').addTo(earth);

    var marker = WE.marker([54.58, 73.23]).addTo(earth);
    marker.bindPopup("<span style='color: red;font-weight: bold;'>Омск!</span>", {maxWidth: 40, closeButton: false})
    .openPopup();

    var marker2 = WE.marker([55.45, 37.37]).addTo(earth);
    marker2.bindPopup("Москва", {maxWidth: 40, closeButton: false});

    var marker3 = WE.marker([48.51, 2.20]).addTo(earth);
    marker3.bindPopup("Париж", {maxWidth: 40, closeButton: false});

    var marker4 = WE.marker([37.34, 126.58]).addTo(earth);
    marker4.bindPopup("Сеул", {maxWidth: 40, closeButton: false});

    var marker5 = WE.marker([28.61, 77.23]).addTo(earth);
    marker5.bindPopup("Нью-Дели", {maxWidth: 60, closeButton: false});

    var marker6 = WE.marker([35.41, 139.41]).addTo(earth);
    marker6.bindPopup("Токио", {maxWidth: 40, closeButton: false});

    var marker7 = WE.marker([52.31, 13.24]).addTo(earth);
    marker7.bindPopup("Берлин", {maxWidth: 40, closeButton: false});

    var marker8 = WE.marker([39.55, 116.24]).addTo(earth);
    marker8.bindPopup("Пекин", {maxWidth: 40, closeButton: false});

    var marker9 = WE.marker([-34.37, -58.22]).addTo(earth);
    marker9.bindPopup("Буэнос-Айрес", {maxWidth: 80, closeButton: false});

    var marker10 = WE.marker([19.26, -99.8]).addTo(earth);
    marker10.bindPopup("Мехико ", {maxWidth: 40, closeButton: false});

    var marker11 = WE.marker([-33.55, 18.25]).addTo(earth);
    marker11.bindPopup("Кейптаун ", {maxWidth: 50, closeButton: false});

    var marker12 = WE.marker([38.53, -77.2]).addTo(earth);
    marker12.bindPopup("Вашингтон ", {maxWidth: 50, closeButton: false});


    earth.setView([25, 70], 2.7);
  }
