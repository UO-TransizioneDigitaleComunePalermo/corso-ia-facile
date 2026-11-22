# Corso IA per Dipendenti Comunali — Sito di Documentazione Interattivo

Questo repository contiene il sito interattivo di documentazione del corso **"Palestra IA per l'uso dell'Intelligenza Artificiale dei dipendenti pubblici"** curato dalla **Fondazione IFEL**, configurato per il deploy automatico su **GitHub Pages** tramite GitHub Actions.

---

## 📁 Struttura del Repository

```text
├── .github/
│   └── workflows/
│       └── deploy.yml    # Pipeline GitHub Actions (deploy automatico ad ogni push su main)
├── index.html            # Sito web interattivo completo (HTML, CSS e JavaScript integrati)
├── build.js              # Script Node.js standard per predisporre i file nella cartella ./dist
├── .gitignore            # File di esclusione git standard
└── README.md             # Guida rapida di configurazione
```

---

## 🚀 Istruzioni per la pubblicazione su GitHub Pages

Segui questi semplici passaggi per pubblicare il sito online:

### 1. Creazione del Repository su GitHub
1. Accedi al tuo account su [GitHub](https://github.com/).
2. Clicca su **New** per creare un nuovo repository (puoi chiamarlo ad esempio `corso-ia-comune`).
3. Scegli se mantenerlo **Public** o **Private** (Nota: GitHub Pages per repository privati richiede un piano GitHub Pro/Team/Enterprise; per repository pubblici è gratuito).
4. **Non** selezionare "Add a README file" se intendi caricare l'intero pacchetto già pronto.

### 2. Caricamento dei file

#### Opzione A: Tramite interfaccia web di GitHub
1. Nella pagina principale del repository appena creato, clicca su **Upload an existing file**.
2. Trascina tutti i file estratti da questo pacchetto (inclusa la cartella nascosta `.github`).
3. Inserisci un messaggio di commit (es. `Inizializzazione sito di documentazione IA`) e clicca su **Commit changes**. Assicurati che il branch sia denominato `main`.

#### Opzione B: Da riga di comando (Terminale / Git Bash)
```bash
# Entra nella cartella scompattata
cd /percorso/della/cartella

# Inizializza il repository locale
git init -b main

# Aggiungi tutti i file
git add .

# Esegui il commit iniziale
git commit -m "feat: caricamento iniziale documentazione IA"

# Collega il repository remoto e pubblica
git remote add origin https://github.com/TUO-USERNAME/NOME-REPO.git
git push -u origin main
```

---

### 3. Abilitazione di GitHub Pages
1. Nel tuo repository su GitHub, vai nella scheda **Settings** in alto.
2. Nel menù laterale sinistro, clicca su **Pages** (sotto la sezione *Code and automation*).
3. Alla voce **Build and deployment** > **Source**, seleziona:
   👉 **GitHub Actions**
4. Non serve selezionare alcun branch: la pipeline contenuta in `.github/workflows/deploy.yml` verrà riconosciuta automaticamente!

---

### 4. Deploy automatico
- Appena effettui il push sul branch `main`, GitHub avvierà automaticamente la workflow action definita in `.github/workflows/deploy.yml`.
- Puoi seguire l'avanzamento andando nella scheda **Actions** del repository.
- Al termine (richiede solitamente circa 30-60 secondi), l'URL pubblico del tuo sito sarà disponibile nella scheda **Settings > Pages** e nella pagina dell'azione completata.

---

## 🛠️ Come funziona `build.js`
Il workflow `deploy.yml` richiede l'esecuzione di `node build.js` e la pubblicazione della cartella `./dist`. Lo script `build.js` incluso utilizza i moduli nativi di Node.js (`fs` e `path`) senza necessità di installare librerie esterne (`npm install`), preparando istantaneamente `dist/index.html`.
