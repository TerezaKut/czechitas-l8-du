/*
Místo pro váš program
*/
function JustFood(persons) {
    let cena = persons * 100;
    return 'catering od JustFood pro ' + persons + ' lidí za '+ cena + ' Kč';
}

function YourMama(persons){
    let cena = persons * 500;
    return 'catering od YourMama pro ' + persons + ' lidí za '+ cena + ' Kč';
}

function FlavourHaven(persons){
    let cena = persons * 3000;
    return 'catering od FlavourHaven pro ' + persons + ' lidí za '+ cena + ' Kč';
}

function createEvent(event, persons, catering){
    return 'Událost ' + event + ' ' + catering(persons);
}

