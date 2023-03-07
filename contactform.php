<?php
  require_once "../../lib/util.php";

  if (!cken($_POST)) {
    $encoding = mb_internal_encoding();
    $err = "Encoding Error! The expected encoding is" . $encoding;

    exit($err);
  }
  $_POST = es($_POST);
?>

<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="utf-8">
    <meta name="robots" content="noindex,nofollow">
    <title>お問い合わせ完了</title>
</head>

<body>
<div>
<?php
//  $name = $_POST["name"];
//  $furigana = $_POST["furigana"];
//  $tel = $_POST["tel"];
//  $email = $_POST["email"];
//  $textarea = $_POST["textarea"];

//  echo '名前は{name}';
?>

<?php
 $isError = false;
 //=エラーではないという意味
 if (isset($_POST['name'])) {
    $name = trim($_POST['name']);
    if ($name === "") {
        //空白のときエラー
        $isError = true;
    }
 } else {
     //遷移せずにいきなりページに飛んだ場合エラー
    $isError = true;
 }
 ?>

 <?php if ($isError): ?>
    <span class="error">名前を入力してください。</span>
      <form method="POST" action="form.html">
    <input type="submit" value="戻る">
      </form>
  <?php else: ?>
   <span>
      <?= $name ; ?>さん。
      こんにちは、<?= $name ; ?>さん。
   </span>
  <?php endif;?>

 </div>
</body>
</html>