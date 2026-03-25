> Note: La documentazione in 🇮🇹 Italiano è più in basso
# 📸 ARPhotoLive: Bringing Photographs to Life

**ARPhotoLive** is a Web Augmented Reality (WebAR) application designed to transform a classic paper photo album into an interactive multimedia experience. Without installing any app, users can point their camera at a photograph and watch it "come to life" with a personalized video.

This is an **open-source** project, perfect for personalized gifts, special events, or preserving precious memories.

---

## 🚀 How It Works

The app follows a three-stage workflow to ensure maximum compatibility and performance on mobile devices (iOS/Android):

1.  **Activation**: The user accesses the WebApp via a mobile browser.
2.  **QR Scanning**: The user scans a QR Code associated with a specific photo in the album. This dynamically loads the corresponding video (hosted on Dropbox).
3.  **Augmented Reality**: By pointing the camera at the "anchor" image, the video appears perfectly overlaid on the physical photo, complete with audio.

---

## 🛠️ Technologies Used

* [MindAR.js](https://hiukim.github.io/mind-ar-js-doc/): A lightweight and high-performance image tracking engine for the web.
* [A-Frame](https://aframe.io/): A web framework for building 3D and VR experiences.
* [HTML5-QRCode](https://github.com/mebjas/html5-qrcode): A cross-platform QR Code scanning library.

---

## 📖 User Guide (End User)

1.  Open the project link on your smartphone (Safari on iOS, Chrome on Android).
2.  Tap the **START (INIZIA)** button.
3.  Scan the **QR Code** placed near the photograph in the album.
4.  Once the video has loaded, point your camera at the **photograph** (or the universal anchor).
5.  Enjoy the video! Use the **🔄 Altra Foto** (Another Photo) button at the top right to reload the page and scan a different content.

---

## 🎨 Create Your Own Animated Photos (Creator Guide)

Want to build your own personalized album? Follow these steps:

### 1. Prepare the Videos
* Upload your videos to **Dropbox**.
* Create a sharing link for each video.
* The app automatically converts standard links (e.g., `www.dropbox.com/...`) into direct streaming links (`dl.dropboxusercontent.com/...`).

### 2. Generate the AR Anchor (`.mind`)
The anchor is the image the phone must "recognize" to trigger the video overlay.
1.  Go to the [MindAR Image Compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile).
2.  Upload the image you want to use as a target (this can be a universal frame or the photo itself).
3.  Download the `targets.mind` file and rename it to `universal_anchor.mind`.
4.  Replace the existing file in the repository with your new one.

### 3. Create the QR Codes
* Use a QR Code generator to convert your Dropbox links into printable codes.
* Place each QR Code next to its corresponding physical photo in your album.

### 4. Calibration (Optional)
If your video appears misaligned or incorrectly sized, enable the **debug sliders** in the `script.js` file by uncommenting the following line:
`// this.ui.debugSliders.classList.remove('hidden');`
Use the sliders on your phone to find the perfect coordinates and click "Copy Values" to update the `<a-video>` tag in `index.html`.

---

## 💻 Local Installation

To modify the code on your own machine:

1.  Clone the repository:
    ```bash
    git clone [https://github.com/03Maikol33/ARPhotoLive.git](https://github.com/03Maikol33/ARPhotoLive.git)
    ```
2.  Open the folder using a local server (e.g., the **Live Server** extension in VS Code).
3.  **Note**: An **HTTPS** protocol is strictly required to access the camera on mobile devices.

---

## 🤝 Contributions
Contributions are welcome! If you have ideas to improve tracking, UI, or add new features, feel free to open a Pull Request.

---

## 📜 License
Distributed under the MIT License.

---
*Developed with ❤️ for special gifts!*

---

## 🇮🇹 Lingua: Italiano
# 📸 ARPhotoLive: Fotografie che prendono vita

**ARPhotoLive** è un'applicazione web in Realtà Aumentata (WebAR) progettata per trasformare un classico album fotografico cartaceo in un'esperienza multimediale interattiva. Senza installare alcuna app, è possibile inquadrare una fotografia e vederla "animarsi" con un video personalizzato.

Il progetto è **open-source** e pensato per essere facilmente adattato per regali, eventi o ricordi speciali.

---

## 🚀 Come funziona

L'app utilizza un flusso in tre fasi per garantire compatibilità e prestazioni su dispositivi mobile (iOS/Android):

1.  **Attivazione**: L'utente accede alla WebApp tramite browser.
2.  **Scansione QR**: Viene scansionato un QR Code associato a una specifica foto dell'album. Questo carica dinamicamente il video corrispondente (ospitato su Dropbox).
3.  **Augmented Reality**: Puntando la fotocamera verso l'immagine "ancora", il video appare perfettamente sovrapposto completo di audio.

---

## 🛠️ Tecnologie utilizzate

* [MindAR.js](https://hiukim.github.io/mind-ar-js-doc/): Motore di tracking delle immagini leggero e performante.
* [A-Frame](https://aframe.io/): Framework web per la costruzione di esperienze 3D e VR.
* [HTML5-QRCode](https://github.com/mebjas/html5-qrcode): Libreria per la scansione di QR Code cross-platform.

---

## 📖 Guida all'uso (Utente Finale)

1.  Apri il link del progetto sul tuo smartphone (Safari su iOS, Chrome su Android).
2.  Tocca il pulsante **INIZIA**.
3.  Inquadra il **QR Code** posizionato vicino alla fotografia nell'album.
4.  Una volta caricato il video, inquadra la **fotografia** (o l'ancora universale).
5.  Goditi il video! Puoi usare il tasto **🔄 Altra Foto** in alto a destra per ricaricare la pagina e cambiare contenuto.

---

## 🎨 Crea le tue foto animate (Guida per i Creatori)

Vuoi creare il tuo album personalizzato? Segui questi passaggi:

### 1. Prepara i Video
* Carica i tuoi video su **Dropbox**.
* Crea un link di condivisione per ogni video.
* L'app convertirà automaticamente i link (es. `www.dropbox.com/...`) in link diretti allo streaming (`dl.dropboxusercontent.com/...`).

### 2. Genera l'Ancora AR (`.mind`)
L'ancora è l'immagine che il telefono deve "riconoscere" per far apparire il video.
1.  Vai sul [MindAR Image Compiler](https://hiukim.github.io/mind-ar-js-doc/tools/compile).
2.  Carica l'immagine che vuoi usare come target (può essere una cornice universale o la foto stessa).
3.  Scarica il file `targets.mind` e rinominalo in `universal_anchor.mind`.
4.  Sostituisci il file esistente nel repository con il tuo.

### 3. Crea i QR Code
* Usa un generatore di QR Code per trasformare i link di Dropbox in codici stampabili.
* Posiziona ogni QR Code vicino alla relativa foto nel tuo album cartaceo.

### 4. Calibrazione (Opzionale)
Se il tuo video appare spostato o di dimensioni errate, attiva gli **slider di debug** nel file `script.js` togliendo il commento alla riga:
`// this.ui.debugSliders.classList.remove('hidden');`
Usa gli slider sul telefono per trovare le coordinate perfette e premi "Copia Valori" per aggiornare il tag `<a-video>` in `index.html`.

---

## 💻 Installazione Locale

Se vuoi modificare il codice sul tuo computer:

1.  Clona il repository:
    ```bash
    git clone [https://github.com/03Maikol33/ARPhotoLive.git](https://github.com/03Maikol33/ARPhotoLive.git)
    ```
2.  Apri la cartella con un server locale (es. l'estensione **Live Server** di VS Code).
3.  **Nota**: Per testare la fotocamera è necessario un protocollo **HTTPS**.

---

## 🤝 Contributi
I contributi sono i benvenuti! Se hai idee per migliorare il tracking, l'interfaccia o aggiungere nuove funzionalità, apri una Pull Request.

---

## 📜 Licenza
Distribuito sotto Licenza MIT.

---
*Sviluppato con ❤️ per regali speciali!.*
