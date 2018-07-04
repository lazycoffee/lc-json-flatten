module.exports = function (data: any) {
    const result: any = {};
    function recursive(cur: any, prop: any) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
            for (var i = 0, l = cur.length; i < l; i++) {
                recursive(cur[i], prop ? prop + "." + i : "" + i);
            }
            if (l == 0) {
                result[prop] = [];
            }
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recursive(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty) {
                result[prop] = {};
            }
        }
    }
    recursive(data, "");
    return result;
};