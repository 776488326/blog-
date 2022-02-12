#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 推送源码

git init
git add -A
git commit -m "deploy update"
git push -f https://github.com/776488326/blog-.git master # 推送到github gh-pages分支


# https://github.com/776488326/blog-.git