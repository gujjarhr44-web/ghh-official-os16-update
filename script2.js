document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('galleryGrid');
    const privateGrid = document.getElementById('privateGrid');
    const os = localStorage.getItem('activeOS') || 'ios';
    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Apply Theme
    document.body.classList.add(`theme-${os}`);
    if (isDarkMode) document.body.classList.add('dark-mode');

    // Generate Mock Data
    const photos = Array.from({ length: 40 }, (_, i) => ({
        id: i,
        src: `https://picsum.photos/seed/vault-${i}/800/800`,
        cat: ['Biometric', 'Document', 'Media'][i % 3]
    }));

    const secrets = Array.from({ length: 15 }, (_, i) => ({
        src: `https://picsum.photos/seed/secret-${i}/800/800`
    }));

    function renderGrid(data, container) {
        container.innerHTML = '';
        data.forEach(p => {
            const tile = document.createElement('div');
            tile.className = 'tile frozen-glass';
            tile.innerHTML = `<img src="${p.src}" loading="lazy">`;
            tile.onclick = () => openZoom(p.src);
            container.appendChild(tile);
        });
    }

    renderGrid(photos, grid);

    // Filter Logic
    document.querySelectorAll('.filter-chip').forEach(chip => {
        chip.onclick = () => {
            document.querySelector('.filter-chip.active').classList.remove('active');
            chip.classList.add('active');
            const cat = chip.dataset.cat;
            const filtered = cat === 'All' ? photos : photos.filter(p => p.cat === cat);
            renderGrid(filtered, grid);
        };
    });

    // Vault Logic
    document.getElementById('vaultBtn').onclick = () => document.getElementById('vaultGate').classList.remove('hidden');
    document.getElementById('closeVaultGate').onclick = () => document.getElementById('vaultGate').classList.add('hidden');

    document.getElementById('vaultForm').onsubmit = (e) => {
        e.preventDefault();
        const pass = document.getElementById('vaultPass').value;
        if (pass === 'Gujjar@5757') {
            document.getElementById('scanAnimation').classList.remove('hidden');
            setTimeout(() => {
                document.getElementById('vaultGate').classList.add('hidden');
                document.getElementById('privateFolder').classList.remove('hidden');
                renderGrid(secrets, privateGrid);
                document.getElementById('scanAnimation').classList.add('hidden');
            }, 2000);
        } else { alert("ACCESS_DENIED"); }
    };

    document.getElementById('lockVault').onclick = () => {
        document.getElementById('privateFolder').classList.add('hidden');
    };

    // Advanced Zoom Logic
    let currentScale = 1;
    let posX = 0, posY = 0;
    let isDragging = false;
    let startX, startY;

    const modal = document.getElementById('zoomModal');
    const frame = document.getElementById('zoomFrame');
    const img = document.getElementById('zoomedImg');

    function openZoom(src) {
        img.src = src;
        modal.classList.remove('hidden');
        currentScale = 1;
        posX = 0; posY = 0;
        updateTransform();
    }

    function updateTransform() {
        frame.style.transform = `translate(${posX}px, ${posY}px) scale(${currentScale})`;
        document.getElementById('zoomLevelText').innerText = `${Math.round(currentScale * 100)}%`;
    }

    document.getElementById('zoomInBtn').onclick = () => { currentScale = Math.min(currentScale + 0.5, 8); updateTransform(); };
    document.getElementById('zoomOutBtn').onclick = () => { currentScale = Math.max(currentScale - 0.5, 1); if(currentScale===1){posX=0;posY=0;} updateTransform(); };
    
    document.getElementById('closeZoom').onclick = () => modal.classList.add('hidden');
    modal.onclick = (e) => { if(e.target === document.getElementById('zoomViewport')) modal.classList.add('hidden'); };

    // Pan Logic
    const viewport = document.getElementById('zoomViewport');
    viewport.onmousedown = (e) => {
        if (currentScale > 1) {
            isDragging = true;
            startX = e.clientX - posX;
            startY = e.clientY - posY;
        }
    };
    window.onmousemove = (e) => {
        if (isDragging) {
            posX = e.clientX - startX;
            posY = e.clientY - startY;
            updateTransform();
        }
    };
    window.onmouseup = () => isDragging = false;

    document.getElementById('downloadBtn').onclick = () => {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = 'vault_asset.jpg';
        link.click();
    };
});
