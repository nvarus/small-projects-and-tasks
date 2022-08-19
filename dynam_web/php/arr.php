<?php
// Добавление элементов в массив и извлечение их из массива

$paper[] = "Copyer";
$paper[] = "Inkjet";
$paper[] = "Laser";
$paper[] = "Photo";

for ($i = 0; $i < 4; ++$i)
    echo "$i: $paper[$i]\n<br>";

// Ассоциативные массивы
$pap2['copier'] = "Copier & Multipurpose";
$pap2['inkjet'] = "Inkjet Printer";
$pap2['laser'] = "Laser Printer";
$pap2['photo'] = "Photographic Paper<br>";
echo $pap2['laser'] . "\n<br>";
echo $pap2['photo'] . "\n<br>";
