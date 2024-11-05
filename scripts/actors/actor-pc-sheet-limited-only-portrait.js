import {ArM5ePCActorSheet} from "../../../../systems/arm5e/module/actor/actor-pc-sheet.js"

export class ArM5ePCActorSheetLimitedOnlyPortrait extends ArM5ePCActorSheet {

    /** @override */
    get template() {
        if (this.actor.testUserPermission(game.user, CONST.DOCUMENT_OWNERSHIP_LEVELS.OBSERVER)) {
            return `systems/arm5e/templates/actor/actor-pc-sheet.html`;
        }
        return `modules/arm5-limited-only-portrait/templates/actor-limited-sheet.html`;
    }

}