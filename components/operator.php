<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
<link rel="stylesheet" href="styles.css">

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" id="add-lnum"> +
    <input type="number" id="add-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" onclick="add_circles('add')">add</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="sub-lnum"> - 
    <input type="number" name="num-steps" id="sub-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" onclick="reduce_circles('subtract')">subtract</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="mul-lnum"> * 
    <input type="number" name="num-steps" id="mul-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" onclick="multiply_circles()">multiply</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="div-lnum"> / 
    <input type="number" name="num-steps" id="div-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" onclick="split_circles()">divide</button>
</span>

<!-- size -->
<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="greater-lnum"> > 
    <input type="number" name="num-steps" id="greater-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" id="greater-btn" onclick="compare('greater')">compare</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="less-lnum"> < 
    <input type="number" name="num-steps" id="less-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" id="less-btn" onclick="compare('less')">compare</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="greaterEqual-lnum"> >= 
    <input type="number" name="num-steps" id="greaterEqual-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" id="greater-equal-btn" onclick="compare('greaterEqual')">compare</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="lessEqual-lnum"> <= 
    <input type="number" name="num-steps" id="lessEqual-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" id="less-equal-btn" onclick="compare('lessEqual')">compare</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="equal-lnum"> == 
    <input type="number" name="num-steps" id="equal-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" id="equal-equal-btn" onclick="compare('equal')">compare</button>
</span>

<span class="button has-background-success-light is-light is-text-left is-fullwidth my-3">
    <input type="number" name="num-steps" id="notEqual-lnum"> != 
    <input type="number" name="num-steps" id="notEqual-rnum">
    <button class="button is-success is-focused has-text-weight-bold px-3 mx-3" name="operator-1" id="not-equal-btn" onclick="compare('notEqual')">compare</button>
</span>