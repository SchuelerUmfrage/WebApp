
//Um die bereits abgespeicherten Antworten zu einer Email zu bekommen
//Es wird die verifizierte Email (string) benötigt
//In der Response sind die Antworten als Stringarray enthalten
function getData(email)
  {
      var settings = {
          "url": "https://niklasdeegapi.azurewebsites.net/ProjectM?email=" + email,
          "method": "GET",
          "timeout": 0,
          "headers": {
              "Cookie": "ARRAffinity=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17; ARRAffinitySameSite=22a7daa836b64a8ce56c907737553d08297ff2e76cd06a1f52c29956b9a85c17"
          },
      };

      $.ajax(settings).done(function (response) {
          console.log(response);
          return response;
      });
};

//Zum Abspeichern der Antworten
//Es wird die verifizierte Email (string) und die Antworten als Stringarray benötigt
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

    $.ajax(settings).done(function (response) {
        console.log(response);
        return response;
    });
};

//Zum erneuten Anfordern des Codes zum Verifizieren der Email
//Hier muss die Email als Parameter zurückgegeben werden
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

    $.ajax(settings).done(function (response) {
        console.log(response);
        return response;
    });
};
  