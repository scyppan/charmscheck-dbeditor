function createMenuItem(category) {
    console.log(`[Main] Creating menu item for "${category}".`);
    const menuItem = document.createElement('div');
    menuItem.className = 'mainmenuitem';
    menuItem.textContent = category;
    menuItem.setAttribute('data-target-window', category);
    return menuItem;
}

function addActionButtonsFromForms(mainWindow, category) {
    console.log(`[Main] Adding action buttons for "${category}" from forms array.`);
    const menuBar = mainWindow.querySelector('.custom-menu-bar');
    forms
      .filter(formObj => formObj.category === category)
      .forEach(formObj => {
        const buttons = createActionButtonsFromForm(formObj, mainWindow);
        // Append each button directly to the menu bar
        buttons.forEach(btn => menuBar.appendChild(btn));
      });
  }

function createActionButtonsFromForm(formObj, mainWindow) {
    console.log(
      `[Main] Creating "Add" and "Edit" buttons for "${formObj.label}" in "${formObj.category}" using key "${formObj.key}".`
    );
    // "Add" button
    const addBtn = document.createElement('button');
    addBtn.className = 'menu-button';
    addBtn.textContent = `Add ${formObj.label}`;
    addBtn.dataset.miniwindowid = `add-${formObj.id}`;
    addBtn.addEventListener('click', () => {
      console.log(`[Main] "Add ${formObj.label}" clicked.`);
      handleActionClickFromForm(formObj, mainWindow, 'add');
    });
  
    // "Edit" button
    const editBtn = document.createElement('button');
    editBtn.className = 'menu-button';
    editBtn.textContent = `Edit ${formObj.label}`;
    editBtn.dataset.miniwindowid = `edit-${formObj.id}`;
    editBtn.addEventListener('click', () => {
      console.log(`[Main] "Edit ${formObj.label}" clicked.`);
      handleActionClickFromForm(formObj, mainWindow, 'edit');
    });
  
    // Return the buttons individually (no wrapper)
    return [addBtn, editBtn];
  }