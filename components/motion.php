<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
<link rel="stylesheet" href="styles.css">

<span class="button has-background-info-light is-light is-text-left is-fullwidth my-3">
    Move <input type="number" name="num-steps" id="right"> steps to the right
    <button class="button is-info is-focused has-text-weight-bold px-4 mx-4" name="motion-1" onclick="move_sprite('right')">Move</button>
</span>

<span class="button has-background-info-light is-light is-text-left is-fullwidth my-3">
    Move <input type="number" name="num-steps" id="left"> steps to the left
    <button class="button is-info is-focused has-text-weight-bold px-4 mx-4" name="motion-2" onclick="move_sprite('left')">Move</button>
</span>

<span class="button has-background-info-light is-light is-text-left is-fullwidth my-3">
    Move <input type="number" name="num-steps" id="down"> steps downwards
    <button class="button is-info is-focused has-text-weight-bold px-4 mx-4" name="motion-3" onclick="move_sprite('down')">Move</button>
</span>

<span class="button has-background-info-light is-light is-text-left is-fullwidth my-3">
    Move <input type="number" name="num-steps" id="up"> steps upwards
    <button class="button is-info is-focused has-text-weight-bold px-4 mx-4" name="motion-3" onclick="move_sprite('up')">Move</button>
</span>

<span class="button has-background-info-light is-light is-fullwidth my-3">
    Turn ⭮<input type="number" name="clockwise" id="clockwise"> degrees
    <button class="button is-info is-focused has-text-weight-bold px-4 mx-4" name="motion-2" onclick="rotate_sprite('clockwise')">Move</button>
</span>

<span class="button has-background-info-light is-light is-fullwidth my-3">Turn ⭯
    <input type="number" name="counter-clockwise" id="counter-clockwise"> degrees
    <button class="button is-info is-focused has-text-weight-bold px-4 mx-4" name="motion-3" onclick="rotate_sprite('counter-clockwise')">Move</button>
</span>

<span class="button has-background-info-light is-light is-fullwidth my-3">go to
    <p class="location ml-1">random_position</p>
    <button id="goto" class="button is-info is-focused has-text-weight-bold px-4 mx-4" onclick="random_position()">Move</button>
</span>