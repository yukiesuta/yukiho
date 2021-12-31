<?php

require('../app/functions.php');

// $message = trim(filter_input(INPUT_GET, 'message'));
// $message = $message !== '' ? $message : '...';
// $username = filter_input(INPUT_GET, 'username');

// $colors = filter_input(INPUT_GET,'color',FILTER_DEFAULT,FILTER_REQUIRE_ARRAY);
// $colors = empty($colors) ? 'non selected':implode(',',$colors);
// ??:null合体演算子 ??のまえがnullで返されたなら??の後を読み込む

// $colorFromGet = filter_input(INPUT_GET,'color') ?? 'transparent';
// $SESSION['color'] = $colorFromGet;
// setcookie('color',$colorFromGet);
$message = trim(filter_input(INPUT_POST,'message'));
$message = $message !== '' ? $message : '...';

$filename = '../app/messages.txt';
$fp = fopen($filename,'a');
fwrite($fp,$message."\n");
fclose($fp);

require('../app/_parts/_header.php');

?>

<p>message added</p>

<p><a href="index.php">Go back</a></p>


<?php
include('../app/_parts/_footer.php');
