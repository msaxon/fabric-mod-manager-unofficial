export default class ModPack {
    constructor(
        id,
        displayName = "",
        mods = []
    ) {
        this.id = id;
        this.displayName = displayName;
        this.mods = mods;
    }
}