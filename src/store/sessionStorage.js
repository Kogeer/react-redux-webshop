export const loadSessionState = () => {
    try {
        const serializedState = sessionStorage.getItem('prodItems');
        if(serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
}

export const saveSessionState = (state) => {
    try {
        const serializedState = JSON.stringify(state.prodItems);
        sessionStorage.setItem('prodItems',serializedState);
    } catch (err) {
        ///ignore
    }
}