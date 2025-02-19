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

function refreshEditWindow(miniWindow, formObj) {
    const windowContent = miniWindow.querySelector('.window-content');
    windowContent.innerHTML = ''; // expunge previous data
    const apiUrl = `https://charmscheck.com/wp-json/frm/v2/forms/${formObj.id}/entries?page_size=10000`;
    const editPageUrl = `https://charmscheck.com/${formObj.page}/?frm_action=edit&entry=`;
    console.log(`[WindowManager] Refreshing edit window; fetching data from: ${apiUrl}`);
    fetchjson(apiUrl)
      .then(data => {
        displayDataInMiniWindow(data, windowContent, editPageUrl);
      })
      .catch(err => {
        windowContent.textContent = 'Error loading data.';
        console.error(err);
      });
  }
  