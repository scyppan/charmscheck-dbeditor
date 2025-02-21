
function initApp() {
    console.log('[Main] DOMContentLoaded fired.');
    const leftPanel = document.querySelector('.left-panel');
    initLeftPanel(leftPanel);
    attachLeftPanelListeners();
  }
  
  function initLeftPanel(panel) {
    console.log('[Main] Initializing left panel using forms array.');
    // Extract unique categories from the forms array
    const categories = [...new Set(forms.map(f => f.category))];
    categories.forEach(category => 
        {
      const menuItem = createMenuItem(category);
      panel.appendChild(menuItem);
    });
  }
