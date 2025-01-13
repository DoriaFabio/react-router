# clono la cartella da github

npm create vite@latest

alla domanda project-name inserisco . (dot)

npm install

# testo
npm run dev

apro il .gitignore e aggiungo package-lock.json

installo gli altri pacchetti che mi servono

cancello il contenuto di App.jsx e rimuovo gli import che non mi servono
cancello i file che non mi servono

se voglio importo bootstrap in main.jsx prima del mio css custom 
 import "bootstrap/dist/css/bootstrap.min.css";

comincio ad editare App.jsx


# add to rules in eslint
rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ..reactHooks.configs.recommended.rules,
      "react/prop-types": 0, 👈
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },

# Consegna
Creiamo il frontend del nostro Blog e le sue pagine!
- Partiamo installando React Router DOM: npm install react-router-dom
- Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina con la lista dei post
- Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro
# Bonus
- Centralizzare la Navbar grazie a un Componente  Layout
- Gestire la classe active
- aggiungere una rotta con id dinamico e recuperare dal componente l'id del post

# Consegna
Completiamo il nostro routing con l’aggiunta delle pagine di dettaglio!
- Creiamo in header la barra di navigazione
- Facciamo quindi in modo da raggiungere la pagina di dettaglio del singolo post e la pagina per creare un nuovo post
Nella nostra app deve essere possibile
- Visualizzare la lista dei post
- Vedere il singolo post
- Cancellare il singolo post
- Creare un nuovo post
# Bonus:
- Proviamo a inserire nella pagina di creazione una navigazione programmatica che ci consenta di andare al post appena salvato o  alla pagina con la lista dei posts
- Inseriamo nelle rotte una fallbackroute (404 notfound) con componente dedicato
- Inseriamo un componente loader che appaia al caricamento dei post o al salvataggio di un post