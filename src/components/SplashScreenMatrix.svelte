<svelte:head>
	<meta name="google" content="notranslate">
</svelte:head>

<div id="matrix">
	<div class="d1 c1 de" style="left:1%;">但是<span>房地产开发商</span>在所需方向大海<span>如果谁觉得</span>它永远是</div>
	<div class="d3 f1" style="left:7%;">スタイル上品な冒険家とのウェブサイトのた</div>
	<div class="d1 f2 c1" style="left:14%;">רכיםאוןקאַנוויניאַנס</div>
	<div class="d2 f1" style="left:19%;">부동산바다 의일부그리고밖으 로의장점으로</div>
	<div class="d4 c3 de" style="left:26%;">ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽ</div>
	<div class="d2 c1" style="left:33%;">な冒険家とのウェ</div>
	<div class="d3 f2 c1" style="left:40%;">在所需方向大海 在所需方向大海</div>
	<div class="d1 c1" style="left:43%;">바다 의일부그리고밖으 로의장</div>
	<div class="d3 de" style="left:47%;">房地产开发商</div>
	<div class="d4 f1" style="left:58%;">부동산바다 의일부그리고밖으 로의장점</div>
	<div class="d2 de" style="left:67%;">タイル上品な冒険家とのウェブサ</div>
	<div class="d3 f2" style="left:72%;">スタイル上品な冒険家とのウェ向大海在所需方向大海</div>
	<div class="d1 f1" style="left:81%;">ル上品な冒険家とのウ</div>
	<div class="d4 c1" style="left:91%;">부그리고밖으 로의장점</div>
	<div class="d2 de" style="left:95%;">כיםאוןקאַנוויניאַ</div>
</div>

<style>
	#matrix {
	  margin: auto;
	  width: 100%;
	  height: 100%;
	  background: #1c2022;
	  background-image: -webkit-gradient(
	    linear,
	    0% 90%,
	    0% 100%,
	    from(rgba(0, 255, 0, 0)),
	    to(rgba(0, 255, 0, 0.1))
	  );
	  color: rgba(0, 255, 0, 0.7);
	  text-shadow: rgba(255, 255, 255, 0.8) 0px 0px 4px;
	  position: relative;
	}
	@-webkit-keyframes fade {
	  0% {
	    opacity: 1;
	  }
	  100% {
	    opacity: 0;
	  }
	}
	@-webkit-keyframes fall {
	  from {
	    top: -250px;
	  }
	  to {
	    top: 300px;
	  }
	}

	#matrix div {
	  /* writing-mode: tb-rl; - ughh. doesn't work */
	  position: absolute;
	  top: 0;
	  /* arrearance */
	  -webkit-transform-origin: 0%;
	  -webkit-transform: rotate(90deg);

	  /* animation */
	  -webkit-animation-name: fall, fade;
	  -webkit-animation-iteration-count: infinite; /* use 0 to infinite */
	  -webkit-animation-direction: normal; /* default is normal. use 'alternate' to reverse direction */
	  -webkit-animation-timing-function: ease-out;
	}
	#matrix span {
	  color: rgb(0, 255, 0);
	  text-shadow: rgb(255, 255, 255) 0px 0px 5px;
	}
	.f1 {
	  font-size: 1.2em;
	}
	.f2 {
	  font-size: 0.9em;
	}
	.c1 {
	  color: rgba(0, 255, 0, 0.5);
	}
	.d1 {
	  -webkit-animation-duration: 4s;
	}
	.d2 {
	  -webkit-animation-duration: 6s;
	}
	.d3 {
	  -webkit-animation-duration: 8s;
	}
	.d4 {
	  -webkit-animation-duration: 10s;
	}
	.de {
	  -webkit-animation-delay: 3s;
	}
</style>