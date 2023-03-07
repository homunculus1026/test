<?php
 function es($data, $charset = "UTF-8"){
    if (is_array($data)) {
        //isがつく関数はtrueかfalseを返す
        return array_map(__METHOD__, $data);
    } else {
        return htmlspecialchars($data, ENT_QUOTES, $charset);
    }
 }
 //文字列がくればそのままhtmlspecialcharsでブラウザに表示される
 //配列がくればtrueとなり$dataを再帰呼び出しを行い文字列となる
 //再度es関数が実行され、$dataはfalseとなり、htmlspecialcharsでブラウザに表示される

 function cken(array $data){
    //配列しか受け取らない
    $result = true;
    foreach ($data as $key => $value) {
        if (is_array($value)) {
            $value = implode("", $value);
        }
        if (!mb_check_encoding($value)) {
            $result = false;
            break;
        }
    }
    return $result;
 }