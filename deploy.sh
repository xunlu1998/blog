npm run build

cd .vuepress/dist

git init
git add -A
git commit -m 'static files'

git push -f git@github.com:xunlu1998/blog.git master:xunlu

