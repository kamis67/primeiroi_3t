alerta ("Oi! Eu sou o Alerta");
document.write("Estou na página.");
console.log("Eu estou no console.");
deixetabuada=5;
funçãoalo(){
    deixetabuada=documento. getElementById("entrada"). valor;

    documento. escrever ("<h1>Tabuada do "+tabuada+"</h1>");
    documento. escrever (tabuada+" x 1 = "+(tabuada*1)+"<br>");
    documento. escrever (tabuada+" x 2 = "+(tabuada*2)+"<br>");
    documento. escrever (tabuada+" x 3 = "+(tabuada*3)+"<br>");
    documento. escrever (tabuada+" x 4 = "+(tabuada*4)+"<br>");
    documento. escrever (tabuada+" x 5 = "+(tabuada*5)+"<br>");
    documento. escrever (tabuada+" x 6 = "+(tabuada*6)+"<br>");
    documento. escrever (tabuada+" x 7 = "+(tabuada *7)+"<br>");
    documento. escrever (tabuada+" x 8 = "+(tabuada *8)+"<br>");
    documento. escrever (tabuada+" x 9 = "+(tabuada*9)+"<br>");
    documento. escrever (tabuada+" x 10 = "+(tabuada*10));
       
}
funçãoescreva(){
  para(vari=1; i<=10; eu++){
     para(varj=1; j<=10; j++){
documento. write(i+" x "+j+" = "+(j*i)+"<br>");
     }
    documento. escrever ("<br>");
 }

}
funçãomoeda (atual){
    retornoatual. toLocaleString ('pt-br',{style:'currency',currency:'BRL'});
}
total função(){
    deixeval=documento. getElementById("valor"). valor;
    deixeju=documento. getElementById("juros"). valor;
    
    deixet=documento. getElementById("meses"). valor;
    deixarresultado=0;
    deixesaida = "";
    para(deixem=1; m<=t; m++){
        resultado = (val * ((ju/100)+1));
        val = resultado;
        saida += "Mês" + m + ":" + moeda(val) + "<br>";
        document.write("Mês " + m + " valor de " + moeda(val) + "<br>");
    }
    documento. getElementById("mes"). innerHTML=saida
    documento. getElementById("resultado"). innerHTML="Total: "+moeda(resultado);
   document.write("O total é de: " + moeda(resultado));
}
