---
to: src/components/<%= h.changeCase.camel(group)  %>/<%= h.changeCase.pascal(name) %>/index.ts
---
import <%= h.changeCase.pascal(name) %> from "./<%= h.changeCase.pascal(name) %>";
export default <%= h.changeCase.pascal(name) %>;