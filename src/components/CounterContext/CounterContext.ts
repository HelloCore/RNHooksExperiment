import React from "react";

const CounterContext: React.Context<{ counter?: number; setCounter?: (number) => void }> = React.createContext({});

export default CounterContext;
