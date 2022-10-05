<!DOCTYPE html>
<html lang="ru">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Автозапчасти от Вовки</title>
</head>

<body>
    <h1>Автозапчасти от Вовки</h1>
    <h2>Результаты заказа</h2>
    <?php
    echo "<p>Заказ обработан в ";
    echo date('H:i, jS F Y');
    echo "</p>";

    // создать короткие имена переменных
    $tireqty = $_POST['tireqty'];
    $oilqty = $_POST['oilqty'];
    $sparkqty = $_POST['sparkqty'];

    echo $tireqty . ' шин</br>';
    echo $oilqty . ' масла</br>';
    echo $sparkqty . ' свечей</br>';



    ?>


</body>

</html>