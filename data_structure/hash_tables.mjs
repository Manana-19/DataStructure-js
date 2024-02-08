class HashMap {
    
    constructor() {
        this.data = {};
        this.length = 0;
        this.data.keyList = [];
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
            this.data.keyList.push(key);
        };
    };

    remove(value) {
        const key = this._hash(value);
        if (this.data[key]) {
            return this.data[key].pop(this.data[key].findIndex(value));
        } else {
            return null;
        }
    };

    show() {

        // Getting all the required variables
        // data -> 'this.data' where we have all the data in the form of dictionary which can be accessed using keys
        // keys -> 'this.data.keyList' where we keep the track of Keys in the dictionary in order to get back the data
        // ArrToReturn -> list of the data to be returned in the form of [key, value]

        const data = this.data;
        const keys = data.keyList;
        
        const ArrToReturn = [];


        // Looping through each key and appending all the data in our final array
        keys.forEach(key => {
            ArrToReturn.push([key, data[keys]]);
        });


        // Returning the final Array
        return ArrToReturn;
    }

};

export default HashMap;