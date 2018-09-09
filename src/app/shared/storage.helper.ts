export class Storage {

    static storeUserInfo(data) {
        Storage.clearAll();
        Storage.store('name', data.name);
        Storage.store('role', data.role);
        Storage.store('loggedIn', true);
    }

    static isLoggedIn() {
        let data = Storage.getItem('loggedIn');
        return data ? true : false;
    }

    static isAdmin() {
        let role = Storage.getItem("role");
      return  role && role === 'admin' ? true : false;
    }

    static isUser() {
        let role = Storage.getItem("role");
      return  role && role === 'user' ? true : false;
    }

    static getName() {
        let name = Storage.getItem("name");
        return name;
    }

    static clearAll() {
        localStorage.clear();
    }

    private static store(key, value) {
        localStorage.setItem(key, value);
    }

    private static getItem(key) {
        return localStorage.getItem(key);
    }
}