<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@1.0.0/css/bulma.min.css">
<link rel="stylesheet" href="styles.css">

<?php
function moveSprite($direction, $degrees) {
    // Handle sprite movement logic based on direction and degrees
    if ($direction == 'right') {
        // Move sprite to the right
        // Perform any additional motion logic here
    } elseif ($direction == 'left') {
        // Move sprite to the left
        // Perform any additional motion logic here
    }
    // You can add more conditions for other directions as needed
}

// Check if form is submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Handle sprite movement based on the submitted form data
    if (isset($_POST['motion-1'])) {
        $numSteps = isset($_POST['num-steps']) ? $_POST['num-steps'] : 0;
        moveSprite('right', $numSteps);
    } elseif (isset($_POST['motion-2'])) {
        $degrees = isset($_POST['clockwise']) ? $_POST['clockwise'] : 0;
        moveSprite('left', $degrees);
    }
}
?>


<span class="button is-info is-light is-text-left is-fullwidth my-3">
    Move <input type="number" name="num-steps"> steps
    <button class="button is-primary px-6 mx-4" name="motion-1"></button>
</span>

<span class="button is-info is-light is-fullwidth my-3">
    Turn ⭮<input type="number" name="clockwise"> degrees
    <button class="button is-primary px-6 mx-4" name="motion-2"></button>
</span>

<span class="button is-info is-light is-fullwidth my-3">Turn ⭯
    <input type="number" name="counter-clockwise"> degrees
    <button class="button is-primary px-6 mx-4" name="motion-3"></button>
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

<script>
    
</script>