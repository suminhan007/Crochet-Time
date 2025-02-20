const isWhite = (value: string) => {
    if (
        value === "white" ||
        value === "#fff" ||
        value === "#FFF" ||
        value === "#ffffff" ||
        value === "#FFFFFF"
    ) {
        return true;
    } else {
        return false;
    }
};

export default isWhite;