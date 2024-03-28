<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
<link rel="stylesheet" href="styles.css">

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" id="add-lnum"> +
    <input type="number" id="add-rnum">
    <button class="button is-primary px-3 mx-3" name="operator-1" onclick="addCircles('add')">add</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="sub-lnum"> - 
    <input type="number" name="num-steps" id="sub-rnum">
    <button class="button is-primary px-3 mx-3" name="operator-1" onclick="updateCircles('subtract')">subtract</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="mul-lnum"> * 
    <input type="number" name="num-steps" id="mul-rnum">
    <button class="button is-primary px-3 mx-3" name="operator-1" onclick="multiplyCircles()">multiply</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="div-lnum"> / 
    <input type="number" name="num-steps" id="div-rnum">
    <button class="button is-primary px-3 mx-3" name="operator-1" onclick="divideCircles()">divide</button>
</span>

<!-- opacity -->
<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="greater-lnum"> > 
    <input type="number" name="num-steps" id="greater-rnum">
    <button class="button is-primary px-3 mx-3" name="operator-1" onclick="divideCircles()">compare</button>
</span>