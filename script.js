const debugLog = document.getElementById('debug-log');
function log(msg, type = 'info') {
    const entry = document.createElement('div');
    entry.style.color = type === 'error' ? '#ff5555' : (type === 'success' ? '#55ff55' : '#0f0');
    entry.innerText = `[${new Date().toLocaleTimeString()}] ${msg}`;
    if(debugLog) { debugLog.prepend(entry); console.log(msg); }
}

window.onerror = (msg, url, line) => log(`ERR: ${msg} L:${line}`, 'error');

const App = {
    ui: {
        start: document.getElementById('ui-start'),
        scanner: document.getElementById('ui-scanner'),
        loading: document.getElementById('ui-loading'),
        ar: document.getElementById('ar-scene-container'),
        debugSliders: document.getElementById('ui-debug-sliders'),
        instructions: document.getElementById('ui-instructions')
    },
    ar: {
        scene: document.querySelector('a-scene'),
        target: document.getElementById('ar-target-entity'),
        videoAsset: document.getElementById('ar-video-asset'),
        videoPlane: document.getElementById('video-plane')
    },
    qrScanner: null,

    startScannerPhase: function() {
        log("1. Avvio Scanner QR...");
        
        // Sblocco audio Safari: play/pause immediato al click dell'utente
        this.ar.videoAsset.play().then(() => {
            this.ar.videoAsset.pause();
        }).catch(e => log("Pre-unlock audio eseguito"));

        this.ui.start.classList.add('hidden');
        this.ui.scanner.classList.remove('hidden');
        
        this.qrScanner = new Html5Qrcode("reader");
        this.qrScanner.start(
            { facingMode: "environment" },
            { fps: 10, qrbox: 250 },
            this.onQrScanned.bind(this)
        ).catch(err => log("Errore camera: " + err, 'error'));
    },

    onQrScanned: function(decodedText) {
        log("2. QR Trovato!", 'success');
        this.qrScanner.stop().then(() => {
            this.ui.scanner.classList.add('hidden');
            this.ui.loading.classList.remove('hidden');
            this.prepareARVideo(decodedText);
        });
    },

    prepareARVideo: function(url) {
        log("3. Preparazione Video...");
        let dlLink = url.trim().replace("www.dropbox.com", "dl.dropboxusercontent.com");
        if (url.includes("rlkey=")) {
            const key = url.split("rlkey=")[1].split("&")[0];
            dlLink = dlLink.split("?")[0] + "?rlkey=" + key;
        }
        
        this.ar.videoAsset.src = dlLink;
        this.ar.videoAsset.load();

        this.ar.videoAsset.onloadeddata = () => {
            log("4. Video pronto!", 'success');
            this.startARPhase();
        };
    },

    startARPhase: function() {
        log("Attivazione motore AR...");
        this.ui.loading.classList.add('hidden');
        this.ui.ar.classList.remove('hidden');

        this.setupARListeners();
        this.setupDebugSliders();

        try {
            const arSystem = this.ar.scene.systems["mindar-image-system"];
            arSystem.start();
            
            this.ar.scene.renderer.setClearColor(0x000000, 0);
            this.ar.scene.renderer.setClearAlpha(0);
            
            setTimeout(() => {
                window.dispatchEvent(new Event('resize'));
                log("Refresh grafico eseguito.");
            }, 1000);

            log("Sistema pronto. Inquadra l'ancora.");
        } catch (e) { log("Errore AR: " + e.message, 'error'); }
    },

    setupARListeners: function() {
        this.ar.target.addEventListener("targetFound", () => {
            log("FOTO RICONOSCIUTA!", 'success');
            // Audio Automatico: togliamo il mute e avviamo il play
            this.ar.videoAsset.muted = false;
            this.ar.videoAsset.play().catch(err => {
                log("Autoplay con audio bloccato, riprovo...", 'error');
                this.ar.videoAsset.muted = true; // Piano B: mutato se Safari insiste
                this.ar.videoAsset.play();
            });
        });

        this.ar.target.addEventListener("targetLost", () => {
            log("Foto persa");
            this.ar.videoAsset.pause();
        });
    },

    setupDebugSliders: function() {
        const ids = ['pos-x', 'pos-y', 'pos-z', 'rot-x', 'width', 'height'];
        ids.forEach(id => {
            const el = document.getElementById(`slider-${id}`);
            if (el) el.oninput = () => this.updateAR();
        });
        // NOTA: updateAR() NON è chiamata qui all'inizio, così l'HTML vince all'avvio!
    },

    updateAR: function() {
        const v = (id) => document.getElementById(`slider-${id}`).value;
        const ids = ['pos-x', 'pos-y', 'pos-z', 'rot-x', 'width', 'height'];
        ids.forEach(id => {
            const label = document.getElementById(`val-${id}`);
            if (label) label.innerText = v(id);
        });

        this.ar.videoPlane.setAttribute('position', `${v('pos-x')} ${v('pos-y')} ${v('pos-z')}`);
        this.ar.videoPlane.setAttribute('rotation', `${v('rot-x')} 0 0`);
        this.ar.videoPlane.setAttribute('width', v('width'));
        this.ar.videoPlane.setAttribute('height', v('height'));
    },

    copyDebugValues: function() {
        const p = this.ar.videoPlane.getAttribute('position');
        const r = this.ar.videoPlane.getAttribute('rotation');
        const w = this.ar.videoPlane.getAttribute('width');
        const h = this.ar.videoPlane.getAttribute('height');
        const res = `width="${w}" height="${h}" position="${p.x.toFixed(2)} ${p.y.toFixed(2)} ${p.z.toFixed(2)}" rotation="${r.x} 0 0"`;
        log(res, 'success');
        alert("Configurazione copiata!");
    },

    showInstructions: function() {
        this.ui.instructions.classList.remove('hidden');
    },
    hideInstructions: function() {
        this.ui.instructions.classList.add('hidden');
    }
};


App.hideInstructions = function() {
    this.ui.instructions.classList.add('hidden');
};


log("App Pronta.");