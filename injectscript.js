document.addEventListener('DOMContentLoaded', function() {
    // Your HTML content with shortcodes
    var htmlContent = `
    <!-- Main Container -->
    <div class="container">
        <!-- Left Panel -->
        <div class="left-panel">
            <div class="mainmenuitem" data-target-window="main-window-creatures">Creatures</div>
            <div class="mainmenuitem" data-target-window="main-window-plants">Plants</div>
            <div class="mainmenuitem" data-target-window="main-window-preparations">Preparations</div>
            <div class="mainmenuitem" data-target-window="main-window-spells">Spells</div>
            <div class="mainmenuitem" data-target-window="main-window-proficiencies">Proficiencies</div>
            <div class="mainmenuitem" data-target-window="main-window-items">Items</div>
            <div class="mainmenuitem" data-target-window="main-window-books">Books</div>
            <div class="mainmenuitem" data-target-window="main-window-potions">Potions</div>
        </div>

        <!-- Right Panel -->
        <div class="right-panel">
            <!-- Creatures Main Window -->
            <div class="main-window custom-panel" id="main-window-creatures">
                <div class="custom-window-header">Creatures</div>
                <div class="custom-menu-bar">
                    <button class="menu-button" data-target-miniwindow="mini-window-add-creature-part">Add Part</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-creature-parts">Edit Parts</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-add-creature">Add Creature</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-creatures">Edit Creatures</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-add-named-creature">Add Named</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-named-creatures">Edit Named</button>
                    <!-- New Buttons Added Below -->
                    <button class="menu-button" data-target-miniwindow="mini-window-add-creature-attack">Add Attack</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-creature-attack">Edit Attacks</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-add-creature-ability">Add Ability</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-creature-ability">Edit Ability</button>
                    <!-- End of New Buttons -->
                </div>
                <!-- Existing Miniwindows -->
                <div class="mini-window custom-panel hidden" id="mini-window-add-creature-part">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Creature Part</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-creature-part">Refresh</button>
                    </div>
                    <div class="window-content">
                        [formidable id=53]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-creature-parts">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Creature Parts</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-creature-parts">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7556]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-add-creature">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Creature</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-creature">Refresh</button>
                    </div>
                    <div class="window-content">
                        [formidable id=48]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-creatures">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Creatures</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-creatures">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7587]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-add-named-creature">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Named Creature</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-named-creature">Refresh</button>
                    </div>
                    <div class="window-content">
                        <div><a href="https://charmscheck.com/creature-maker/" target="_blank">Creature Maker Randomizer</a></div>
                        [formidable id=170]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-named-creatures">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Named Creatures</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-named-creatures">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7593]
                    </div>
                </div>
                <!-- New Miniwindows Added Below -->
                <div class="mini-window custom-panel hidden" id="mini-window-add-creature-attack">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Attack</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-creature-attack">Refresh</button>        
                    </div>
                    <div class="window-content">
                        [formidable id=51]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-creature-attack">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Attacks</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-creature-attack">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7595]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-add-creature-ability">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Ability</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-creature-ability">Refresh</button>        
                    </div>
                    <div class="window-content">
                        [formidable id=52]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-creature-ability">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Ability</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-creature-ability">Refresh</button>        
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7600]
                    </div>
                </div>
                <!-- End of New Miniwindows -->
            </div>

            <!-- Plants Main Window -->
            <div class="main-window custom-panel hidden" id="main-window-plants">
                <div class="custom-window-header">Plants</div>
                <div class="custom-menu-bar">
                    <button class="menu-button" data-target-miniwindow="mini-window-add-plant-part">Add Part</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-plant-parts">Edit Parts</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-add-plant">Add Plant</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-plants">Edit Plants</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-add-named-plant">Add Named</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-named-plants">Edit Named</button>
                </div>
                <!-- Miniwindows -->
                <div class="mini-window custom-panel hidden" id="mini-window-add-plant-part">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Plant Part</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-plant-part">Refresh</button>
                    </div>
                    <div class="window-content">
                        <strong>Note: </strong>Remember to add this to a plant and add this as an item after you enter any new plant part<br>
                        [formidable id=43]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-plant-parts">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Plant Parts</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-plant-parts">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7602]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-add-plant">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Plant</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-plant">Refresh</button>
                    </div>
                    <div class="window-content">
                        [formidable id=2]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-plants">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Plants</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-plants">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7604]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-add-named-plant">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Named Plant</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-named-plant">Refresh</button>
                    </div>
                    <div class="window-content">
                        [formidable id=1042]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-named-plants">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Named Plants</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-named-plants">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7611]
                    </div>
                </div>
            </div>

            <!-- Preparations Main Window -->
            <div class="main-window custom-panel hidden" id="main-window-preparations">
                <div class="custom-window-header">Preparations</div>
                <div class="custom-menu-bar">
                    <button class="menu-button" data-target-miniwindow="mini-window-add-preparation">Add Preparation</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-preparations">Edit Preparations</button>
                </div>
                <!-- Miniwindows -->
                <div class="mini-window custom-panel hidden" id="mini-window-add-preparation">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Preparation</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-preparation">Refresh</button>
                    </div>
                    <div class="window-content">
                        <strong>Note: </strong>Remember to add the prereq items and proficiencies first<br>
                        [formidable id=908]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-preparations">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Preparations</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-preparations">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7635]
                    </div>
                </div>
            </div>

            <!-- Spells Main Window -->
            <div class="main-window custom-panel hidden" id="main-window-spells">
                <div class="custom-window-header">Spells</div>
                <div class="custom-menu-bar">
                    <button class="menu-button" data-target-miniwindow="mini-window-add-spell">Add Spell</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-spells">Edit Spells</button>
                </div>
                <!-- Miniwindows -->
                <div class="mini-window custom-panel hidden" id="mini-window-add-spell">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Spell</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-spell">Refresh</button>
                    </div>
                    <div class="window-content">
                        [formidable id=2]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-spells">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Spells</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-spells">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7637]
                    </div>
                </div>
            </div>

            <!-- Proficiencies Main Window -->
            <div class="main-window custom-panel hidden" id="main-window-proficiencies">
                <div class="custom-window-header">Proficiencies</div>
                <div class="custom-menu-bar">
                    <button class="menu-button" data-target-miniwindow="mini-window-add-proficiency">Add Proficiency</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-proficiencies">Edit Proficiencies</button>
                </div>
                <!-- Miniwindows -->
                <div class="mini-window custom-panel hidden" id="mini-window-add-proficiency">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Proficiency</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-proficiency">Refresh</button>
                    </div>
                    <div class="window-content">
                        [formidable id=944]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-proficiencies">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Proficiencies</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-proficiencies">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7651]
                    </div>
                </div>
            </div>

            <!-- Items Main Window -->
            <div class="main-window custom-panel hidden" id="main-window-items">
                <div class="custom-window-header">Items</div>
                <div class="custom-menu-bar">
                    <button class="menu-button" data-target-miniwindow="mini-window-add-item">Add Item</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-items">Edit Items</button>
                </div>
                <!-- Miniwindows -->
                <div class="mini-window custom-panel hidden" id="mini-window-add-item">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Item</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-item">Refresh</button>
                    </div>
                    <div class="window-content">
                        <strong>Note: </strong>Remember to add the subcomponent prior to trying to enter as an item. Give the item the exact same name as the subcomponent<br>
                        [formidable id=964]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-items">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Items</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-items">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7656]
                    </div>
                </div>
            </div>

            <!-- Books Main Window -->
            <div class="main-window custom-panel hidden" id="main-window-books">
                <div class="custom-window-header">Books</div>
                <div class="custom-menu-bar">
                    <button class="menu-button" data-target-miniwindow="mini-window-add-book">Add Book</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-books">Edit Books</button>
                </div>
                <!-- Miniwindows -->
                <div class="mini-window custom-panel hidden" id="mini-window-add-book">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Book</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-book">Refresh</button>
                    </div>
                    <div class="window-content">
                        [formidable id=8]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-books">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Books</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-books">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7658]
                    </div>
                </div>
            </div>

            <!-- New "Potions" Main Window Added Below -->
            <div class="main-window custom-panel hidden" id="main-window-potions">
                <div class="custom-window-header">Potions</div>
                <div class="custom-menu-bar">
                    <button class="menu-button" data-target-miniwindow="mini-window-add-potion">Add Potion</button>
                    <button class="menu-button" data-target-miniwindow="mini-window-edit-potions">Edit Potions</button>
                </div>
                <!-- Miniwindows -->
                <div class="mini-window custom-panel hidden" id="mini-window-add-potion">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Add Potion</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-add-potion">Refresh</button>
                    </div>
                    <div class="window-content">
                        [formidable id=34]
                    </div>
                </div>
                <div class="mini-window custom-panel hidden" id="mini-window-edit-potions">
                    <div class="mini-window-header">
                        <span class="mini-window-title">Edit Potions</span>
                        <button class="refresh-button" data-target-miniwindow="mini-window-edit-potions">Refresh</button>
                    </div>
                    <div class="window-content">
                        [display-frm-data id=7660]
                    </div>
                </div>
            </div>
            <!-- End of New "Potions" Main Window -->
        </div>
    </div>
    `;

    // Inject the HTML content into a container
    var editorContainer = document.getElementById('editor-container');
    if (editorContainer) {
        editorContainer.innerHTML = htmlContent;
    } else {
        // If the container doesn't exist, create it and append to the body
        var newContainer = document.createElement('div');
        newContainer.id = 'editor-container';
        newContainer.innerHTML = htmlContent;
        document.body.appendChild(newContainer);
    }

    // Add your event listeners and functions
    // Handle left panel menu item clicks
    var menuItems = document.querySelectorAll('.mainmenuitem');
    menuItems.forEach(function(menuItem) {
        menuItem.addEventListener('click', function() {
            var targetWindowId = menuItem.getAttribute('data-target-window');
            showMainWindow(targetWindowId);
        });
    });

    // Handle menu button clicks
    var menuButtons = document.querySelectorAll('.menu-button');
    menuButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetMiniWindowId = button.getAttribute('data-target-miniwindow');
            showMiniWindow(targetMiniWindowId);
        });
    });

    // Handle refresh button clicks in miniwindows
    var refreshButtons = document.querySelectorAll('.mini-window .refresh-button');
    refreshButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var targetMiniWindowId = button.getAttribute('data-target-miniwindow');
            refreshMiniWindow(targetMiniWindowId);
        });
    });

    function showMainWindow(id) {
        var mainWindows = document.querySelectorAll('.main-window');
        mainWindows.forEach(function(window) {
            if (window.id === id) {
                window.classList.remove('hidden');
            } else {
                window.classList.add('hidden');
            }
        });
        // Hide all miniwindows
        hideAllMiniWindows();
    }

    function showMiniWindow(id) {
        // Hide all miniwindows
        hideAllMiniWindows();
        // Show the target miniwindow
        var miniWindow = document.getElementById(id);
        if (miniWindow) {
            miniWindow.classList.remove('hidden');
        }
    }

    function hideAllMiniWindows() {
        var miniWindows = document.querySelectorAll('.mini-window');
        miniWindows.forEach(function(window) {
            window.classList.add('hidden');
        });
    }

    function refreshMiniWindow(id) {
        var miniWindow = document.getElementById(id);
        if (miniWindow) {
            // Add animation class
            miniWindow.classList.add('mini-window-refreshing');

            // Reload the content
            reloadMiniWindowContent(miniWindow);

            // Remove the animation class after the animation duration
            setTimeout(function() {
                miniWindow.classList.remove('mini-window-refreshing');
            }, 1000); // Match this duration to the animation duration in CSS
        }
    }

    function reloadMiniWindowContent(miniWindow) {
        // Get the original content from the data attribute
        var originalContent = miniWindow.getAttribute('data-original-content');
        if (originalContent) {
            // Replace the window content with the original content
            var windowContent = miniWindow.querySelector('.window-content');
            if (windowContent) {
                windowContent.innerHTML = originalContent;
            }
        }
    }

    // Store original content of miniwindows
    var miniWindows = document.querySelectorAll('.mini-window');
    miniWindows.forEach(function(miniWindow) {
        // Save the original HTML content of the window-content div
        var windowContent = miniWindow.querySelector('.window-content');
        if (windowContent) {
            miniWindow.setAttribute('data-original-content', windowContent.innerHTML);
        }
    });

    // Show default main window
    showMainWindow('main-window-creatures');
});
