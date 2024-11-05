import {ArM5eBeastActorSheet} from "../../../../systems/arm5e/module/actor/actor-beast-sheet.js"

export class ArM5eBeastActorSheetLimitedOnlyPortrait extends ArM5eBeastActorSheet {

    /** @override */
    get template() {
        if (this.actor.testUserPermission(game.user, CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER)) {
          return `systems/arm5e/templates/actor/actor-beast-sheet.html`;
        }
        return `modules/arm5-limited-only-portrait/templates/actor-limited-sheet.html`;
    }

}