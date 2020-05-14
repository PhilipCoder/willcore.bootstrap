const view = (model) => {
    model.$saveChanges.onclick.event = () => {
        model.close({ message: "result saved" });
    };
};

export { view };