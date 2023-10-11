  function getData()
  {
    var settings = {
        "url": "https://niklasdeegapi.azurewebsites.net/ProjectM",
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
  }
  