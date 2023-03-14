const form_submit_button = document.querySelector("#form_submit_button")

form_submit_button.addEventListener("click", function(e) {
        e.preventDefault();
        const form_dados = {
            nome: document.querySelector("#nome").value,
            email: document.querySelector("#email").value,
            numero: document.querySelector("#numero").value,
            data_ida: document.querySelector("#data-ida").value,
            data_volta: document.querySelector("#data-volta").value,
            origem: document.querySelector("#origem").value,
            destino: document.querySelector("#destino").value,
            infantil: pegarRadio(),
            preferencias: []
        }

        function pegarRadio() {
            const radioButtons = document.querySelectorAll('input[name="infantil"]');
            let selectedIndex = -1;
          
            for (let i = 0; i < radioButtons.length; i++) {
              if (radioButtons[i].checked) {
                selectedIndex = i;
              }
            }
          
            if (selectedIndex === 0) {
                return "Com cama"
            } else {
                return "Sem cama"
            }
        }

        const quadradinhos = document.querySelectorAll("input[name='preferencias']")
        if (quadradinhos[0].checked) {
            form_dados.preferencias.push("Piscina")
        }
        if (quadradinhos[1].checked) {
            form_dados.preferencias.push("Wi-fi")
        }
        if (quadradinhos[2].checked) {
            form_dados.preferencias.push("Garagem")
        }
        if (quadradinhos[3].checked) {
            form_dados.preferencias.push("Suite")
        }

        console.table(form_dados);
        localStorage.setItem("form_dados", JSON.stringify(form_dados));
});








