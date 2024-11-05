import {ArM5eNPCActorSheet} from "../../../../systems/arm5e/module/actor/actor-npc-sheet.js"

export class ArM5eNPCActorSheetLimitedOnlyPortrait extends ArM5eNPCActorSheet {

    /** @override */
    get template() {
        if (this.actor.testUserPermission(game.user, CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER)) {
          return `systems/arm5e/templates/actor/actor-npc-sheet.html`;
        }
        return `modules/arm5-limited-only-portrait/templates/actor-limited-sheet.html`;
    }

}