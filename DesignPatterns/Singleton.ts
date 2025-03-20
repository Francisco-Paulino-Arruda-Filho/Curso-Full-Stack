const Singleton = (function () {
    let instance: any = null;
    return class {
        constructor() {
            if (instance) {
                return instance;
            }
            instance = this;
        }
    };
}
)();
