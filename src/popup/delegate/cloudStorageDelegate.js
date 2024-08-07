import { StorageDelegate } from "./storageDelegate";


const getCloudStorageData = async (key) => {
    return new Promise((resolve, reject) => {
        chrome.storage.sync.get(key, (result) => {
            if (result === undefined || result[key] === undefined) {
                reject(key);
            } else {
                resolve(result[key]);
            }
        })
    }).catch((key) => {
        console.log(`get sync storage data failed for key = ${key}`);
    });
}

const setCloudStorageData = async (key, val) => {

    console.log("set to cloud");
    console.log([key, val]);

    return new Promise((resolve) => {
        chrome.storage.sync.set({ [key]: val });
        resolve();
    }).catch(e => console.log(e));
}

class CloudStorageDelegate extends StorageDelegate {
    constructor(){
        super();
        this.get = getCloudStorageData;
        this.set = setCloudStorageData;
    }
}

const cloudStorageDelegate = new CloudStorageDelegate();
export default cloudStorageDelegate;