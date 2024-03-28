
<?php
if (isset($_GET['direction']) && isset($_GET['left']) && isset($_GET['right']) && isset($_GET['up']) && isset($_GET['down'])) {
    // Get the direction and steps values
    $direction = $_GET['direction'];
    $left = $_GET['left'];
    $right = $_GET['right'];
    $up = $_GET['up'];
    $down = $_GET['down'];


    switch ($direction) {
        case 'left':
            echo "newPositionLeft -= " . $left . " * 50;";
            break;
        case 'right':
            echo "newPositionLeft += " . $right . " * 50;";
            break;
        case 'down':
            echo "newPositionLeft += " . $down . " * 50;";
            break;
        case 'up':
            echo "newPositionLeft -= " . $up . " * 50;";
            break;
    }

} else {
    // If direction or steps parameters are not set, return an error message
    echo "Error: Direction or steps values not provided.";
}
