<script>
	import Meta from '../components/meta.svelte';
	import JSConfetti from 'js-confetti'
	if(typeof document != "undefined") {
		document.confetti = new JSConfetti()
	}
</script>

<Meta />

<section style="margin-top: 72px;">
	<div class="photo-and-name">
		<img src="/favicon.png" alt="Me (Sam Poder)" />
		<div>
			<h1>Sam Poder</h1>
		</div>
	</div>
	<p>
		<a href="https://github.com/sampoder" target="_blank">GitHub</a> ~
		<a href="https://twitter.com/sam_poder" target="_blank">Twitter</a> ~
		<a href="https://instagram.com/sam_poder/" target="_blank">Instagram</a>
	</p>
	<p>
		👋 G'day! My name is Sam. I'm an Australian who grew up in Singapore; nowadays, I live in California. 
		I'm learning all about computers and languages at Berkeley. 
		<i on:click={() => document.confetti.addConfetti({emojis: ['🧸', '🐻']})} class="pointer">
			{["Go bears!", "Roll on you bears!", "Hack yeah!"][Math.floor(Math.random() * 3)]}
		</i>
	</p>
	<p>
		I enjoy making things (mostly involving code), playing soccer, running 
		<a href="https://www.youtube.com/watch?v=PnK4gzO6S3Q" target="_blank">ha</a><a href="https://lioncityhacks.com/" target="_blank">ck</a><a href="https://photos.app.goo.gl/pd5MprLVn7ZDixv17" target="_blank">at</a><a href="https://youtu.be/KLx4NZZPzMc" target="_blank">ho</a><a href="https://youtu.be/O1s5HqSqKi0" target="_blank">ns</a> 
		and learning about random pieces of trivia. 
	</p>
	<p>
		Here are a couple of projects I'm proud of:
	</p>
</section>
<div class="grid-2">
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/CBxilReUkJ0?si=GgcQ9GDoqSl1avoK;start=3005" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>

	<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DBxONcPS8uf/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:8px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; max-height: 300px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/p/DBxONcPS8uf/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">View this post on Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/p/DBxONcPS8uf/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">A post shared by Cal Hacks (@calhacks)</a></p></div></blockquote>
	<script async src="//www.instagram.com/embed.js"></script>

	<iframe 
		height="300"
		src="https://www.youtube.com/embed/O1s5HqSqKi0" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/KLx4NZZPzMc" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/PnK4gzO6S3Q" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/afwQkr5UHpE" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/61iu_7Zdmus" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
	<iframe 
		height="300"
		src="https://www.youtube.com/embed/rKdtwhdaGHI" 
		title="YouTube video player" 
		frameborder="0" 
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
		allowfullscreen
		style="border-radius: 8px; width: 100%;"
	></iframe>
</div>
<div class="grid-3">
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/hackclub/hackclub" class="repo-name">hackclub<b>/hackclub</b></a>
	  </div>
	  <p class="repo-description">
	  	🌎 Hack Club is a worldwide community of high school hackers.
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color javascript"></span>
		  <span class="language-name">JavaScript</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/sampoder/berowra" class="repo-name"><b>berowra</b></a>
	  </div>
	  <p class="repo-description">
		  🔵 An open source CMS built for hackers and hobbyists.
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color python"></span>
		  <span class="language-name">Python</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/hackclub/scrapbook" class="repo-name">hackclub<b>/scrapbook</b></a>
	  </div>
	  <p class="repo-description">
		  🔥 A daily streak system & portfolio for your projects.
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color javascript"></span>
		  <span class="language-name">JavaScript</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/sampoder/climatator" class="repo-name"><b>climatator</b></a>
	  </div>
	  <p class="repo-description">
		  🌏 A 4D multimedia experience showcasing the upcoming challenges caused by global warming.
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color python"></span>
		  <span class="language-name">Python</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/sampoder/sound-festival" class="repo-name"><b>sound-festival</b></a>
	  </div>
	  <p class="repo-description">
		  🎶 An interactive sound festival built for Innovation Week 2021 (built using Sonic Pi).
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color ruby"></span>
		  <span class="language-name">Ruby</span>
		</div>
	  </div>
	</div>
	<div class="repo-container">
	  <div class="repo-header">
		<a href="https://github.com/hackclub/assemble" class="repo-name">hackclub<b>/assemble</b></a>
	  </div>
	  <p class="repo-description">
		  🌁 The behind-the-scenes of the first high school hackathon since the pandemic!
	  </p>
	  <div class="repo-stats">
		<div class="repo-language">
		  <span class="language-color assembly"></span>
		  <span class="language-name">Assembly</span>
		</div>
	  </div>
	</div>
</div>
<section style="margin-top: 48px;">
        <p>
		At school, I'm a TA for <a href="https://eecs70.org">CS70</a> (Berkeley's discrete mathematics and probability theory class). I also help organise <a href="https://calhacks.io">Cal Hacks</a> and co-teach the <a href="https://cubstart.com">Cubstart</a> DeCal on web development.
	</p>
	<p>
		Away from school I spend my time working with friends on 🏦&nbsp;HCB — a fiscal sponsorship platform built using Ruby on Rails. We give people the tools they need do incredible things in the real world: <a href="https://hackclub.com/fiscal-sponsorship/">hackclub.com/fiscal-sponsorship</a>.
	</p>
	<img src="https://cloud-fsxnl7984-hack-club-bot.vercel.app/0screenshot_2024-04-02_at_3.43.40___pm.png" width="100%" />
	<p style="text-align: center">
		<a href="https://changelog.hcb.hackclub.com/reimbursements-289630" target="_blank">
			<i>We recently shipped our own version of Expensify!</i>
		</a>
	</p>
	<p style="margin-top: 48px;">
		I also enjoy exploring the Bay Area & California, here are some recent pictures of mine:
	</p>
</section>
<div class="grid-3">
	<img src="https://cloud-jj0e6qaid-hack-club-bot.vercel.app/5img_5486__2_.jpg" height="200px" width="100%" style="object-fit: cover;" />
	<img src="https://cloud-jj0e6qaid-hack-club-bot.vercel.app/4img_5845.jpg" height="200px" width="100%" style="object-fit: cover;" />
	<img src="https://cloud-jj0e6qaid-hack-club-bot.vercel.app/0img_4406.jpg" height="200px" width="100%" style="object-fit: cover;" />
	<img src="https://cloud-jj0e6qaid-hack-club-bot.vercel.app/3img_5599.jpg" height="200px" width="100%" style="object-fit: cover;" />
	<img src="https://cloud-jj0e6qaid-hack-club-bot.vercel.app/1img_4705.jpg" height="200px" width="100%" style="object-fit: cover;" />
	<img src="https://cloud-gg3ftb4jw-hack-club-bot.vercel.app/0img_5368__1_.jpg" height="200px" width="100%" style="object-fit: cover;" />
</div>
<section>
	<p style="margin-top: 48px;">
		If you're ever in the area (say hi!), I'd recommend checking out Grotto Rock Park, Albany Bulb, Twin Peaks, the Clark Kerr Fire Trails, and Dolores Park.
	</p>
</section>
<section>
	<p style="margin-top: 24px;">
		More things of mine are on my GitHub, <a href="https://github.com/sampoder">@sampoder</a>. Feel free to email me about anything at sampoder [at] berkeley.edu.
	</p>
</section>

<style>
	section {
		width: 100%;
		max-width: 600px;
		margin: auto;
	}
	
	.grid-2 {
	  display: grid;
	  grid-template-columns: 1fr 1fr;
	  gap: 16px;
	  margin-bottom: 16px;
	}
	
	.grid-3 {
	  display: grid;
	  grid-template-columns: 1fr 1fr 1fr;
	  gap: 8px;
	  margin-top: 8px;
	}
	
	@media screen and (max-width: 768px) {
	  .grid-2, .grid-3 {
		grid-template-columns: 1fr;
	  }
	}

	.photo-and-name {
		align-items: center;
		margin-bottom: 16px;
	}

	h1 {
		margin-block-start: 0em;
		margin-block-end: 0em;
	}

	p {
		margin-block-start: 0em;
		margin-block-end: 0em;
		margin-bottom: 16px;
	}

	.photo-and-name > img {
		height: 80px;
		width: 80px;
		object-fit: cover;
		margin-bottom: 16px;
		border-radius: 8px;
	}

	h1 {
		font-size: 36px;
	}

	.post-image {
		max-width: 100%;
		max-height: 300px;
		background: #eeeeee;
		border-radius: 4px;
		object-fit: cover;
	}

	.attachments {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	hr {
		border-color: lightgrey;
		border-style: solid;
		border-width: 0.1px;
	}

	.load-more {
		text-decoration: underline;
		cursor: pointer;
	}

	a {
		color: black !important;
	}
	
	.repo-container {
	  border: 1px solid #e1e4e8;
	  border-radius: 8px;
	  margin-bottom: 0px;
	  padding: 16px;
	}
	
	.repo-header {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  margin-bottom: 8px;
	}
	
	.repo-name {
	  font-size: 16px;
	  color: #2f81f7!important;
	  text-decoration: none;
	}
	
	b {
		font-weight: 600;
	}
	
	.repo-description {
	  color: #586069;
	  font-size: 14px;
	  margin-bottom: 8px;
	}
	
	.repo-stats {
	  display: flex;
	  justify-content: space-between;
	  align-items: center;
	  font-size: 12px;
	  color: #586069;
	}
	
	.repo-stats span {
	  margin-right: 8px;
	}
	
	.repo-language {
	  display: flex;
	  align-items: center;
	}
	
	.language-color {
	  display: inline-block;
	  width: 12px;
	  height: 12px;
	  border-radius: 50%;
	  margin-right: 8px;
	}
	
	.language-name {
	  color: #586069;
	}
	
	.repo-forks {
	  color: #586069;
	}
	
	.repo-stars {
	  color: #586069;
	}
	
	.repo-updated {
	  color: #586069;
	}
	
	.language-color.html {
	  background-color: #e34c26;
	}
	
	.language-color.css {
	  background-color: #563d7c;
	}
	
	.language-color.javascript {
	  background-color: #f1e05a;
	}
	
	.language-color.python {
	  background-color: #3572a5;
	}
	
	.language-color.java {
	  background-color: #b07219;
	}
	
	.language-color.ruby {
	  background-color: #701516;
	}
	
	.language-color.php {
	  background-color: #4f5d95;
	}
	
	.language-color.c {
	  background-color: #555555;
	}
	
	.language-color.csharp {
	  background-color: #178600;
	}
	
	.language-color.cplusplus {
	  background-color: #f34b7d;
	}
	
	.language-color.assembly {
	  background-color: #6E4C13;
	}

	
</style>
