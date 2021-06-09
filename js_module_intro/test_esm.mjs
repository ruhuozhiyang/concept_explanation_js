const multi = (x, y) => {
    console.log(this === undefined ? '在module中' : '不在module中');
    return x*y;
};

export default multi;