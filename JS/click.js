<!DOCTYPE html>
<html>
<head>
	<title>Fading circle</title>
	<meta charset="utf-8" />
	<meta http-equiv="Content-type" content="text/html; charset= utf-8" />
	<meta name="viewport" content="width=device-width, intital-scale=1" />

	<script src="jquery.min.js"></script>
	
	<style type="text/css">
	.circle {
		height: 40px;
		width: 40px;
		border-radius: 50%;
		background-color: red;
		margin: 10px;
		padding: 10px;
	}

	.square {
		height: 30px;
		width: 30px;
		background-color: grey;
		margin: 10px;
		padding: 10px;
	}
</style>
</head>

<body>
	<div class="circle"></div>
	<div class="square"></div>

	<div class="square"></div>
	<script type="text/javascript">
		$("div").click(function() {
			if ($(this).attr("class") == "circle") {
				alert("cicrle clicked");
			} else {
				alert("its a square");
			}
		});
	</script>

</body>
</html>
