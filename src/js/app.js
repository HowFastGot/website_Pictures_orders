import modals from "./modules/modals.js";
import sliders from "./modules/sliders.js";
import forms from "./modules/forms.js";
import masks from "./modules/masks.js";
import checkTextIputs from "./modules/checkTextIputs.js";
import showMoreStyles from "./modules/showMoreStyles.js";
import calculator from "./modules/calculator.js";
import filters from "./modules/filters.js";
import replaceByHover from "./modules/hover.js";
import accordion from "./modules/accordion.js"
import burger from "./modules/burger.js";
import scrolling from "./modules/scrolling.js";
import drop from "./modules/drop.js";

window.addEventListener("DOMContentLoaded", function () {
     "use strict";
     modals();
     sliders(".feedback-slider-item", "horizontal", ".main-prev-btn", ".main-next-btn");
     sliders(".main-slider-item", "vertical");
     forms();
     masks("[name='phone']");
     checkTextIputs('[name="message"]');
     checkTextIputs('[name="name"]');
     showMoreStyles(".button-styles", "#styles .row");
     calculator("#size", "#material", "#options", ".promocode", ".calc-price");
     filters();
     replaceByHover(".sizes-block");
     accordion(".accordion-heading", ".accordion-block");
     burger(".burger", ".burger-menu");
     scrolling(".pageup");
     drop();
});