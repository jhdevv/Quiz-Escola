const form = document.querySelector("form");
const h2 = document.querySelector("pre");
const Pergunta = document.querySelector("#Pergunta")

const Perguntas = [
    "Quando a ansiedade passa a ser considerada um fator de risco para depressão?", 
    "O que caracteriza o abandono afetivo no Brasil?", 
    "Qual dos sintomas abaixo é um dos mais comuns da depressão?",
    "Qual droga é considerada depressora do sistema nervoso central?"
]

form.Op1.addEventListener("click", e => {
    if(Perguntas.includes("Quando a ansiedade passa a ser considerada um fator de risco para depressão?")){
       
       Perguntas.shift();
       Pergunta.innerText = Perguntas[0]
       form.Op1.value = "Não levar o filho ao cinema ou festas"
       form.Op2.value = "Ausência de cuidado, afeto \n e convivência, mesmo com \n pensão paga"
       form.Op3.value = "Apenas o não pagamento da pensão alimentícia"
       form.Op4.value = "A criança morar longe dos avós"
       h2.innerText = "";
    }else{
       h2.style.color = "orange";
       h2.style.fontWeight = "bold";
       h2.innerHTML = `❌ Essa não é a resposta correta.<br>
       🌱 Não tem problema, faz parte do aprendizado!<br><br>
       📞 Se precisar de apoio emocional:<br>
       • Ligue <strong>188</strong> (CVV – 24h, gratuito)<br>
       • Procure um <strong>CAPS</strong> na sua cidade<br>
       • Ligue <strong>136</strong> para informações do SUS<br>`;

      h2.scrollIntoView({ behavior: "smooth", block: "center" });
    }
    e.preventDefault();
})

form.Op2.addEventListener("click", e => {
    if(Perguntas.includes("O que caracteriza o abandono afetivo no Brasil?") && 
       Perguntas.includes("Quando a ansiedade passa a ser considerada um fator de risco para depressão?") == false){
       
       Perguntas.shift();
       Pergunta.innerText = Perguntas[0]
       form.Op1.value = "Euforia constante"
       form.Op2.value = "Aumento de foco e produtividade"
       form.Op3.value = "Retardo motor e fadiga extrema"
       form.Op4.value = "Insônia apenas em jovens"
       h2.innerText = "";
    }else{
       h2.style.color = "orange";
       h2.innerHTML = `❌ Ops, quase lá!<br>
       Continue tentando, você está aprendendo!<br><br>
       📞 Apoio emocional:<br>
       • Ligue 188 (CVV)<br>
       • CAPS em sua cidade<br>
       • Disque 136 (SUS)<br>`;

      h2.scrollIntoView({ behavior: "smooth", block: "center" });
    }    
    e.preventDefault();
})

form.Op3.addEventListener("click", e => {
    if(Perguntas.includes("Qual dos sintomas abaixo é um dos mais comuns da depressão?") && 
       Perguntas.includes("O que caracteriza o abandono afetivo no Brasil?") == false){
       
       Perguntas.shift();
       Pergunta.innerText = Perguntas[0]
       form.Op1.value = "Cocaína"
       form.Op2.value = "Maconha"
       form.Op3.value = "LSD"
       form.Op4.value = "Álcool"
       h2.innerText = "";
    }else{
       h2.style.color = "orange";
       h2.innerHTML = `❌ Não foi dessa vez 😅<br>
       Mas cada erro é uma chance de aprender!<br><br>
       📞 Apoio disponível:<br>
       • 188 (CVV – 24h)<br>
       • CAPS em sua cidade<br>
       • 136 (SUS)<br>`;

      h2.scrollIntoView({ behavior: "smooth", block: "center" });
    }  
    e.preventDefault();
})

form.Op4.addEventListener("click", e => {
     if(Perguntas.includes("Qual droga é considerada depressora do sistema nervoso central?") && 
        Perguntas.includes("Qual dos sintomas abaixo é um dos mais comuns da depressão?") == false){
       h2.style.color = "green";
       h2.innerText = "🎉 Você acertou todas! Continue cuidando de você e apoiando quem precisa.";
       
       Perguntas.unshift("🎉 Parabéns! Você concluiu o quiz!");
       Pergunta.innerText = Perguntas[0]
       h2.innerText = "";
       form.Op1.disabled = true;
       form.Op2.disabled = true;
       form.Op3.disabled = true;
       form.Op4.disabled = true;
     }else{
       h2.style.color = "orange";
       h2.innerHTML = `❌ Essa não está correta.<br>
       Mas não desanime, tente novamente!<br><br>
       📞 Precisa conversar?<br>
       • 188 (CVV)<br>
       • CAPS em sua cidade<br>
       • 136 (SUS)<br>`;

      h2.scrollIntoView({ behavior: "smooth", block: "center" });
     }  
    e.preventDefault();
})
