const themeMap = {
    ios: 'theme-ios',
    oneui: 'theme-oneui',
    origin: 'theme-origin',
    miui: 'theme-miui',
    gaming: 'theme-gaming',
    nothing: 'theme-nothing'
};

document.addEventListener('DOMContentLoaded', () => {
    // 1. Clock Update
    const clock = document.getElementById('clockDisplay');
    const date = document.getElementById('dateDisplay');
    
    function updateClock() {
        const now = new Date();
        clock.innerText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        date.innerText = now.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' });
    }
    setInterval(updateClock, 1000);
    updateClock();

    // 2. Theme & OS Persistence
    let currentOS = localStorage.getItem('activeOS') || 'ios';
    let isDarkMode = localStorage.getItem('darkMode') === 'true';
    
    function applyOS(os) {
        document.body.className = '';
        document.body.classList.add(themeMap[os]);
        if (isDarkMode) document.body.classList.add('dark-mode');
        document.getElementById('activeOSLabel').innerText = os;
        localStorage.setItem('activeOS', os);
        currentOS = os;
    }
    applyOS(currentOS);

    // 3. UI Interactions
    document.getElementById('osToggleBtn').onclick = () => {
        document.getElementById('osMenu').classList.toggle('hidden');
    };

    document.querySelectorAll('.os-opt').forEach(btn => {
        btn.onclick = () => {
            applyOS(btn.dataset.os);
            document.getElementById('osMenu').classList.add('hidden');
        };
    });

    document.getElementById('themeToggle').onclick = () => {
        isDarkMode = !isDarkMode;
        localStorage.setItem('darkMode', isDarkMode);
        applyOS(currentOS);
    };

    // 4. Login Logic
    document.getElementById('loginForm').onsubmit = (e) => {
        e.preventDefault();
        const u = document.getElementById('userInp').value;
        const p = document.getElementById('passInp').value;

        // Protocols
        if ( (u === 'admin' && p === 'Gujjar@5757') || (u === 'hemant' && p === '2327') ) {
            const transition = document.getElementById('transitionOverlay');
            transition.classList.remove('hidden');
            setTimeout(() => {
                window.location.href = 'gallery.html';
            }, 3000);
        } else {
            alert("PROTOCOL_FAILURE: INCORRECT ID/PASS");
        }
    };
});
