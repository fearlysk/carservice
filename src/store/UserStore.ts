import { makeAutoObservable } from "mobx";
import { makePersistable, hydrateStore, stopPersisting } from "mobx-persist-store";
import { EncryptStorage } from 'encrypt-storage';

export const encryptStorage = new EncryptStorage(process.env.REACT_APP_SECRET_KEY as string);

export default class UserStore {
    isAuth = false;
    user = {};

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        makePersistable(this, { name: 'UserStore', properties: ['isAuth', 'user'], storage: encryptStorage as any});
    }
    
    async hydrateStore() {
        await hydrateStore(this);
    }

    stopStore() {
        stopPersisting(this);
    }

}
