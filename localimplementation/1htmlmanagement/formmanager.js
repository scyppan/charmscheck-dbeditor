function reloadWholeForm(miniWindow, formObj) {
    const windowContent = miniWindow.querySelector('.window-content');
    windowContent.innerHTML = ""; // clear out previous content
    // Re-create the iframe using our new makeiframe() function
    const iframe = makeiframe(formObj.key);
    windowContent.appendChild(iframe);
    console.log("Form reloaded in iframe.");
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
  