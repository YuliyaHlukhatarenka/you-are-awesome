// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = value => value;
const createNotEnumerableProperty = value => Symbol( value );
const createProtoMagicObject = () => {    let fun = new Function();
    fun.__proto__ = fun.prototype;
    return fun; }
const incrementor = () => { 
    let count = 1;
    function f() {
        count++;
        return f;
    }
    f.toString = function(){
        return count;
    }
    return f;
 };
const asyncIncrementor = () => {};
const createIncrementer = () => {};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;