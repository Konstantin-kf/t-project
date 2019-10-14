To reproduce the error you should move the directory "tools" to "node_modules" - after "npm install" command.

Command to run:
ts-mocha -p doc-app/tests/tsconfig.json doc-app/tests/lus-tests.ts
or
ts-node -P ./doc-app/tests/tsconfig.json -r ./doc-app/tests/lus-tests.ts
