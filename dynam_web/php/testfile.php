<?php
$fh = fopen("testfile.txt", 'w') or die("Создать файл не удалось");

$text = <<< _END
String 1
String 2
String 3

_END;
fwrite($fh, $text) or die("Сбой записи файла");
fclose($fh);
echo "Файл 'testfile.txt' записан успешно";
