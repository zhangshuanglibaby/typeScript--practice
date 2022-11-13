/*
 * @Date: 2022-11-13 15:47:23
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-13 16:23:13
 * @Description: 这是****文件
 */
// 在javascritpt中是没有枚举的概念的，ts帮我们定义了枚举的这个类型
// 使用枚举通过 enum 关键字定义
// 1. 数字枚举
// 默认是从0开始的
// blue=0，green=1， red=2
var Types;
(function (Types) {
    Types[Types["blue"] = 0] = "blue";
    Types[Types["green"] = 1] = "green";
    Types[Types["red"] = 2] = "red";
})(Types || (Types = {}));
console.log(Types, 'Types');
var Types2;
(function (Types2) {
    Types2[Types2["blue"] = 3] = "blue";
    Types2[Types2["green"] = 6] = "green";
    Types2[Types2["red"] = 1] = "red";
})(Types2 || (Types2 = {}));
console.log(Types2, 'Types2');
// 增长枚举
// blue初始化为1，其余的成员会从1开始自动增长
var Types3;
(function (Types3) {
    Types3[Types3["blue"] = 1] = "blue";
    Types3[Types3["green"] = 2] = "green";
    Types3[Types3["red"] = 3] = "red";
})(Types3 || (Types3 = {}));
console.log(Types3, 'Types3');
// 2. 字符串枚举
/*
  由于字符串没有自增长的行为，字符串枚举可以很好的序列化。
  如果你正在调试并且必须要读一个数字枚举的运行时的值，这个值通常是很难读的，它并不能代表有用的信息，字符串枚举允许你提供一个运行时有意义的并且
  可读的值，独立于枚举成员的名字
*/
var Types4;
(function (Types4) {
    Types4["blue"] = "blue";
    Types4["green"] = "green";
    Types4["red"] = "red";
})(Types4 || (Types4 = {}));
console.log(Types4, 'Types4');
// 3. 异构枚举
// 枚举可以混合字符串和数字成员
var Types5;
(function (Types5) {
    Types5[Types5["Yes"] = 1] = "Yes";
    Types5["No"] = "no";
})(Types5 || (Types5 = {}));
// 4. 接口枚举
var Types6;
(function (Types6) {
    Types6[Types6["blue"] = 0] = "blue";
    Types6[Types6["green"] = 1] = "green";
})(Types6 || (Types6 = {}));
var obj3 = {
    green: Types6.green
};
console.log(obj3, 'obj3');
console.log(1 /* Types7.Yes */);
// 6. 反响映射
// 它包含了正向映射(name -> value)  和反向映射 (value -> name)
// 要注意的是 不会为字符串枚举成员生成反向映射
var Types8;
(function (Types8) {
    Types8[Types8["success"] = 0] = "success";
})(Types8 || (Types8 = {}));
var success = Types8.success;
var key = Types8[success];
console.log(key, 'key');
