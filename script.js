 let numeroMystere = Math.floor(Math.random() * 10) + 1;
    let essaisRestants = 3;
    let jeuTermine = false;

    function verifier() {
        if (jeuTermine) return;

        const saisie = document.getElementById("guess").value;
        const message = document.getElementById("message");
        const nombre = parseInt(saisie);

        if (isNaN(nombre) || nombre < 1 || nombre > 10) {
            message.textContent = "Veuillez entrer un nombre entre 1 et 10.";
            message.className = "message error";
            return;
        }

        essaisRestants--;

        if (nombre === numeroMystere) {
            message.textContent = "Bravo ! Tu as trouvé le numéro mystère 🎉";
            message.className = "message success";
            jeuTermine = true;
            document.getElementById("rejouer").style.display = "inline-block";
        } else {
            if (essaisRestants > 0) {
                message.textContent = `Mauvais numéro. Il te reste ${essaisRestants} essai(s).`;
                message.className = "message info";
            } else {
                message.textContent = `Dommage ! Le numéro mystère était ${numeroMystere}.`;
                message.className = "message error";
                jeuTermine = true;
                document.getElementById("rejouer").style.display = "inline-block";
            }
        }
    }

    function reinitialiser() {
        numeroMystere = Math.floor(Math.random() * 10) + 1;
        essaisRestants = 3;
        jeuTermine = false;
        document.getElementById("message").textContent = "";
        document.getElementById("guess").value = "";
        document.getElementById("rejouer").style.display = "none";
        message.className = "message";
    }