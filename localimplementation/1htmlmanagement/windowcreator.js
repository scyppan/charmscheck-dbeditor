function createMainWindow(category, template, parent) {
  console.log(`[WindowManager] Creating main window for "${category}".`);
  const clone = document.importNode(template.content, true);
  const mainWindow = clone.querySelector('.main-window');
  mainWindow.id = category;
  mainWindow.querySelector('.custom-window-header').textContent = category;
  parent.appendChild(clone);
  return mainWindow;
}

function displayDataInMiniWindow(data, windowContent, editPageUrl) {
  console.log("Here's the data", data);
  windowContent.innerHTML = '';

  var list = document.createElement('ul');
  list.className = 'edit-item-list';

  Object.values(data).forEach(function (entry) {
    console.log(entry);
    var properties = propertiesarray; 
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
    // For add windows, embed the form via an iframe.
    const iframe = makeiframe(formObj.key);
    windowContent.appendChild(iframe);

    const refreshButton = miniWindow.querySelector('.refresh-button');
    attachRefreshListener(refreshButton, miniWindow, formObj);
  } else if (type === 'edit') {
    // For edit windows, perform an API call to fetch data.
    const apiUrl = `https://charmscheck.com/wp-json/frm/v2/forms/${formObj.id}/entries?page_size=10000`;
    // Construct edit page URL using formObj.page.
    const editPageUrl = `https://charmscheck.com/${formObj.page}/?frm_action=edit&entry=`;

    const refreshButton = miniWindow.querySelector('.refresh-button');
    if (refreshButton) {
      refreshButton.addEventListener('click', () => refreshEditWindow(miniWindow, formObj));
    }

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

