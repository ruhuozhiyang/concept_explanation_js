import extend from "./misc.js";

const obj1 = {
    field1: '属性一',
    field2: '属性二',
};
const obj2 = {
    field3: '属性三',
    field4: '属性四',
};

console.log(extend(obj1, obj2)); //{ field1: '属性一', field2: '属性二', field3: '属性三', field4: '属性四' }
