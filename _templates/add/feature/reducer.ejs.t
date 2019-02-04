---
to: src/features/<%= h.changeCase.camel(name)  %>/<%= h.changeCase.camel(name) %>.reducer.ts
---
<%
 CamelCaseName = h.changeCase.camel(name)
 PascalCaseName = h.changeCase.pascal(name)
%>
import { getType } from "typesafe-actions";
import * as actions from "./<%= CamelCaseName %>.actions";
import { <%= PascalCaseName %>Action, <%= PascalCaseName %>State } from "./<%= CamelCaseName %>.types";

const initialState: <%= PascalCaseName %>State = {

};

export default function(state: <%= PascalCaseName %>State = initialState, action: <%= PascalCaseName %>Action): <%= PascalCaseName %>State {
  switch (action.type) {
    case getType(actions.sample<%= PascalCaseName %>Action):
      return {
        ...state,
      };

    default:
      return state;
  }
}

