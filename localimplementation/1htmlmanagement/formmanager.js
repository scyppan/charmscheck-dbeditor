function refreshFormConditionals(miniWindow, attempts = 0) {
    miniWindow.classList.remove('hidden');
    const frm = miniWindow.querySelector('form');
    if (!frm && attempts < 25) {
        setTimeout(() => refreshFormConditionals(miniWindow, attempts + 1), 100);
    } else if (frm) {
        frm.querySelectorAll('input, select, textarea').forEach(el => {
            el.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }
}

function reloadWholeForm(miniWindow, formObj) {
    const windowContent = miniWindow.querySelector('.window-content');
    windowContent.innerHTML = ''; // expunge extant form
    const embedUrl = `https://charmscheck.com/frm_embed/${formObj.key}`;
    const embedScript = document.createElement('script');
    embedScript.src = embedUrl;
    embedScript.defer = true;

    refreshFormConditionals(miniWindow);
    windowContent.appendChild(embedScript);

    
}