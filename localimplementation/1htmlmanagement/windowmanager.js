// windowManager.js
console.log('[WindowManager] Module loaded.');

function hideAllMainWindows() {
  console.log('[WindowManager] Hiding all main windows.');
  document.querySelectorAll('.main-window').forEach(win => win.classList.add('hidden'));
}

function hideAllMiniWindows(mainWindow) {
  console.log(`[WindowManager] Hiding all mini windows in "${mainWindow.id}".`);
  mainWindow.querySelectorAll('.mini-window').forEach(mw => mw.classList.add('hidden'));
}

function hideAllMainWindows() {
    console.log('[Main] Hiding all main windows.');
    document.querySelectorAll('.main-window').forEach(win => win.classList.add('hidden'));
  }
  
  function hideAllMiniWindows(mainWindow) {
    console.log(`[Main] Hiding all mini windows in "${mainWindow.id}".`);
    mainWindow.querySelectorAll('.mini-window').forEach(mw => mw.classList.add('hidden'));
  }