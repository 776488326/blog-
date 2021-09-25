#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build
# 进入生成的文件夹
cd docs/.vuepress/dist
# 推送至仓库
git init
git add -A
git commit -m "deploy"
git push -f git://github.com/776488326/776488326.github.io.git master # 推送到github gh-pages分支
# 删除编译后的dist文件夹
cd -
rm -rf docs/.vuepress/dist
