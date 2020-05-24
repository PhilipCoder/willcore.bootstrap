const view = (model, ui, server) => {
    model.$saveChanges.onclick.event = () => {
        model.close({ message: "result saved:"+model.data.message });
    };
};

export { view };