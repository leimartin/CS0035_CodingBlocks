<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coding Block</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="columns is-multiline is-desktop">
        <div class="column is-2 my-4">
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <input type="submit" class="button is-info is-fullwidth my-3" name="motion" value="MOTION">
                <input type="submit" class="button is-success is-fullwidth my-3" name="operator" value="OPERATOR">
                <input type="submit" class="button is-warning is-fullwidth my-3" name="event" value="EVENT">
                <input type="submit" class="button is-link is-fullwidth my-3" name="looks" value="LOOKS">
            </form>

        </div>

        <div class="column is-4">
            <div class="box is-text-left my-4">

                <?php
                if (isset($_POST['motion'])) {
                    include "components/motion.php";
                } else if (isset($_POST['operator'])) {
                    include "components/operator.php";
                } else if (isset($_POST['event'])) {
                    include "components/events.php";
                } else {
                    echo "...";
                }
                ?>
            </div>
        </div>

        <div class="column is-one-half my-4">
            <div class="box" id="container">
                <div id="circleContainer" class="circleContainer"></div>
                <div id="imageContainer">
                    <img src="images/cs0035-logo.png" alt="" id="sprite">
                </div>
            </div>
            <div class="box">
                <div id="responseArea" style="padding-top:-50%; position:relative;"></div>
            </div>
        </div>
    </div>

    <script src="index.js"></script>
</body>
</html>