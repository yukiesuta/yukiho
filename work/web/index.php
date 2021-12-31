<?php

require('../app/functions.php');

$filenames = '../app/messages.txt';
$messages = file($filenames,FILE_IGNORE_NEW_LINES);

// $color = filter_input(INPUT_COOKIE,'color' ?? 'transparent';

require('../app/_parts/_header.php');

?>

<ul>
  <?php foreach($messages as $message): ?>
    <li><?=h($message) ; ?></li>
  <?php endforeach; ?>
</ul>
<form action="result.php" method="post">
  <input type="text" name = "message">
  <!-- <input type="text" name="message">
  <input type="text" name="username"> -->
  <!-- <textarea name="message" id="" cols="30" rows="10"></textarea> -->
  <!-- <select name="colors[]" multiple >
    <option value="orange">orange</option>
    <option value="pink">pink</option>
    <option value="gold">gold</option>
  </select> -->
  <!-- <label for=""><input type="radio" name="color" value="orange">orange </label>
  <label for=""><input type="radio" name="color" value="pink">pink </label>
  <label for=""><input type="radio" name="color" value="gold">gold </label>
  <a href="reset.php">[reset]</a> -->
  <button>Post</button>
</form>

<?php


include('../app/_parts/_footer.php');

