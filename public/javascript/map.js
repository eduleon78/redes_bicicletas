var map = L.map('main_map').setView([10.975038,-63.866259], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiZWR1bGVvbjc4IiwiYSI6ImNrbnU3azBydzA2NDcycHA1ZnFzanFuZTYifQ.nC1kDaoZRpJ8YKoJVVbVyQ'
}).addTo(map);

L.marker([10.974027, -63.864714]).addTo(map);
L.marker([10.967844, -63.861238]).addTo(map);
L.marker([10.970456, -63.865905]).addTo(map);