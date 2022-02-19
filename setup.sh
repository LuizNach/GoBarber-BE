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
# Add to package.json the script "dev:server":"ts-node-dev --transpileOnly --ignore-watch node_modules src/server.ts"
echo "=> LOG: Added tslint"
# yarn add eslint@6.8.0 -D
# yarn add @typescript-eslint/eslint-plugin@latest eslint-config-airbnb-base@latest eslint-plugin-import@^2.21.2 @typescript-eslint/parser@latest -D
# yarn add eslint-import-resolver-typescript -D
echo "=> LOG: Adding Uuid library"
yarn add uuid
yarn add @types/uuid
echo "=> LOG: Adding date-time managment library"
yarn add date-fns
echo "=> LOG: Create the source folder"
mkdir "src"
touch src/server.ts
echo "=> LOG: Database support Postgresl with TypeORM"
yarn add typeorm
yarn add pg
yarn add reflect-metadata