npm run build
cd dist
git init
git checkout -b main
git add -A
git commit -m 'deploy'
git push -f git@github.com:leonardojribeiro/desafio-ignite-react-01.git main:gh-pages
