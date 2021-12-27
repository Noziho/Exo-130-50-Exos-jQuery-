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
let recupValue = $('#recupValue');
recupValue.click(function () {
    console.log($('#firstInput').val());
})

function removeAllClass(element) {
    element.removeClass();
}

let removeClass = $('#removeClass');
removeAllClass(removeClass);

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

function returnLenghtTable() {
    console.log($('#myTable tr').length);
}

returnLenghtTable();

function returnValueTextArea() {
    console.log($('#firstTextArea').val());
}

returnValueTextArea();

function addRadioElement() {
    $('#myForm').append('<input type="radio">');
}

addRadioElement();

function returnPositionAbso() {
    console.log($('#absolute').offset())
}

returnPositionAbso();

function fullMaj(elem) {
    elem.css('text-transform', 'uppercase');
}

fullMaj($('#fullMaj'));

function modiftextArea() {
    if ($('#firstTextArea').length >= 0) {
        alert('Le textArea à été modifié fripouille');
    }
}

$('table tr').get(0).remove();

function changeTextButton(text) {
    recupValue.html(text);
}

changeTextButton('Log value');

function addOption(text) {
    $('#firstSelect').append(`<option>${text}</option>`);
}

addOption('A4A4A4');

function backgroundElement(elem, color) {

    elem.css('background', color);
}

backgroundElement($('div'), 'red');

function allLineExceptFirst() {

    $("#myTable").find("tr:gt(0)").remove();
}

allLineExceptFirst();

function recupCurentValue() {
    let select = $('#firstSelect').val();
    console.log(select);
}

recupCurentValue();

function disabledLink(monLien) {
    monLien.click(function (event) {
        event.preventDefault();
    })
}

disabledLink($('#monLink'));

removeClass.toggleClass('maClasse', 'red');

$('#addStyle').addClass('red');

function nbrChild() {

    console.log("Nombre d'enfant du div #selected: " + $('#selected').children().length);
}

nbrChild();

function onlyNumber() {
    $("#firstTextArea").keyup(function (event) {
        let value = $(this).val();
        value = value.replace(/[^0-9\\.]+/g, '');
        $(this).val(value);
    });
}

onlyNumber();

function checkedJquery() {
    if ($) {
        alert("La version de Jquery actuellement chargée est: 3.6.0")
    }
}


function deleteLine() {
    $("#myTable2").find("tr:gt(3)").remove();
}

deleteLine();

function inputTextValue() {
    $('#firstInput').val('Ma valeur add avec ma fonction');
}

inputTextValue();

function defText(elem, text) {
    elem.text(text);
}

defText($('#forFunctionDefText'), "Mon texte add avec la fonction");

function returnClass (elem) {
    elem.click(function () {
        console.log("Mes classes sont: " + elem.attr('class'));
    })
}

returnClass($('#returnClass'));

function addHref (elem) {
    elem.attr('href', 'https://google.com', 'https://google.com');
}

addHref($('#forFunctionAddHref'));

function deleteDisabledAttr (elem) {
    elem.removeAttr('disabled');
}

deleteDisabledAttr($('#myDisabledButton'));

function returnWidth (elem) {
    console.log(elem.width() + " px sans le padding et margin");

}
let width = $('#width')

returnWidth(width);

function animateElem (elem) {
    elem.mouseover(function () {
        width.animate({
            width: "+=10%"
        }, 10000);
    })
}

animateElem(width);

function addAttributeAndValue (elem, attribut, valeur) {
    elem.attr(attribut, valeur);
}

addAttributeAndValue($('#lastConsigne'), 'href', 'https://google.com');
