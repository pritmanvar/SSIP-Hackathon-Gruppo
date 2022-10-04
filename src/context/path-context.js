import React from "react";

const pathContext = React.createContext({
    navigateToRegister: undefined,
    navigateToLogin: undefined,
    navigateToHome: undefined,
    navigateToMeets: undefined,
});

export default pathContext;