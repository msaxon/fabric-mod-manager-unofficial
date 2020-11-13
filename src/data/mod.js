export default class Mod {
    constructor(
        id,
        displayName,
        fileName,
        downloadUrl,
        isAvailable,
        gameVersion
    ) {
        this.id = id;
        this.displayName = displayName;
        this.fileName = fileName;
        this.downloadUrl = downloadUrl;
        this.isAvailable = isAvailable;
        this.gameVersion = gameVersion;
    }
}