---
inject: true
to: src/redux/rootSaga.ts
after: yield all
skip_if: <%= h.changeCase.camel(name)  %>Saga
---
    fork(<%= h.changeCase.camel(name)  %>Saga),