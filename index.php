<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Block Buddy  </title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <nav class="navbar has-background-dark-grey" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
            <img src="images/cs0035-tbglogo.png" alt="Logo" class="image is-64x64 p-1">
            <div class="navbar-item navbar-center has-text-weight-bold is-size-3">
                <span class="has-text-success">B</span>
                <span class="has-text-warning">l</span>
                <span class="has-text-white-ter">o</span>
                <span class="has-text-primary">c</span>
                <span class="has-text-danger mr-2">k</span>
                <span class="has-text-info">B</span>
                <span class="has-text-primary ">u</span>
                <span class="has-text-warning">d</span>
                <span class="has-text-danger">d</span>
                <span class="has-text-white-ter">y</span>
            </div>
        </div>

        <div id="navbarMenu" class="navbar-menu is-hidden-touch">
            <div class="navbar-end">
                <a class="navbar-item js-modal-trigger has-text-link-light has-text-weight-bold" href="#" data-target="modal-js-example">About</a>
            </div>
        </div>
    </nav>

    <div class="columns is-multiline is-desktop">
        <div class="column is-2 my-1">
            <button class="button is-info is-fullwidth my-2 has-text-weight-bold is-size-5" name="motion" onclick="show_buttons('motion')">MOTIONS<img class="img-btn ml-1" src="images/motion-btn.png" alt=""></button>
            <button class="button is-success is-fullwidth my-2 has-text-weight-bold is-size-5" name="operator" onclick="show_buttons('operator')">OPERATORS<img class="img-btn ml-1" src="images/operators-btn.png" alt=""></button>
            <button class="button is-warning is-fullwidth my-2 has-text-weight-bold is-size-5" name="event" onclick="show_buttons('events')">EVENTS<img class="img-btn ml-1" src="images/events-btn.png" alt=""></button>
            <button class="button is-link is-fullwidth my-2 has-text-weight-bold is-size-5" name="looks" onclick="show_buttons('looks')">LOOKS<img class="img-btn ml-1" src="images/looks-btn.png" alt=""></button>
        </div>

        <div class="column is-4">
            <div class="content-area">
                <div class="is-text-left my-3" id="content-area"></div>
            </div>
        </div>

        <div class="column is-one-half my-3">
            <div class="box" id="container">
                <div id="circle-container" class="circle-container"></div>
                <div id="popup" class="popup">
                    <span id="popup-text"></span>
                </div>
                <img src="images/cs0035-logo.png" alt="" id="sprite">
            </div>
            <div class="box" id="response-area" style="padding-top:-50%; position:relative;"></div>
        </div>
    </div>

    <div class="modal" id="modal-js-example">
        <div class="modal-background"></div>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title is-size-2 has-text-weight-bold glow">Coding Block</p>

                <button class="delete" aria-label="close"></button>
            </header>
            <section class="modal-card-body has-text-centered">
                <img src="images/IMMT.png" alt="" class="img-grp">
                <h2 class="title is-3 mb2 has-text-success-light has-text-weight-bold">tR0ph4n6 Kh0uL3t$</h2>
                <h3 class="title is-4 mb-1">MARTIN, Katryna Lei V.</h3>
                <h3 class="title is-4 mb-1">INACAY, Vassili L.</h3>
                <h3 class="title is-4 mb-1">TAN, Adrian Jude P.</h3>
                <h3 class="title is-4 mb-1">MAGISTRADO, Zach Stephan A.</h3>
            </section>
            <footer class="modal-card-foot center-footer">
                <div class="footer-content">
                    <h3 class="title is-4 mb-1">3rd Year BSCS - AN31</h3>
                    <h4 class="subtitle is-6">CS0035: Final Project</h4>
                </div>
            </footer>


        </div>
    </div>

    <script src="index.js"></script>
</body>

</html>