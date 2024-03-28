<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coding Block</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <div class="columns is-multiline is-mobile">
        <div class="column is-2 my-4">
            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                <!-- Buttons for different motions -->
                <input type="submit" class="button is-info is-fullwidth my-3" name="motion" value="MOTION">
                <input type="submit" class="button is-success is-fullwidth my-3" name="operator" value="OPERATOR">
                <input type="submit" class="button is-warning is-fullwidth my-3" name="event" value="EVENT">
                <input type="submit" class="button is-link is-fullwidth my-3" name="looks" value="LOOKS">
            </form>

        </div>
        <div class="column is-4 ">
            <div class="box is-text-left my-4">
                <!-- Input fields and buttons for sprite movement -->
                <span class="button is-info is-light is-text-left is-fullwidth my-3">
                    Move <input type="number" name="num-steps" id="right"> steps to the right
                    <button class="button is-primary px-6 mx-4" name="motion-1" onclick="moveSprite('right')">Move</button>
                </span>

                <span class="button is-info is-light is-text-left is-fullwidth my-3">
                    Move <input type="number" name="num-steps" id="left"> steps to the left
                    <button class="button is-primary px-6 mx-4" name="motion-2" onclick="moveSprite('left')">Move</button>
                </span>

                <span class="button is-info is-light is-text-left is-fullwidth my-3">
                    Move <input type="number" name="num-steps" id="down"> steps downwards
                    <button class="button is-primary px-6 mx-4" name="motion-3" onclick="moveSprite('down')">Move</button>
                </span>

                <span class="button is-info is-light is-text-left is-fullwidth my-3">
                    Move <input type="number" name="num-steps" id="up"> steps upwards
                    <button class="button is-primary px-6 mx-4" name="motion-3" onclick="moveSprite('up')">Move</button>
                </span>

                <span class="button is-info is-light is-fullwidth my-3">
                    Turn ⭮<input type="number" name="clockwise" id="clockwise"> degrees
                    <button class="button is-primary px-6 mx-4" name="motion-2" onclick="rotateSprite('clockwise')">Move</button>
                </span>

                <span class="button is-info is-light is-fullwidth my-3">Turn ⭯
                    <input type="number" name="counter-clockwise" id="cclockwise"> degrees
                    <button class="button is-primary px-6 mx-4" name="motion-3" onclick="rotateSprite('counter-clockwise')">Move</button>
                </span>

                <span class="button is-info is-light is-fullwidth my-3">go to
                    <select name="go_to" id="" class="ml-2">
                        <option value="" selected disabled></option>
                        <option value="random_position">random_position</option>
                        <option value="person">person</option>
                        <option value="sprite1">sprite1</option>
                    </select>
                    <button id="goto-btn" class="button is-primary px-6 mx-4"></button>
                </span>
            </div>
        </div>
        <div class="column is-one-half my-4">
            <div class="box" id="container">
                <!-- Sprite image -->
                <img src="cs0035-logo.png" alt="" id="sprite">
                <!-- this is -->
            </div>
            <div class="box">
                <div id="responseArea" style="padding-top:-50%; position:relative;"></div>
            </div>
        </div>
    </div>

    <script src="index.js"></script>
</body>

</html>