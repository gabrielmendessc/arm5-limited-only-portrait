import { ArM5eBeastActorSheetLimitedOnlyPortrait } from "./actors/actor-beast-sheet-limited-only-portrait.js";
import { ArM5eNPCActorSheetLimitedOnlyPortrait } from "./actors/actor-npc-sheet-limited-only-portrait.js";
import { ArM5ePCActorSheetLimitedOnlyPortrait } from "./actors/actor-pc-sheet-limited-only-portrait.js";

Hooks.once('init', async function () {
    Actors.registerSheet("arm5ePCLimitedOnlyPortrait", ArM5ePCActorSheetLimitedOnlyPortrait, {
        types: ["player"],
        makeDefault: true,
        label: "arm5e.sheet.player.limited.only.portrait"
      });
    Actors.registerSheet("arm5eNPCLimitedOnlyPortrait", ArM5eNPCActorSheetLimitedOnlyPortrait, {
        types: ["npc"],
        makeDefault: true,
        label: "arm5e.sheet.npc.limited.only.portrait"
      });
    Actors.registerSheet("arm5eBeastLimitedOnlyPortrait", ArM5eBeastActorSheetLimitedOnlyPortrait, {
        types: ["beast"],
        makeDefault: true,
        label: "arm5e.sheet.beast.limited.only.portrait"
      });
});