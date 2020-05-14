const view = (model) => {
    model.$modalContainer.testModal.bootstrapModal = "/views/modal";
    model.$showModal.onclick.event =async () =>{  
        let result = await model.$modalContainer.testModal.show();
        console.log(result);
    };
    model.$showModal.bootstrapTooltip = {title:"Click to open modal"};
    model.$popover.bootstrapPopover = {content:"This is a popover"};
    model.$dropdownMenuButton.bootstrapDropdown = {};
};

export { view };