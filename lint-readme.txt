ESlint -
1. run npm install to install dev dependencies
2. configurations are defined in .eslintrc.json file
3. install Eslint extension in VS Code to get errors highlighted while development
4. run 'npm run lint-errors' to get list of errors in the project
5. run 'npm run lint-errors-chart' to get types of errors in the project
6. changes done in files with eslint errors will not get committed due to lint-stage
7. project will not build successfully if there are lint errors
8. eslint is currently configured to check linting in js and jsx files

Stylelint -
1. run npm install to install dev dependencies
2. configurations are defined in .stylelintrc.json file
3. install Stylelint extension in VS Code to get errors highlighted while development
4. run 'npm run stylelint' to get list of errors in the project
5. stylelint is currently configured to check linting in css files
6. stylelint errors will not cause build errors