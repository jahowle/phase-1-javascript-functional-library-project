function ifArray(object) {
    return Array.isArray(object)
}

function myEach(collection, callback) {
   if (ifArray(collection)) {

    for (const elm of collection) {
        callback(elm)
    }
    } else {
        Object.values(collection).forEach(val => callback(val));
    }
    return collection
}

function myMap(collection, callback) {
    if (ifArray(collection)) {
        const newArray = []
        for (const elm of collection) {
            newArray.push(callback(elm))
        }
        return newArray
    } else {
        const objectValues = Object.values(collection)
        const newArray = []
        for (const elm of objectValues) {
            newArray.push(callback(elm))
        }
        console.log(newArray)
        return newArray
    }
}

function myReduce(collection, callback, acc) {
    if (ifArray(collection)) {
        if (!acc) {
            acc = collection[0];
            collection = collection.slice(1)
        }

        for (const elm of collection) {
            acc = callback(acc, elm, collection)
        }
        return acc

    } else {
        newArray = Object.values(collection)
        if (!acc) {
            acc = newArray[0]
            newArray = newArray.slice(1)
            
        }

        for (const elm of newArray) {
            acc = callback(acc, elm, newArray)
        }
        console.log(acc)
        return acc
    }
}

function myFind(collection, predicate) {
    if (ifArray(collection)) {
        for (const elm of collection) {
            if (predicate(elm)) {
                console.log(elm)
                return elm
            }
        }    
    } else { 
        newArray = Object.values(collection)
        for (const elm of newArray) {
            if (predicate(elm)) {
                return elm
            }
        }

    }
}

function myFilter (collection, predicate) {
    if (ifArray(collection)) {
        const newCollection = []
        for (const elm of collection)
            if (predicate(elm)) {
                newCollection.push(elm)
            }
            return newCollection

    } else {
        const newCollection = []
        newArray = Object.values(collection)
        for (const elm of newArray)
            if (predicate(elm)) {
                newCollection.push(elm)
            }
            return newCollection

    }
}

function mySize(collection) {
    if (ifArray(collection)) {
        console.log(collection.length)
        return collection.length

    } else {
        newArray = Object.values(collection)
        console.log(newArray.length)
        return newArray.length

    }
}

function myFirst(array, n) {
    if (!n) {
        console.log(array[0])
        return array[0]
    } else {
        console.log(array.slice(0, n))
        return array.slice(0, n)
    }

}

function myLast(array, n) {
    if (!n) {
        return array.pop()
    } else {
        return array.slice(-n)
    }
}

function myKeys(object) {
    return Object.keys(object)
}

function myValues(object) {
    return Object.values(object)
}