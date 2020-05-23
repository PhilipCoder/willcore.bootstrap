const view = (model, ui) => {
    model.$modalContainer.testModal.bootstrapModal = "/views/modal";
    model.$showModal.onclick.event = async () => {
        let result = await model.$modalContainer.testModal.show();
        console.log(result);
    };
    model.$showModal.bootstrapTooltip = { title: "Click to open modal" };
    model.$popover.bootstrapPopover = { content: "This is a popover" };
    model.$dropdownMenuButton.bootstrapDropdown = {};
    model.$showAlert.onclick.event = async () => {
        ui.myAlert.bootstrapAlert = "Message";
        ui.myAlert = "Hello world!";
        await ui.myAlert;
    };
    model.$showPrompt.onclick.event = async () => {
        ui.myPrompt.bootstrapPrompt = "Message";
        ui.myPrompt = "Hello world!";
        ui.myPrompt = { yes: { label: "Yes", primary: true }, no: { label: "No", primary: false } };
        let result = await ui.myPrompt;
        ui.myAlert.bootstrapAlert = "Message";
        ui.myAlert = `You selected ${result}`;
        await ui.myAlert;
    };
    model.$showToast.onclick.event = async () => {
        ui.bootstrapToast = ["Message", "Hello world!", {style:"default",delay:6000}];
    };
};

export { view };