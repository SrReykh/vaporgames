tailwind.config = {
    theme: {
        extend: {
            colors: {
                dark: "#08090D",
                lightdark: "#1A1E26"
            }
        }
    }
}

const btnCadastrar = document.getElementById("btn-cadastrar");
const lista = document.getElementById("lista");
const btnShow = document.getElementById("btn-show");

btnShow.addEventListener('click', () => {
    if (lista.classList.contains("hidden")) {
        lista.classList.remove("hidden")
    } else {
        lista.classList.add("hidden")
    }
});

btnCadastrar.addEventListener('click', () => {
    var nomeUsuario = document.getElementById("nomeUsuario").value

    var li1 = document.createElement("li");
    li1.innerHTML = nomeUsuario;
    li1.className = "text-white"
    lista.appendChild(li1);
    console.log(li1)
});
