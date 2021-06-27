console.log("Działa zewnętrzny plik JS")

const example = () => {
    fetch('/posts',{
        method: 'GET'
    }).then(
        function (response){
            if (response){
                response.json().then( function(data) {
                    console.log(data)
                    document.getElementById("danePobrane1").innerText = data[0].name
                    document.getElementById("danePobrane2").innerText = data[0].age
                    document.getElementById("danePobrane3").innerText = data[0].rank
                })
                console.log("odczyt z bazy")
                return 
            }
            throw new Error("błąd odczytu danych")
        }
    ).catch(function(err){
        console.log(err)
    })
}

document.getElementById("btn").addEventListener("click", example)