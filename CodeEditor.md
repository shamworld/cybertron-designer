# VSCode 使用 EditorConfig 需要去插件市场下载插件 EditorConfig for VS Code

# VSCode 编辑器使用 Prettier 配置需要下载插件 Prettier - Code formatter


# VSCode 使用 ESLint 配置文件需要去插件市场下载插件 ESLint 。

VSCode 在 settings.json 设置文件中，增加以下代码：

```js
"editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
}
```

# 解决 Prettier 和 ESLint 的冲突

让 **Prettier** 配置规则 > **ESLint** 配置规则。

```
yarn add eslint-plugin-prettier eslint-config-prettier -D
```
