<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
<link rel="stylesheet" href="styles.css">

<span class="button has-background-info-light is-light is-text-left is-fullwidth my-3">
    Move <input type="number" name="num-steps" id="right"> steps to the right
    <button class="button is-primary px-4 mx-4" name="motion-1" onclick="moveSprite('right')">Move</button>
</span>

<span class="button has-background-info-light is-light is-text-left is-fullwidth my-3">
    Move <input type="number" name="num-steps" id="left"> steps to the left
    <button class="button is-primary px-4 mx-4" name="motion-2" onclick="moveSprite('left')">Move</button>
</span>

<span class="button has-background-info-light is-light is-text-left is-fullwidth my-3">
    Move <input type="number" name="num-steps" id="down"> steps downwards
    <button class="button is-primary px-4 mx-4" name="motion-3" onclick="moveSprite('down')">Move</button>
</span>

<span class="button has-background-info-light is-light is-text-left is-fullwidth my-3">
    Move <input type="number" name="num-steps" id="up"> steps upwards
    <button class="button is-primary px-4 mx-4" name="motion-3" onclick="moveSprite('up')">Move</button>
</span>

<span class="button has-background-info-light is-light is-fullwidth my-3">
    Turn ⭮<input type="number" name="clockwise" id="clockwise"> degrees
    <button class="button is-primary px-4 mx-4" name="motion-2" onclick="rotateSprite('clockwise')">Move</button>
</span>

<span class="button has-background-info-light is-light is-fullwidth my-3">Turn ⭯
    <input type="number" name="counter-clockwise" id="cclockwise"> degrees
    <button class="button is-primary px-4 mx-4" name="motion-3" onclick="rotateSprite('counter-clockwise')">Move</button>
</span>

<span class="button has-background-info-light is-light is-fullwidth my-3">go to
    <select name="go_to" id="" class="ml-2">
        <option value="" selected disabled></option>
        <option value="random_position">random_position</option>
        <option value="person">person</option>
        <option value="sprite1">sprite1</option>
    </select>
    <button id="goto-btn" class="button is-primary px-6 mx-4"></button>
</span>

