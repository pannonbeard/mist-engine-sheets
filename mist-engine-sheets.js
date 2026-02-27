Hooks.once("init", () => {});

Hooks.once("setup", () => {});

Hooks.once("ready", () => {
   // ── Find base sheet class ──────────────────────────────────────────────
  const baseClass = Object.values(CONFIG.Actor.sheetClasses["litm-character"] ?? {})
    .find(s => s.id.startsWith("mist-engine-fvtt"))?.cls;

  if (!baseClass) {
    console.error("Mist Engine Sheets | Could not find the Mist Engine sheet class.");
    return;
  }

  // ── Sheet class ────────────────────────────────────────────────────────
  class OtherscapeSheet extends baseClass {
    static PARTS = {
        header: {
            id: 'header',
            template: 'modules/mist-engine-sheets/templates/parts/otherscape/character-header.hbs'
        },
        tabs: {
            id: 'tabs',
            template: 'templates/generic/tab-navigation.hbs',
            classes: ["litm-character-sheet-tabs"]
        },
        character: {
            id: 'character',
            template: 'modules/mist-engine-sheets/templates/parts/otherscape/tab-character.hbs',
            scrollable: ['']
        },
        biography: {
            id: 'biography',
            template: 'modules/mist-engine-sheets/templates/shared/tab-biography.hbs'
        },
        notes: {
            id: 'notes',
            template: 'modules/mist-engine-sheets/templates/shared/tab-notes.hbs'
        }
    }
  }






  // ── Register sheet ─────────────────────────────────────────────────────
  Actors.registerSheet("otherscape", OtherscapeSheet, {
    types: ["litm-character"],
    makeDefault: true,
    label: "Otherscape"
  });
});
