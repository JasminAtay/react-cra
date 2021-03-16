# react-component

# faker
```yarn add faker```
for random images, texts and user names

# gh-pages

```yarn add -D gh-pages```
then add to pakage.json : 
... script:{ 
... "predeploy": "npm run build", 
"deploy": "gh-pages -d build", 
}, 
... "homepage": "https://jasminatay.github.io/react-cra"
to deploy to github run 
```yarn deploy```
go to github repo settings and select gh-page branch fror your github pages repo.

