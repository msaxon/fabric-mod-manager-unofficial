export default class Version {
    constructor(major, minor, patch) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
    }

    equals(otherVersion) {
        return this.major === otherVersion.major
            && this.minor === otherVersion.minor
            && this.patch === otherVersion.patch
    }
}