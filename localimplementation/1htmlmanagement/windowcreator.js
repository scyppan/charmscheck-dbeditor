function createMainWindow(category, template, parent) {
    console.log(`[WindowManager] Creating main window for "${category}".`);
    const clone = document.importNode(template.content, true);
    const mainWindow = clone.querySelector('.main-window');
    mainWindow.id = category;
    mainWindow.querySelector('.custom-window-header').textContent = category;
    parent.appendChild(clone);
    return mainWindow;
  }
  
  function createMiniWindowFromForm(formObj, template, mainWindow) {
    console.log(
      `[WindowManager] Creating mini window for "${formObj.label}" under "${formObj.category}".`
    );
    const miniClone = document.importNode(template.content, true);
    const miniWindow = miniClone.firstElementChild;
    miniWindow.id = `mini-window-${formObj.miniwindowid}`;
    miniWindow.querySelector('.mini-window-title').textContent = formObj.label;
  
    // Use the standardized key for embed URL
    const embedUrl = `https://charmscheck.com/frm_embed/${formObj.key}`;
    console.log(`[WindowManager] Embed URL: ${embedUrl}`);
    const embedScript = document.createElement('script');
    embedScript.src = embedUrl;
    embedScript.defer = true;
    miniWindow.querySelector('.window-content').appendChild(embedScript);
  
    mainWindow.querySelector('.mini-windows').appendChild(miniWindow);
    return miniWindow;
  }

function displayDataInMiniWindow(data, windowContent, editPageUrl) {console.log("Here's the data", data);
    windowContent.innerHTML = '';

    var list = document.createElement('ul');
    list.className = 'edit-item-list';

    Object.values(data).forEach(function(entry) {console.log(entry);
        var properties = ['generalitemname', 'creaturepartname', 'creaturename', 'plantname', 'prepname', 'spellname', 'proficiencyname', 'itemname', 'bookname', 'potionname', 'namedcreaturesname', 'creatureattackname', 'creatureabilityname', 'plantpartname', 'namedplantname'];
        var itemName = 'Unnamed Item';
        
        // Loop through possible properties until a valid one is found
        for (var i = 0; i < properties.length; i++) {
            if (entry.meta[properties[i]]) {
                itemName = entry.meta[properties[i]];
                break;
            }
        }

        var itemId = entry.id;
        var listItem = document.createElement('li');
        var link = document.createElement('a');
        link.href = editPageUrl + itemId;
        link.target = '_blank';
        link.textContent = itemName;
        listItem.appendChild(link);

        list.appendChild(listItem);
    });

    windowContent.appendChild(list);
}

function createMiniWindowFromFormAndType(formObj, template, mainWindow, type) {
    console.log(
      `[WindowManager] Creating mini window for "${type} ${formObj.label}" under "${formObj.category}".`
    );
    const miniClone = document.importNode(template.content, true);
    const miniWindow = miniClone.firstElementChild;
    const miniId = `${type}-${formObj.id}`;
    miniWindow.id = `mini-window-${miniId}`;
    miniWindow.querySelector('.mini-window-title').textContent =
      `${type.charAt(0).toUpperCase() + type.slice(1)} ${formObj.label}`;
  
    const windowContent = miniWindow.querySelector('.window-content');
    windowContent.innerHTML = ''; // Clear previous content
  
    if (type === 'add') {
      // For add windows, embed the form using a script with the standardized key.
      const embedUrl = `https://charmscheck.com/frm_embed/${formObj.key}`;
      console.log(`[WindowManager] Embed URL (add): ${embedUrl}`);
      const embedScript = document.createElement('script');
      embedScript.src = embedUrl;
      embedScript.defer = true;
      windowContent.appendChild(embedScript);
    } else if (type === 'edit') {
      // For edit windows, perform an API call to fetch data.
      const apiUrl = `https://charmscheck.com/wp-json/frm/v2/forms/${formObj.id}/entries?page_size=10000`;
      // Construct edit page URL using formObj.page
      const editPageUrl = `https://charmscheck.com/${formObj.page}/?frm_action=edit&entry=`;
      console.log(`[WindowManager] Fetching data from API URL: ${apiUrl}`);
      fetchjson(apiUrl)
        .then(data => {
          displayDataInMiniWindow(data, windowContent, editPageUrl);
        })
        .catch(err => {
          windowContent.textContent = 'Error loading data.';
          console.error(err);
        });
    }
  
    mainWindow.querySelector('.mini-windows').appendChild(miniWindow);
    return miniWindow;
  }
  