const view = (model) => {
    model.$saveChanges.onclick.event = () => {
        model.close({ message: "result saved:"+model.data.message });
    };
};

export { view };