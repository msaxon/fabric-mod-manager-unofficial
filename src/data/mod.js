export default class Mod {
    constructor(
        id,
        name,
        fileName,
        downloadUrl,
        isAvailable,
        gameVersion
    ) {
        this.id = id;
        this.name = name;
        this.fileName = fileName;
        this.downloadUrl = downloadUrl;
        this.isAvailable = isAvailable;
        this.gameVersion = gameVersion;
    }
}