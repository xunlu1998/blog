set -e

npm run build

cd .vuepress/dist

echo 'www.xunlu.xyz' > CNAME

git init
git add -A
git commit -m 'static files'

git push -f git@github.com:xunlu1998/blog.git master:xunlu
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:xunlu1998/xunlu1998.github.io.git master

# cd -