<?php
/** Завершите решение так, чтобы оно возвращало значение true, если первый аргумент (строка),
 * переданный в функцию, заканчивается вторым аргументом (также строкой). */

function solution($str, $ending): bool {
	 if (strcasecmp(substr($str, -strlen($ending)), $ending) == 0) return true;
	 return false;
	 
}

echo solution('fails', 'ails');
