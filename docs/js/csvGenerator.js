//Zum generieren einer CSV-Datei die alle Antworten beeinhaltet
//Es müssen in Antworten angegeben werden im Format eines Arrays. Jeder Array-Eintrag sind die Antworten einer Person mit Semikolon getrennt (Also sieht das Array ungefähr so aus: [{"Antwort1";"Antwort2";"usw"}, {"Antwort1";"Antwort2";"usw"}])
//
function generateCSV(antworten) {
    
    let csvContent = "data:text/csv;charset=utf-8,";
        rows.forEach(function(rowArray) {
            let row = rowArray.join(",");
        csvContent += row + "\r\n";
        });
    var encodedUri = encodeURI(csvContent);
        window.open(encodedUri);
    
    //ToDo
};
