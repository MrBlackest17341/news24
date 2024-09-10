<?php
if (empty( $_POST )) die("Bad request");
error_reporting( 0 ); // Fuck PHP 8.2 and all the fucking hipsters
$urls = [ "https://api.skylead.pro/wm/push.json?id=1198-5981f68c6d7b966cbca87d31bc6d2c7c&offer=221&flow=7498" ]; // в этой ссылке заложен id оффера, id потока и id партнера. Ссылка у каждого оффера разная
$data = $_POST;
$data["ip"] = $_SERVER["HTTP_CF_CONNECTING_IP"] ?? $_SERVER["HTTP_X_FORWARDED_FOR"] ?? $_SERVER["REMOTE_ADDR"];
$data["ua"] = $_SERVER["HTTP_USER_AGENT"];
$data["domain"] = "http://dontspyme.com"; // рекламодатель с помощью этого файла хочет узнать адресс страницы с которой пришел клиент, но мы не передаем ему это информацию вставляя просто какой-то левый домен
if (isset( $data["phonecc"] )) $data["phone"] = $data["phonecc"].$data["phone"];
$data = http_build_query( $data );
foreach ( $urls as $url ) {
	$curl = curl_init( $url );
	curl_setopt( $curl, CURLOPT_RETURNTRANSFER, true );
	curl_setopt( $curl, CURLOPT_TIMEOUT, 65 );
	curl_setopt( $curl, CURLOPT_POST, 1 );
	curl_setopt( $curl, CURLOPT_POSTFIELDS, $data );
	curl_setopt( $curl, CURLOPT_USERAGENT, $_SERVER["HTTP_USER_AGENT"] );
	curl_setopt( $curl, CURLOPT_SSL_VERIFYHOST, 0 );
	curl_setopt( $curl, CURLOPT_SSL_VERIFYPEER, 0 );
	$result = json_decode( curl_exec( $curl ), true );
	curl_close( $curl );
	if ( $result ) break;
}
if (count( $_GET )) $result = array_merge( $result, $_GET );
header( "Location: success.php" . http_build_query($result) ); // там где "success.php" - адрес страницы "спасибо" на которую редиректит клиента после отправки заявки
die();
?>