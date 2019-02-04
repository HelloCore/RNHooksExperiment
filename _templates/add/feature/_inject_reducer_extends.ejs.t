---
inject: true
to: src/redux/rootReducer.ts
after: rootReducer
skip_if: <%= h.changeCase.camel(name)  %>
---
  <%= h.changeCase.camel(name)  %>: <%= h.changeCase.camel(name)  %>Reducer,