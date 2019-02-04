---
to: src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name) %>.saga.ts
---
<%
 CamelCaseName = h.changeCase.camel(name)
 PascalCaseName = h.changeCase.pascal(name)
%>
import { take } from "redux-saga/effects";
import { getType } from "typesafe-actions";
import * as actions from "./<%= CamelCaseName %>.actions";

function* <%= CamelCaseName %>Saga() {
  while (true) {
    yield take(getType(actions.sample<%= PascalCaseName %>Action));
  }
}

export default <%= CamelCaseName %>Saga;
