let input = document.querySelector("#total");
let valueOfSum = document.querySelector("#valueOfSum");
let summaVklada;
let radioBox = document.getElementsByName("choose");


function calculation(){

    valueOfSum.value = Number(document.getElementById("rangeOfSum").value);

    if(radioBox[0].checked){ 

            summaVklada = Number(document.getElementById("rangeOfSum").value);
            let stavka = Number(document.getElementById("rate").value);
            let srokVklada = Number(document.getElementById("timeOfDeposite1").value);
            let totalPer = (summaVklada * stavka * srokVklada / 365)/100;
            let totalSum = summaVklada + totalPer;    
            input.innerHTML = 
                "<p style=\"text-align: center\">Сумма процента по вкладу:<br>" 
                + totalPer.toFixed(2) + " руб. <br> Общая сумма: <br>" + totalSum.toFixed(2) + " руб. </p>";

        } else {

            summaVklada = Number(document.getElementById("rangeOfSum").value);
            let stavka = Number(document.getElementById("rate").value);
            let srokVklada = Number(document.getElementById("timeOfDeposite2").value);
            for(let i = 0; i < srokVklada; i++){
                let total = (summaVklada * stavka * 30 / 365)/100;
                summaVklada += total;
            }
            let persents = summaVklada - valueOfSum.value;
            input.innerHTML = 
                "<p style=\"text-align: center\">Сумма процента по вкладу:<br>" 
                + persents.toFixed(2) + " руб. <br> Общая сумма: <br>" + summaVklada.toFixed(2) + " руб. </p>";  

        }       
    }


function changeRange(){
    
    if(valueOfSum.value != summaVklada){
        document.getElementById("rangeOfSum").value = valueOfSum.value;
    }

}

function visibleMenu(){
    if(radioBox[0].checked){
        document.querySelector("#daysOfDeposite").style.display = "inline";
        document.querySelector("#monthsOfDeposite").style.display = "none";
    } else {
        document.querySelector("#daysOfDeposite").style.display = "none";
        document.querySelector("#monthsOfDeposite").style.display = "inline";
    }
}
