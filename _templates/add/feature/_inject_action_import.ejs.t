---
inject: true
to: src/typings/RootAction.ts
after: from "react-navigation"
skip_if: src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name)  %>.types
---
import { <%= h.changeCase.pascal(name)  %>Action } from "src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name)  %>.types";