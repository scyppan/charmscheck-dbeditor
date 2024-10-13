// domUtils.js

// Function to display data in a mini-window as a list of links
function displayDataInMiniWindow(data, windowContent, editPageUrl) {
    windowContent.innerHTML = '';

    var list = document.createElement('ul');
    list.className = 'edit-item-list';

    Object.values(data).forEach(function(entry) {
        var itemName = entry.meta.creaturepartname || entry.meta.creaturename || entry.meta.plantname || 
                       entry.meta.prepname || entry.meta.spellname || entry.meta.proficiencyname || 
                       entry.meta.itemname || entry.meta.bookname || entry.meta.potionname || 
                       entry.meta.namedcreaturename || entry.meta.creatureattackname || entry.meta.creatureabilityname || 
                       entry.meta.plantpartname || entry.meta.namedplantname || 'Unnamed Item';
        
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

// Utility functions for class manipulation
function addClass(element, className) {
    if (!element.classList.contains(className)) {
        element.classList.add(className);
    }
}

function removeClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className);
    }
}
