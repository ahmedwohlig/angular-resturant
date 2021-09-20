fetch("https://random-recipes.p.rapidapi.com/ai-quotes/1", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "random-recipes.p.rapidapi.com",
		"x-rapidapi-key": "505761f37fmsh42d69b7ec9f5095p13171cjsnd2198230aaf0"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});