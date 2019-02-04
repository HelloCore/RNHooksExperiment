---
inject: true
to: src/typings/RootAction.ts
after: export type RootAction
skip_if: "\\| <%= h.changeCase.pascal(name)  %>Action"
---
                        | <%= h.changeCase.pascal(name)  %>Action