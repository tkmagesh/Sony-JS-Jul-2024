# TypeScript App Setup
```
Create a folder "ts-app"
```
```
Open the command terminal and cd into the "ts-app" folder
```
```
run the following commands in the terminal
> npm init -y
> npm install typescript --save-dev
> npx tsc --init
```
```
Add the following line in the "scripts" section of the "package.json" file
"build" : "tsc --watch",
```
```
Update the tsconfig.json file the the chances in the following sections
    - "module": "ES6",
    - "rootDir": "./src",
    - "outDir": "./dist",
    - "noEmitOnError": true,
```
```
Create "src" & "dist" folder in "ts-app" folder
```
```
Create "index.ts" file in the "src" folder
```
```
Run the "npm run build" command from the terminal
```

