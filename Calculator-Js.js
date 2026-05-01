function getNumbers(){
    let sayi1 = Number(document.getElementById("sayi1").value);
    let sayi2 = Number(document.getElementById("sayi2").value);
    return [sayi1, sayi2];
}

function topla(){
    let [sayi1,sayi2] = getNumbers();
    document.getElementById("ekran").innerText ="Sonuç: " + (sayi1 + sayi2)
}

function cikart(){
    let [sayi1,sayi2] = getNumbers();
     document.getElementById("ekran").innerText ="Sonuç: " +  (sayi1 - sayi2)
}

function carp(){
    let [sayi1,sayi2] = getNumbers();
     document.getElementById("ekran").innerText = "Sonuç: " + (sayi1 * sayi2)
}

function bol(){
    let [sayi1,sayi2] = getNumbers();
    if(sayi2 === 0){
        document.getElementById("ekran").innerText = "0'a bölünmez"
    }
    else{
        document.getElementById("ekran").innerText ="Sonuç: " + (sayi1 / sayi2)
    }
     
}
