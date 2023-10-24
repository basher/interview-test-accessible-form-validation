!function() {
    /* eslint-disable @typescript-eslint/no-explicit-any */ class e {
        constructor(e){
            this.form = e, this.errorFieldClass = "form__field--has-error", this.errorMsgClass = "form__error", this.init();
        }
        static start() {
            let r = document.querySelectorAll('[data-module="form-validate"]');
            [
                ...r
            ].forEach((r)=>{
                let t = new e(r);
                return t;
            });
        }
        init() {
            this.initFormValidate(), this.form.addEventListener("submit", (e)=>this.handleSubmit(e)), this.form.addEventListener("blur", (e)=>{
                this.handleBlur(e);
            }, !0);
        }
        initFormValidate() {
            this.form.noValidate = !0;
        }
        handleSubmit(e) {
            if (!this.form.checkValidity()) {
                e.preventDefault(), [
                    ...this.form.elements
                ].forEach((e)=>{
                    e.checkValidity() || this.showError(e);
                }); // Focus on 1st error.
                let r = this.form.querySelector("[aria-invalid]");
                r?.focus();
            }
        }
        handleBlur(e) {
            let r = e.target; // If field is valid, remove any errors.
            if (r?.checkValidity()) {
                if ("submit" === r.type || "reset" === r.type) return;
                this.removeError(r);
            }
        }
        showError(e) {
            let r = document.createElement("span"), t = e.closest(".form__field");
            r.classList.add(this.errorMsgClass), r.id = "" !== e.name ? `${e.name}-error` : `${e.id}-error`, r.textContent = e.validationMessage, t?.classList.add(this.errorFieldClass), t?.querySelector(`#${r.id}`) || t?.appendChild(r), e.setAttribute("aria-invalid", "true"), e.setAttribute("aria-describedby", r.id);
        }
        removeError(e) {
            let r = e.closest(".form__field"), t = r.querySelector(`.${this.errorMsgClass}`);
            e.removeAttribute("aria-invalid"), e.removeAttribute("aria-describedby"), r?.classList.remove(this.errorFieldClass), t?.remove();
        }
    }
    e.start();
}(); //# sourceMappingURL=index.d0438cdb.js.map

//# sourceMappingURL=index.0fdeaccc.js.map
