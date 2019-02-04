---
to: src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name) %>.types.ts
---
<%
 CamelCaseName = h.changeCase.camel(name)
 PascalCaseName = h.changeCase.pascal(name)
%>
import { ActionType } from "typesafe-actions";
import * as actions from "./<%= CamelCaseName %>.actions";

export type <%= PascalCaseName %>Action = ActionType<typeof actions>;

export interface <%= PascalCaseName %>State {}
