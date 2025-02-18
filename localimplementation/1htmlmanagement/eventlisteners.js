function attachLeftPanelListeners() {
    console.log('[Main] Attaching left panel listeners using forms.');
    document.querySelectorAll('.mainmenuitem').forEach(item => {
      item.addEventListener('click', handleLeftMenuClick);
    });
  }
  
  function handleLeftMenuClick(event) {
    const category = event.currentTarget.getAttribute('data-target-window');
    console.log(`[Main] "${category}" menu item clicked.`);
    hideAllMainWindows();
  
    let mainWindow = document.getElementById(category);
    if (!mainWindow) {
      const rightPanel = document.querySelector('.right-panel');
      const mainWindowTemplate = document.getElementById('main-window-template');
      mainWindow = createMainWindow(category, mainWindowTemplate, rightPanel);
      // Add action buttons from the global 'forms' array for this category.
      addActionButtonsFromForms(mainWindow, category);
    }
    mainWindow.classList.remove('hidden');
  }
  
  function handleActionClick(formObj, mainWindow) {
    console.log(`[Main] "${formObj.label}" button clicked in "${formObj.category}".`);
    hideAllMiniWindows(mainWindow);
    const miniId = formObj.miniwindowid;
    let miniWindow = mainWindow.querySelector(`#mini-window-${miniId}`);
    console.log(miniWindow);
    if (!miniWindow) {
      const miniWindowTemplate = document.getElementById('mini-window-template');
      miniWindow = createMiniWindowFromForm(formObj, miniWindowTemplate, mainWindow);
    }
    miniWindow.classList.remove('hidden');
  }
  

  function handleActionClickFromForm(formObj, mainWindow, type) {
    console.log(`[Main] "${type} ${formObj.label}" button clicked in "${formObj.category}".`);
    hideAllMiniWindows(mainWindow);
    const miniId = `${type}-${formObj.id}`;
    let miniWindow = mainWindow.querySelector(`#mini-window-${miniId}`);
    if (!miniWindow) {
      const miniWindowTemplate = document.getElementById('mini-window-template');
      miniWindow = createMiniWindowFromFormAndType(formObj, miniWindowTemplate, mainWindow, type);
    }
    miniWindow.classList.remove('hidden');
  }