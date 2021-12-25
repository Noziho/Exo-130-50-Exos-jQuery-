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

$("tr:odd").css("background", "#ededed");

function printing () {
    window.print();
}

function textArea (nbrCaract) {
    $('#firstTextArea').attr('maxlength', nbrCaract);
}

textArea(5);

$('body').append("<div id='monDiv'>Mon div</div>");
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
    nom : "0 inspi",
    couleur : "rouge",
    nombreDeRoues : "42"
}

$.each(Voiture, function (property, value) {
    $('body').append(property + " => " + value + "<br>");
})










