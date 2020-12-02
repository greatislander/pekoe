"use strict";

class PekoeAccordion extends HTMLElement {
    constructor() {
        super();

        this._init = this._init.bind(this);
        this._observer = new MutationObserver(this._init);
    }

    connectedCallback() {
        if (this.children.length) {
            this._init();
        }
        this._observer.observe(this, {
            childList: true
        });
    }

    _init() {
        this.level = this.getAttribute("data-level");
        this.headings = this.querySelectorAll(`h${this.level}`);
        if (!this.headings) {
            return;
        }

        this.initButtons();
        this.initPanels();
    }

    getPanelContent(elem) {
        let elems = [];
        while (elem.nextElementSibling && elem.nextElementSibling.tagName !== `H${this.level}`) {
            elems.push(elem.nextElementSibling);
            elem = elem.nextElementSibling;
        }

        elems.forEach((node) => {
            node.parentNode.removeChild(node);
        });

        return elems;
    }

    initButtons() {
        Array.prototype.forEach.call(this.headings, heading => {
            const button = document.createElement("button");
            button.setAttribute("aria-expanded", "false");
            button.innerText = heading.textContent;
            button.addEventListener("click", this.clickEventListener.bind(this));
            heading.innerText = "";
            heading.appendChild(button);
        });
    }

    initPanels() {
        Array.prototype.forEach.call(this.headings, heading => {
            const panelContent = this.getPanelContent(heading);
            let wrapper = document.createElement("div");
            wrapper.classList.add("panel");
            wrapper.hidden = true;

            panelContent.forEach(node => {
                wrapper.appendChild(node);
            });

            heading.parentNode.insertBefore(wrapper, heading.nextElementSibling);
        });
    }

    clickEventListener(event) {
        const panel = event.target.parentNode.nextElementSibling;
        const expanded = event.target.getAttribute("aria-expanded") === "true" || false;

        event.target.setAttribute("aria-expanded", !expanded);
        panel.hidden = expanded;
    }

}

window.customElements.define("pekoe-accordion", PekoeAccordion);
