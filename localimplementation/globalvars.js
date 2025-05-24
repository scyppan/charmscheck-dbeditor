const propertiesarray=['locname', 'generalitemname', 'creaturepartname', 'creaturename', 'plantname', 'prepname', 'spellname', 'proficiencyname', 'itemname', 'bookname', 'potionname', 'namedcreaturesname', 'creatureattackname', 'creatureabilityname', 'plantpartname', 'namedplantname'];

// Revised global forms array – one object per form type
const forms = [
    // Creatures
    {
      category: "Creatures",
      form: "Creature Part",
      key: "creatureparts",
      id: 53,
      page: 'add-creature-part',
      label: "Part" //i.e., Add Creature Part
    },
    {
      category: "Creatures",
      form: "Creature",
      key: "creatures",
      id: 48,
      page: 'add-a-creature',
      label: "Creature"
    },
    {
      category: "Creatures",
      form: "Named Creature",
      key: "namedcreatures",
      id: 170,
      page: 'enter-named-creature',
      label: "Named"
    },
    {
      category: "Creatures",
      form: "Creature Attack",
      key: "creatureattacks",
      id: 51,
      page: 'add-creature-attack',
      label: "Attacks"
    },
    {
      category: "Creatures",
      form: "Creature Ability",
      key: "creatureabilities",
      id: 52,
      page: 'add-creature-ability',
      label: "Abilities"
    },
    // Plants
    {
      category: "Plants",
      form: "Plant Part",
      key: "plantparts",
      id: 43,
      page: 'plant-part-entry',
      label: "Part"
    },
    {
      category: "Plants",
      form: "Plant",
      key: "plants",
      id: 2,
      page: 'add-plant',
      label: "Plant"
    },
    {
      category: "Plants",
      form: "Named Plant",
      key: "named-plant",
      id: 1042,
      page: 'add-named-plant',
      label: "Named"
    },
    // Preparations
    {
      category: "Preparations",
      form: "Preparation",
      key: "preparations",
      id: 908,
      page: 'preparations-entry',
      label: "Preparation"
    },
    // Spells
    {
      category: "Spells",
      form: "Spell",
      key: "spells2",
      id: 191,
      page: 'add-a-spell',
      label: "Spell"
    },
    // Proficiencies
    {
      category: "Proficiencies",
      form: "Proficiency",
      key: "proficiencies",
      id: 944,
      page: 'add-proficiency-new-form',
      label: "Proficiency"
    },
    // Items
    {
      category: "Items",
      form: "Item",
      key: "items",
      id: 964,
      page: 'add-item',
      label: "Item"
    },
    {
      category: "Items",
      form: "General Item",
      key: "generalitems",
      id: 126,
      page: 'add-general-item',
      label: "General Item"
    },
    // Books
    {
      category: "Books",
      form: "Book",
      key: "books",
      id: 8,
      page: 'add-a-book',
      label: "Book"
    },
    // Potions
    {
      category: "Potions",
      form: "Potion",
      key: "potions2",
      id: 34,
      page: 'add-a-potion',
      label: "Potion"
    },
    //locations
    {
      category: "Locations",
      form: "Locations",
      key: "locations",
      id: 104,
      page: 'add-a-location',
      label: "Location"
    }
  ];
  