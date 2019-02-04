---
sh: cd <%= cwd %> && yarn tslint --fix src/typings/RootAction.ts src/redux/rootSaga.ts src/redux/rootReducer.ts && yarn prettier --write src/features/<%= h.changeCase.camel(name)  %>/*
---