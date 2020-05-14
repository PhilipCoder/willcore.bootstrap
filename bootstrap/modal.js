import { assignable } from "/willcore/assignable/assignable.js"
import { view } from "/uiModules/logic/view.js";
import { guid } from "/uiModules/helpers/guid.js";
import { elementProxy } from "/uiModules/proxies/elementProxy/elementProxy.js";

class component extends assignable {
    constructor() {
        super({ string: 1 }, elementProxy);
        this._element = null;
        this.id = guid();
        this.modalModel = null;
    }

    get element() {
        this._element = this._element || this.parentProxy._element;
        return this._element;
    }

    completionResult() {
        return {
            _noIntermediateProxy: true,
            show: (options) => {
                $("#" + this.id).modal(options);
                return new Promise(async (resolve, reject) => {
                    let closeModal = (data) => {
                        $("#" + this.id).modal('toggle');
                        resolve(data);
                    };
                    this.modalModel._target.close = closeModal;
                    await this.modalFunction(this.modalModel);
                });
            }
        }
    }

    async completed() {
        let viewInstance = new view(this.bindedValues.string[0]);
        await viewInstance.init();
        let modalDiv = document.createElement("div");
        modalDiv.innerHTML = viewInstance.html;
        modalDiv.childNodes[0].id = this.id;
        this.element.innerHTML = modalDiv.innerHTML;
        this.modalModel = viewInstance.viewModel;
        this.modalFunction = viewInstance.viewFunction;
    }
}

export { component };
