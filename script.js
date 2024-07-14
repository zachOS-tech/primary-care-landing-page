//#region Populate Map
var MAP_CENTER = [-98.000000, 38.500000];
var geojson = {
    'type': 'FeatureCollection',
    'imageSize': [100, 100],
    'features': [{
        'type': 'Feature',
        'properties': {
            'name': 'Doctor, DO',
            'city': 'Indiana',
            'providerID': 'IN1234',
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
            'providerID': 'AZ1234',
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
            'providerID': 'AR1234',
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
            'providerID': 'CO1234',
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
            'providerID': 'WV1234',
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
            'providerID': 'NV1234',
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
            'providerID': 'MT1234',
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
            'providerID': 'TN1234',
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
            'providerID': 'SD1234',
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
    style: 'https://api.maptiler.com/maps/streets/style.json?key=94k8gIerU8Sh1R2WyXUR',
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
            '<div class="make-appt"><a class="modal-open" data-providerID="' + marker.properties.providerID + '" href="javascript:void(0);" onclick="modalOpen(event);">Make an appointment</a></div>'
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
//#endregion Populate Map

//#region Modal Popup for Form
var modal = document.querySelector(".modal");
var modalOverlay = document.querySelector(".modal-overlay");
var modalClose = document.querySelector(".close");
var form = document.getElementById("MED_PrimaryCare_FY22_WebForm");
var bio = document.querySelector(".modal-bio");

function modalOpen(e) {
    form.addEventListener("submit", setFormRedirect = function(event) {
        event.preventDefault();
        if (validateForm()) {
            window.open(
                "#" + e.target.dataset.providerid,
                "_self"
            );
        }
    });

    bio.innerHTML = '';

    modalOverlay.classList.toggle("closed");
    modal.classList.toggle("closed");
};

function modalOpenWithBio(e) {
    form.addEventListener("submit", setFormRedirect = function(event) {
        event.preventDefault();
        if (validateForm()) {
            window.open(
                "#" + e.target.dataset.providerid,
                "_self"
            );
        }
    });

    for (const provider of geojson.features) {
        if (provider.properties.providerID === e.target.dataset.providerid) {
            bio.innerHTML = '<img src="assets/profile.png" alt="default profile" class="marker-image" width="150px" height="150px">' +
                '<h5>' + provider.properties.name + '</h5>' +
                '<p class="address">' + provider.properties.address + '</p>' +
                '<p class="bio">' + provider.properties.bio + '</p><br>';
            break
        }
    };

    modalOverlay.classList.toggle("closed");
    modal.classList.toggle("closed");
};

modalClose.addEventListener("click", function() {
    modalOverlay.classList.toggle("closed");
    modal.classList.toggle("closed");
    form.removeEventListener("submit", setFormRedirect);
});

//#endregion Modal Popup for Form

//#region Form Validation
var FirstName = document.getElementById("Patient.FirstName");
var LastName = document.getElementById("Patient.LastName");
var Birthdate = document.getElementById("Patient.HC4__BirthdateEnc__c");
var Email = document.getElementById("Patient.Email");
var Phone = document.getElementById("Patient.Phone");
var ZipCode = document.getElementById("Patient.PostalCode");

function validateFirstName() {
    var isValid = true;

    if (FirstName.value == "") {
        FirstName.style.border = "1px solid red";
        isValid = false;
        FirstName.setCustomValidity("First Name must not be blank.");
    } else {
        FirstName.style.border = "1px solid #ced4da";
        FirstName.setCustomValidity("");
    }

    return isValid;
}

function validateLastName() {
    var isValid = true;

    if (LastName.value == "") {
        LastName.style.border = "1px solid red";
        isValid = false;
        LastName.setCustomValidity("Last Name must not be blank.");
    } else {
        LastName.style.border = "1px solid #ced4da";
        LastName.setCustomValidity("");
    }

    return isValid;
}

function validateBirthdate() {
    var isValid = true;

    var birthdate_regex = /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19[2-9]\d|20[0-1]\d)$/;
    if (birthdate_regex.test(Birthdate.value)) {
        Birthdate.style.border = "1px solid #ced4da";
        Birthdate.setCustomValidity("");
    } else {
        Birthdate.style.border = "1px solid red";
        isValid = false;
        Birthdate.setCustomValidity("Birthdate must be in the format MM/DD/YYYY");
    }

    return isValid;
}

function validateEmail() {
    var isValid = true;

    var email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email_regex.test(Email.value)) {
        Email.style.border = "1px solid #ced4da";
        Email.setCustomValidity("");
    } else {
        Email.style.border = "1px solid red";
        isValid = false;
        Email.setCustomValidity("Email must be a valid email address.\nex: email@example.com");
    }

    return isValid;
}

function validatePhone() {
    var isValid = true;

    var phone_regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phone_regex.test(Phone.value)) {
        Phone.style.border = "1px solid #ced4da";
        Phone.setCustomValidity("");
    } else {
        Phone.style.border = "1px solid red";
        isValid = false;
        Phone.setCustomValidity("Phone Number must be 10 digits long.\nex: (219) 555-1234");
    }

    return isValid;
}

function validateZipCode() {
    var isValid = true;

    var zipcode_regex = /^[0-9]{5}$/;
    if (zipcode_regex.test(ZipCode.value)) {
        ZipCode.style.border = "1px solid #ced4da";
        ZipCode.setCustomValidity("");
    } else {
        ZipCode.style.border = "1px solid red";
        isValid = false;
        ZipCode.setCustomValidity("Zip Code must be 5 digits long.\nex: 12345");
    }

    return isValid;
}

function validateForm() {
    var valid = true;

    if (!validateFirstName()) {
        valid = false;
    } else if (!validateLastName()) {
        valid = false;
    } else if (!validateBirthdate()) {
        valid = false;
    } else if (!validateEmail()) {
        valid = false;
    } else if (!validatePhone()) {
        valid = false;
    } else if (!validateZipCode()) {
        valid = false;
    }

    return valid;
}

FirstName.addEventListener("blur", validateFirstName);
LastName.addEventListener("blur", validateLastName);
Birthdate.addEventListener("blur", validateBirthdate);
Email.addEventListener("blur", validateEmail);
Phone.addEventListener("blur", validatePhone);
ZipCode.addEventListener("blur", validateZipCode);
//#endregion Form Validation

//#region Form Formatting
const isNumericInput = (event) => {
    const key = event.keyCode;
    return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
    );
};

const isModifierKey = (event) => {
    const key = event.keyCode;
    return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
            // Allow Ctrl/Command + A,C,V,X,Z
            (event.ctrlKey === true || event.metaKey === true) &&
            (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
};

const enforceFormat = (event) => {
    // Input must be of a valid number format or a modifier key
    if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
    }
};

// Formatting Phone Number
const formatToPhone = (event) => {
    if (isModifierKey(event)) {
        return;
    }

    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
    const area = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6, 10);

    if (input.length >= 6) {
        target.value = `(${area}) ${middle}-${last}`;
    } else if (input.length >= 3) {
        target.value = `(${area}) ${middle}`;
    } else if (input.length > 0) {
        target.value = `(${area}`;
    }
};

// Formatting Birthdate
const formatToDate = (event) => {
    if (isModifierKey(event)) {
        return;
    }

    const target = event.target;
    const input = event.target.value.replace(/\D/g, '').substring(0, 8); // First eight digits of input only
    const month = input.substring(0, 2);
    const day = input.substring(2, 4);
    const year = input.substring(4, 8);

    if (input.length > 3) {
        target.value = `${month}/${day}/${year}`;
    } else if (input.length > 1) {
        target.value = `${month}/${day}`;
    } else if (input.length >= 0) {
        target.value = `${month}`;
    }
};

Phone.addEventListener('keydown', enforceFormat);
Phone.addEventListener('keyup', formatToPhone);
Birthdate.addEventListener('keydown', enforceFormat);
Birthdate.addEventListener('keyup', formatToDate);
//#endregion Form Formatting