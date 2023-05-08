class Footer extends HTMLElement{

    constructor(){
        super();
        this.render();
    };

    render(){

        this.innerHTML = /* html */

        `

        <footer class="text-center text-white mt-3 " style="background-color: #f1f1f1;">
        <!-- Grid container -->

        <!-- Copyright -->
        <div class="text-center text-dark p-3" style="background-color: rgba(0, 0, 0, 0.2);">
            © 2023 Copyright:
            <a class="text-dark" href="https://mdbootstrap.com/">airlands.com</a>
        </div>
        <!-- Copyright -->
        </footer>

        `

    }

}
customElements.define("main-footer",Footer)