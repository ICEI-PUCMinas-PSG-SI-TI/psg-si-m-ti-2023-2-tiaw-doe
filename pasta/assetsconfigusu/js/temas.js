let root = document.querySelector(":root")
let tema = "claro"

root.style.setProperty('--secundaria_atual', 'var(--secundaria_temaclaro)');

function trocarTema(tema, index){
    botoes = document.querySelectorAll(".alterarExibicao")
    botoes[0].classList.remove("temaAtivo")
    botoes[1].classList.remove("temaAtivo")
    botoes[index].classList.add("temaAtivo")

    root.style.setProperty('--primaria_atual', `var(--primaria_tema${tema})`);
    root.style.setProperty('--secundaria_atual', `var(--secundaria_tema${tema})`);    
    root.style.setProperty('--fonte_atual', `var(--fonte_tema${tema})`);    
}