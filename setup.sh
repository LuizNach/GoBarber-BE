echo "=> LOG: Initialize package manager: generate package.json"
yarn init -y
echo "=> LOG: Add Express as dependency"
yarn add express
yarn add @types/express -D
echo "=> LOG: Add Typescript as dev dependecy"
yarn add typescript -D
echo "=> LOG: Add tsconfig json file"
yarn tsc --init
# tsconfig uncomment: rootDir: ./src
# tsconfig uncomment: outDir: ./dist
echo "=> LOG: Added watch server addon"
yarn add ts-node-dev -D
echo "=> LOG: Added tslint"
# yarn add eslint@6.8.0 -D
# yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D
# yarn add eslint-import-resolver-typescript -D
echo "=> LOG: Adding date-time managment library"
yarn add date-fns
echo "=> LOG: Create the source folder"
mkdir "src"
touch src/server.ts
# echo "=> LOG: Adding CORS to connect to local FE"
# yarn add cors 