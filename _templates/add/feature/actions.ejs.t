---
to: src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name) %>.actions.ts
---
<%
 CamelCaseName = h.changeCase.camel(name)
 PascalCaseName = h.changeCase.pascal(name)
%>
import { createStandardAction } from "typesafe-actions";

export const sample<%= PascalCaseName %>Action = createStandardAction("<%= CamelCaseName %>Action")<void>();
