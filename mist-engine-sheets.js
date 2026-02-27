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
    static get defaultOptions() {
      return foundry.utils.mergeObject(super.defaultOptions, {
        classes: ["otherscape"],
        template: "modules/mist-engin-sheets/templates/otherscape/pc-sheet.hbs",
        width: 780,
        height: 660,
        tabs: [{
          navSelector: ".sheet-tabs",
          contentSelector: ".sheet-body",
          initial: "stats"
        }],
        resizable: true,
      });
    }
  }






  // ── Register sheet ─────────────────────────────────────────────────────
  Actors.registerSheet("otherscape", OtherscapeSheet, {
    types: ["pc"],
    makeDefault: false,
    label: "Otherscape"
  });
});
