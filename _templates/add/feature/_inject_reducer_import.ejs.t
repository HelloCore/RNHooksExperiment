---
inject: true
to: src/redux/rootReducer.ts
after: from "redux"
skip_if: src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name)  %>.reducer
---
import <%= h.changeCase.camel(name)  %>Reducer from "src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name)  %>.reducer";