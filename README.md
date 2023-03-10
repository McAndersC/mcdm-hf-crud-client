# Backoffice Client til Node Server.

I denne opgave skal vi udarbejde vores frontend til serveren.
Vi kalder det "backoffice" da det er vores mulighed for at arbejde med vores server data, oprette brugere osv. Så i virkeligheden er det et lille CMS til at oprette, redigere og slette vores data.

Da vi arbejde med backend, database osv. så kalder vi formålet CRUD - Create, Read, Update og Delete.

I denne opgave, er html, css og js filerne oprettet. 

Men vi mangler indhold på de forskellige sider. 

Vi tager det i følgende rækkefølge.

1. Create Side (/users/create.html).

    * På denne side skal i oprette en ```<form>``` med følgende inputs.
        1. Navn (name)
        2. Brugernavn (username)
        3. Email (email)
        4. Password (password)
    * Form felterne skal have Labels
    * Form felterne skal må gerne HTML5 valideres.

2. Read Side (/users/read.html).
    * På denne side skal i lave en liste over vores brugere.
        1. I skal bare "hardcode" en liste med "dummy" brugere.
        2. Hver bruger i listen skal vise
            1. Et navn
            2. Et Brugernavn
            3. En E-mail

3. Update Side (/users/update.html)
    * Denne form skal stort set være en kopi af create.html
    * Vores form skal indeholde de elementer af brugeren vi ønsker at kunne opdatere.
        1. Navn (name)
        2. Brugernavn (username)
        3. Email (email)
        4. Password (password)

4. Delete Side (/users/delete.js)
    * Denne side skal vi benytte til at slette en bruger.
    * Vi vil gerne kunne slette vores bruger ved at indtaste brugerens Email, så denne form skal bare have.
        1. Email (email).


BEMÆRK: Alle forme skal have en Submit Knap.

## Næste skridt. Opsamle data fra vores forme.

Næste skridt vil være at samle formene op i vores javascript.
Dvs. at når man f.eks. "submitter" create.html formen, så samler vi data´en op, i vores Javascript. (index.js).