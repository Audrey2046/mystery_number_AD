 let numeroMystere = Math.floor(Math.random() * 10) + 1; // Générer un nombre entre 1 et 10
    let essaisRestants = 3; // Nombre d'essais restant
    let jeuTermine = false;

    function verifier() { // Vérifier la réponse de l'utilisateur
        if (jeuTermine) return;

        const saisie = document.getElementById("guess").value;
        const message = document.getElementById("message");
        const nombre = parseInt(saisie);

        if (isNaN(nombre) || nombre < 1 || nombre > 10) { // Vérifier si le nombre est entre 1 et 10
            message.textContent = "Veuillez entrer un nombre entre 1 et 10.";
            message.className = "message error";
            return;
        }

        essaisRestants--; // Réduire le nombre d'essais restants

        if (nombre === numeroMystere) { // Le numéro est trouvé
            message.textContent = "Bravo ! Tu as trouvé le numéro mystère 🎉";
            message.className = "message success";
            jeuTermine = true;
            document.getElementById("rejouer").style.display = "inline-block"; // Affiche le bouton "rejouer"
        } else {
            let indice = "";
            if (nombre < numeroMystere) {
                indice = "C'est plus."; // Affichage de l'indice
            } else {
                indice = "C'est moins."; // Affichage de l'indice
            }
    
            if (essaisRestants > 0) { // S'il reste des essais
                message.textContent = `Mauvais numéro. Il te reste ${essaisRestants} essai(s). ${indice}`; // Affichage essais restant et indices
                message.className = "message info";
            } else { // S'il ne reste plus d'essais
                message.textContent = `Dommage ! Le numéro mystère était ${numeroMystere}.`;
                message.className = "message error";
                jeuTermine = true;
                document.getElementById("rejouer").style.display = "inline-block"; // affiche le bouton rejouer
            }
        }
    }

    function reinitialiser() { // Réinitialiser les variables 
        numeroMystere = Math.floor(Math.random() * 10) + 1;
        essaisRestants = 3;
        jeuTermine = false;
        document.getElementById("message").textContent = ""; // Enlève les messages
        document.getElementById("guess").value = ""; // Supprime le nombre saisi
        document.getElementById("rejouer").style.display = "none"; // Masquer le bouton rejouer
        message.className = "message";
    }