function attachLeftPanelListeners() {
    console.log('[Main] Attaching left panel listeners using forms.');
    document.querySelectorAll('.mainmenuitem').forEach(item => {
      item.addEventListener('click', handleLeftMenuClick);
    });
  }
  
  function handleLeftMenuClick(event) {
    const category = event.currentTarget.getAttribute('data-target-window');
    console.log(`[Main] "${category}" menu item clicked.`);
    
    // Unload the current form by clearing the right panel.
    const rightPanel = document.querySelector('.right-panel');
    rightPanel.innerHTML = "";
    
    hideAllMainWindows();
  
    let mainWindow = document.getElementById(category);
    if (!mainWindow) {
      const mainWindowTemplate = document.getElementById('main-window-template');
      mainWindow = createMainWindow(category, mainWindowTemplate, rightPanel);
      addActionButtonsFromForms(mainWindow, category);
    }
    mainWindow.classList.remove('hidden');
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

  function attachRefreshListener(refreshButton, miniWindow, formObj) {
    if (!refreshButton) {
      console.error("No refresh button provided.");
      return;
    }
    refreshButton.addEventListener('click', () => {
      console.log("Refresh button actuated. Reloading form...");
      reloadWholeForm(miniWindow, formObj);
    });
  }