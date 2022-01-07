var MAP_CENTER = [-98.000000, 38.500000];
var geojson = {
    'type': 'FeatureCollection',
    'imageSize': [100, 100],
    'features': [{
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'Indiana',
            'address': '123 Fake St<br>Indiana, IN 12345',
            'bio': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repudiandae iure suscipit dolore deserunt reiciendis. Nam sed excepturi provident, ipsam sequi nemo necessitatibus possimus eos eum, commodi deleniti, animi illo.',
            'imageName': 'profile.png',
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-86.126976, 40.273502]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'Arizona',
            'address': '123 Fake St<br>Arizona, AZ 12345',
            'bio': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repudiandae iure suscipit dolore deserunt reiciendis. Nam sed excepturi provident, ipsam sequi nemo necessitatibus possimus eos eum, commodi deleniti, animi illo.',
            'imageName': 'profile.png',
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-111.093735, 34.048927]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'Arkansas',
            'address': '123 Fake St<br>Arkansas, AR 12345',
            'bio': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repudiandae iure suscipit dolore deserunt reiciendis. Nam sed excepturi provident, ipsam sequi nemo necessitatibus possimus eos eum, commodi deleniti, animi illo.',
            'imageName': 'profile.png',
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-92.199997, 34.799999]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'Colorado',
            'address': '123 Fake St<br>Colorado, CO 12345',
            'bio': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repudiandae iure suscipit dolore deserunt reiciendis. Nam sed excepturi provident, ipsam sequi nemo necessitatibus possimus eos eum, commodi deleniti, animi illo.',
            'imageName': 'profile.png',
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-105.358887, 39.113014]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'West Virginia',
            'address': '123 Fake St<br>West Virginia, WV 12345',
            'bio': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repudiandae iure suscipit dolore deserunt reiciendis. Nam sed excepturi provident, ipsam sequi nemo necessitatibus possimus eos eum, commodi deleniti, animi illo.',
            'imageName': 'profile.png',
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-80.500000, 39.000000]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'Nevada',
            'address': '123 Fake St<br>Nevada, NV 12345',
            'bio': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repudiandae iure suscipit dolore deserunt reiciendis. Nam sed excepturi provident, ipsam sequi nemo necessitatibus possimus eos eum, commodi deleniti, animi illo.',
            'imageName': 'profile.png',
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-117.224121, 39.876019]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'Montana',
            'address': '123 Fake St<br>Montana, MT 12345',
            'bio': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repudiandae iure suscipit dolore deserunt reiciendis. Nam sed excepturi provident, ipsam sequi nemo necessitatibus possimus eos eum, commodi deleniti, animi illo.',
            'imageName': 'profile.png',
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-109.533691, 46.965260]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'Tennessee',
            'address': '123 Fake St<br>Tennessee, TN 12345',
            'bio': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repudiandae iure suscipit dolore deserunt reiciendis. Nam sed excepturi provident, ipsam sequi nemo necessitatibus possimus eos eum, commodi deleniti, animi illo.',
            'imageName': 'profile.png',
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-86.660156, 35.860119]
        }
    }, {
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'South Dakota',
            'address': '123 Fake St<br>South Dakota, SD 12345',
            'bio': 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, repudiandae iure suscipit dolore deserunt reiciendis. Nam sed excepturi provident, ipsam sequi nemo necessitatibus possimus eos eum, commodi deleniti, animi illo.',
            'imageName': 'profile.png',
        },
        'geometry': {
            'type': 'Point',
            'coordinates': [-100.000000, 44.500000]
        }
    }]
};

var map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
    center: MAP_CENTER,
    zoom: 4
});

// add markers to map
geojson.features.forEach(function(marker) {
    // create a DOM element for the marker
    var el = document.createElement('div');
    el.className = 'marker';
    el.style.width = '50px';
    el.style.height = '50px';

    var popup = new maplibregl.Popup({
            offset: 0,
            setLngLat: [marker.geometry.coordinates[0], marker.geometry.coordinates[1]],
        }) // add popup
        .setHTML(
            '<img src="assets/' + marker.properties.imageName + '" alt=" ' + marker.properties.name + ' " class="marker-image" width="150px" height="150px">' +
            '<h5>' + marker.properties.name + '</h5>' +
            '<p class="address">' + marker.properties.address + '</p>' +
            '<p class="bio">' + marker.properties.bio + '</p>' +
            '<div class=" make-appt "><a href="#">MAKE AN APPOINTMENT</a></div>'
        )

    // add marker to map
    new maplibregl.Marker()
        .setLngLat(marker.geometry.coordinates)
        .setPopup(popup)
        .addTo(map);
});

map.on('click', function(e) {
    if (!(e.originalEvent.target.classList.contains('maplibregl-canvas'))) {
        map.flyTo({
            center: [e.lngLat.lng, e.lngLat.lat - 10],
            zoom: 4
        });
    }
});