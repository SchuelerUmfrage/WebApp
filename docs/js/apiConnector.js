
//Um die bereits abgespeicherten Antworten zu einer Email zu bekommen
//Es wird die verifizierte Email (string) ben�tigt
//In der Response sind die Antworten als Stringarray enthalten
function getData(email) {
    var settings = {
        "url": "https://niklasdeegapi.azurewebsites.net/ProjectM?email=" + email,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Cookie": "ARRAffinity=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17; ARRAffinitySameSite=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17"
        },
    };

    return settings;
};

//Zum Abspeichern der Antworten
//Es wird die verifizierte Email (string) und die Antworten als Stringarray ben�tigt
//Es wird die Antwort der API returned, diese kann dem User angezeigt werden
function postData(email, antworten) {

    var settings = {
        "url": "https://niklasdeegapi.azurewebsites.net/ProjectM",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Cookie": "ARRAffinity=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17; ARRAffinitySameSite=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17"
        },
        "data": JSON.stringify({
            "email": email,
            "postInfo": antworten
        }),
    };

    return settings;
};

//Zum erneuten Anfordern des Codes zum Verifizieren der Email
//Hier muss die Email als Parameter angegeben werden
//Es wird die Antwort der API returned, diese kann dem User angezeigt werden
function postEmailCodeAgain(email) {
    var settings = {
        "url": "https://niklasdeegapi.azurewebsites.net/ProjectM/PostEmailCodeAgain",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify(email),
    };

    return settings;
};


//Löscht alle Antworten in der DB
//Es muss das entsprechende Passwort mitgegeben werden
//Beim Erfolg wird "success" returned
function deleteAllAnswers(password) {
    var settings = {
        "url": "https://niklasdeegapi.azurewebsites.net/ProjectM?password=" + password,
        "method": "DELETE",
        "timeout": 0,
        "headers": {
            "Cookie": "ARRAffinity=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17; ARRAffinitySameSite=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17"
        },
    };

    return settings;
};

//Gibt alle Antworten aus der DB im Format eines Arrays zurück. Jeder Array-Eintrag sind die Antworten einer Person mit Semikolon getrennt (Also sieht das Array ungefähr so aus: [{"Antwort1";"Antwort2";"usw"}, {"Antwort1";"Antwort2";"usw"}])
//Es muss das entsprechende Passwort mitgegeben werden
//Beim Erfolg wird "success" returned
function getAllSurveys(password, error, success) {
    var settings = {
        "url": "https://niklasdeegapi.azurewebsites.net/ProjectM/GetAllSurveys?password=" + password,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Cookie": "ARRAffinity=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17; ARRAffinitySameSite=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17"
        },
    };

    return settings;
};


//Zum Anfordern des Codes zum Verifizieren der Email
//Hier muss die Email als Parameter angegeben werden
//Es wird die Antwort der API returned, diese kann dem User angezeigt werden
function postEmail(email) {
    var settings = {
        "url": "https://niklasdeegapi.azurewebsites.net/ProjectM/PostEmail",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Cookie": "ARRAffinity=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17; ARRAffinitySameSite=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17"
        },
        "data": JSON.stringify(email),
    };

    return settings;
};

//Zum Verifizieren der Email
//Hier muss die Email als Parameter angegeben werden, sowie der Code den man per Mail erhalten hat
//Es wird die Antwort der API returned, diese kann dem User angezeigt werden
function verifyEmail(email, code) {
    var settings = {
        "url": "https://niklasdeegapi.azurewebsites.net/ProjectM/VerifyEmail?email=" + email,
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Cookie": "ARRAffinity=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17; ARRAffinitySameSite=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17"
        },
        "data": JSON.stringify(code),
    };

    return settings;
};

function ajaxCall(settings) {
    return $.ajax(settings);
}