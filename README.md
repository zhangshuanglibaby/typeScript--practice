<!--
 * @Date: 2022-11-11 16:38:29
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-11 22:32:03
 * @Description: 这是****文件
-->
# typescript--practice

全局安装typescript
npm install typescript -g

安装完后 会有tsc命令
可根据 tsc -v查询版本号

运行： tsc 文件名


考虑到编译的时候，需要输入 tsc 文件名来编译成js，然后再用node去调用js比较繁琐
可以安装以下依赖，直接在node中运行ts
npm install @types/node -D
npm install ts-node -g

通过ts-node -v 查询版本号
运行：ts-node 文件名