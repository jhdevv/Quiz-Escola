const form = document.querySelector("form");
const h2 = document.querySelector("pre");
const Texto_Abandono = "O abandono paterno e materno pode gerar diversos malefícios sérios e profundos, tanto no aspecto emocional quanto no \n psicológico, social e até físico. A seguir, explico os principais impactos \n\n\n--- \n\n\n🔴 Malefícios do abandono paterno ou materno \n\n 1. Problemas emocionais e psicológicos \n\n Baixa autoestima: a criança pode achar que não é digna de amor. \n Ansiedade e depressão: a ausência dos pais pode causar tristeza profunda, angústia e medo de rejeição. \n\n Sentimento de culpa: muitas crianças acham que são responsáveis pelo abandono. \n\n Raiva e agressividade: podem surgir como defesa ou forma de expressar dor. \n\n 2. Dificuldades de relacionamento \n Medo de criar laços: por insegurança ou medo de abandono novamente. \n\n Dificuldade de confiar nos outros: inclusive em amizades e relacionamentos amorosos. \n\n Carência afetiva: busca constante de atenção ou aprovação. \n\n 3. Consequências sociais e futuras \n\n Dificuldade de projetar o futuro: insegurança sobre o próprio valor ou capacidade. \n\n Risco maior de envolvimento com criminalidade ou drogas: especialmente em contextos vulneráveis. \n\n Reprodução do ciclo de abandono: filhos abandonados podem ter dificuldade em se tornarem pais presentes."
const Texto_Ansiedade = "Ansiedade: \n\n Ansiedade é uma emoção natural do ser humano, caracterizada por sentimentos de preocupação, nervosismo e desconforto, \n especialmente em situações de incerteza ou perigo. \n\n Sintomas da ansiedade: \n\n\ Físicos: \n\n Palpitações, sudorese, tremores, falta de ar, tontura, dor no peito, tensão muscular. \n\n Emocionais: \n\n Preocupação excessiva, irritabilidade, dificuldade de concentração, medo constante. \n\n Comportamentais: \n\n Evitação de situações temidas, dificuldade para dormir, mudanças no apetite. \n\n Tratamento da ansiedade: \n\n Psicoterapia: Ajuda a entender e lidar com as causas da ansiedade. \n\n Medicação: \n\n Medicamentos prescritos por um médico, para aliviar os sintomas. \n\n Terapia combinada: \n\n Combinação de psicoterapia e medicação. \n\n Depressão: \n\n A depressão é um transtorno mental sério que afeta o humor, os pensamentos e o comportamento, causando  sentimentos persis-\n-tentes de tristeza, perda de interesse em atividades, fadiga e outros sintomas que podem interferir nas atividades diárias \n\n Tratamento: \n\n A depressão pode ser tratada com sucesso através de terapias psicológicas, medicamentos ou uma combinação de ambos. \n\n Causas: \n\n A depressão pode ser causada por uma combinação de fatores genéticos, biológicos, ambientais e psicológicos."


form.Op1.addEventListener("click", e => {

    const gamer = form.Op1.value

    if(gamer){
        h2.style.display = "Block";
        h2.innerText = "EM BREVE..."
    }
e.preventDefault();
})

form.Op2.addEventListener("click", e => {

    const gamer = form.Op2.value

    if(gamer){
        h2.style.display = "Block";
        h2.innerText = "EM BREVE..."
    }
    e.preventDefault();
})

form.Op3.addEventListener("click", e => {

    const gamer = form.Op3.value

    if(gamer){
        h2.style.display = "Block";
        h2.innerText = Texto_Ansiedade;
    }
e.preventDefault();
})

form.Op4.addEventListener("click", e => {

    const gamer = form.Op4.value

    if(gamer){
        h2.style.display = "Block";
        h2.innerText = Texto_Abandono;
    }
    e.preventDefault();
})

form.addEventListener("reset", e => {

    h2.innerText = ""
    e.preventDefault
})
