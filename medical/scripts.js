document.addEventListener('DOMContentLoaded', function() {
    const judete = document.querySelectorAll('.judet');
    const popup = document.querySelector('.popup');
    const close = document.querySelector('.close');
    const cliniciContainer = document.getElementById('clinici-container');
    const formClinica = document.getElementById('form-clinica');
    const submitBtn = document.getElementById('submit');

    // Datele despre clinici pentru fiecare județ
    const cliniciData = {
        arad: ['Clinica Arad 1', 'Clinica Arad 2', 'Dispensar Arad'],
        bihor: ['Spital Bihor', 'Clinica Bihor', 'Dispensar Bihor'],
        constanta: ['Clinica Constanta', 'Dispensar Constanta'],
        alba: ['Spital Alba', 'Clinica Alba', 'Dispensar Alba'],
        brasov: ['Spital Brasov', 'Clinica Brasov', 'Dispensar Brasov']
        // Adăugați alte județe și clinici aici
    };

    judete.forEach(judet => {
        judet.addEventListener('click', function() {
            const id = judet.id;
            const clinici = cliniciData[id];
            cliniciContainer.innerHTML = '';
            if (clinici) {
                clinici.forEach(clinica => {
                    const button = document.createElement('button');
                    button.textContent = clinica;
                    button.addEventListener('click', function() {
                        formClinica.style.display = 'block';
                        // Setăm informația clinicii în formular
                        document.getElementById('clinica-selectata').textContent = clinica;
                    });
                    cliniciContainer.appendChild(button);
                });
            }
            popup.style.display = 'block';
            formClinica.style.display = 'none';
        });
    });

    if (close) {
        close.addEventListener('click', function() {
            popup.style.display = 'none';
        });
    }

    if (submitBtn) {
        submitBtn.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenim trimiterea formularului

            // Obținem valorile din formular
            const nume = document.getElementById('nume').value;
            const prenume = document.getElementById('prenume').value;
            const telefon = document.getElementById('telefon').value;
            const cnp = document.getElementById('cnp').value;
            const statut = document.getElementById('statut').value;
            const calendar = document.getElementById('calendar').value;
            const varsta = document.getElementById('varsta').value;
            const simptome = document.getElementById('simptome').value;

            // Salvăm pacientul utilizând localStorage
            adaugaPacientLocalStorage(nume, prenume, telefon, cnp, statut, calendar, varsta, simptome);

            // Resetăm formularul
            formClinica.reset();

            // Afișăm mesaj de succes sau alte acțiuni dorite
            alert('Formularul a fost trimis cu succes!');

            // Redirecționăm utilizatorul către pagina doctor.html
            window.location.href = 'doctor.html';
        });
    }
});
