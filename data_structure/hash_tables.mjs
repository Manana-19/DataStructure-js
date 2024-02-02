class HashMap {
    
    constructor() {
        this.data = {};
        this.length = 0;
    };

    _hash(key) {
        var hashedKey = 0
        for (var i = 0; i < key.length; i++) {
            hashedKey = hashedKey + Math.floor(((key[i].charCodeAt(0)*i)) / key.length)
        };
        return hashedKey
    };

    insert(value) {
        const key = this._hash(value);
        if (this.data[key]) {
            this.data[key].append(value);
        } else {
            this.data[key] = [value];
        };
    };

    // remove function


};

