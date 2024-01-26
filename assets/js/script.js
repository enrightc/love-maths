<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- font awesome and google fonts-->
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Raleway%7CRighteous" rel="stylesheet">

    <link rel='shortcut icon' type='image/x-icon' href='favicon.ico' />

    <link rel="stylesheet" href="assets/css/style.css" type="text/css">
    <title>Loves Maths!</title>
</head>
<body>
    <h1 class="heading">
        <img class="logo" src="assets/images/logo.png" alt="logo"> 
    </h1>

    <div class="game-area">
        <div class="controls-area">
            <!-- Adding a custom attribute called data-type: If creating own attributes it should have prefix data to differentiate it from default attributes.-->
            <button data-type="addition" class="btn btn--big btn--green">
                <i class="fas fa-plus"></i>
            </button>
            <button data-type="subtract" class="btn btn--big btn--blue">
                <i class="fas fa-minus"></i>
            </button>
            <button data-type="multiply" class="btn btn--big btn--orange">
                <i class="fas fa-times"></i>
            </button>
            <button data-type="division" class="btn btn--big btn--red">
                <i class="fas fa-divide"></i>
            </button>
        </div>

        <div class="question-area">
            <span id="operand1">0</span>
            <span id="operator">x</span>
            <span id="operand2">0</span>
            <span>=</span>
            <p class="answer-message">Enter Answer:</p>
            <input id="answer-box" type="number">
            <button data-type="submit" class="btn btn--gray">Submit Answer</button>
        </div>
    </div>

    <div class="score-area">
        <p>Correct Answers <span id="score">0</span></p>
        <p>Incorrect Answers <span id="incorrect">0</span></p>
        
    </div>
    <script src="assets/js/script.js"></script>
</body>
</html>