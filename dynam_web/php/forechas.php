<!-- Последовательный перебор элементов числового массива с использованием цикла foreach...as -->

<?php
$paper = array("Copier", "Inkjet", "Laser", "Photo");

$i = 0;
foreach ($paper as $item) {
    echo "$i: $item<br>";
    $i++;
}
