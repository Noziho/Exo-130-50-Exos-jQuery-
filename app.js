let firstButton = $('#firstButton');
firstButton.click(() => {
    printing();
});


let checkbox = $('#checkbox');

if (checkbox.prop('value', '')) {
    firstButton.prop('disabled', true);
}

checkbox.click(() => {
    checkbox.prop('value', 'check');
    if (checkbox.prop('value', 'check')) {
        firstButton.prop('disabled', false);
    }
})
$('img').each(function () {
    fetch($('img').src)
        .then(response => response)
        .then(response => {
            console.log(response.status);
            if (response.status === 404) {
                $('img').css('display', 'none');
            }

        })

})

setInterval(function () {
    $('#firstSpan').toggleClass('red');
}, 2000);

let removeStyle = $("tr:odd");
removeStyle.css("background", "#ededed");

function printing() {
    window.print();
}

function textArea(nbrCaract) {
    $('#firstTextArea').attr('maxlength', nbrCaract);
}

textArea(5);

let body = $('body');
body.append("<div id='monDiv'>Mon div</div>");
let color = ["green", "blue", "#222", "white", "yellow", "gray"];
let background = ["green", "blue", "#222", "white", "yellow", "gray", "red", "violet"];

$('#color').click(() => {
    let random = Math.floor(Math.random() * color.length);
    $('#monDiv').css({
        'color': color[random],
    })
});

$('#background').click(() => {
    let random2 = Math.floor(Math.random() * background.length);
    $('#monDiv').css({
        'background': background[random2],

    })
});

$('#mooveDiv').click(() => {
    $('body').append('<div id="containDiv">Mon div qui va contenir le premier div</div>');
    $('#containDiv').append($('#monDiv'));
});

let Voiture = {
    nom: "0 inspi",
    couleur: "rouge",
    nombreDeRoues: "42"
}

$.each(Voiture, function (property, value) {
    let body = $('body');
    body.append(property + " => " + value + "<br>");
})

function newLi() {
    $('ol').append('<li>Un autre li </li>');
}

newLi();
newLi();

function deleteOption() {
    $('option').remove();
    $('#firstSelect').append('<option>new Option</option>');
}

deleteOption();

function underlineP() {

    $('p').css('text-decoration', 'underline');
}

underlineP();

$('#recupValue').click(function () {
    console.log($('#firstInput').val());
})

function removeAllClass (element) {
    element.removeClass();
}

removeAllClass($('#removeClass'));

removeStyle.css("background", "");

/*body.mousedown(function(event) {
    switch (event.which) {
        case 1:
            alert('Le clique gauche à été click');
            break;
        case 3:
            alert('Le clique droit à été click');
            break;
    }
}); */

body.keypress(function (event) {
    if (event.key === "Enter") {
        alert("A4A4A4");
    }
})

function returnLenghtTable () {
    console.log($('#myTable tr').length);
}

returnLenghtTable();

function returnValueTextArea () {
    console.log($('#firstTextArea').val());
}

returnValueTextArea();

function addRadioElement () {
    $('#myForm').append('<input type="radio">');
}

addRadioElement();

function returnPositionAbso () {
    console.log($('#absolute').offset())
}

returnPositionAbso();

function fullMaj (elem) {
    elem.css('text-transform', 'uppercase');
}

fullMaj($('#fullMaj'));

function modiftextArea () {
    if ($('#firstTextArea').length >= 0) {
        alert('Le textArea à été modifié fripouille');
    }
}

modiftextArea();