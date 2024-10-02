var url = atob('aHR0cHM6Ly9hcGkuc3RhdGljZm9ybXMueHl6')
var form = document.querySelector('form');
var query = form.getAttribute('action');
form.addEventListener('submit', function (event) {
    event.preventDefault();
    fetch(`${url}/${query}`, {
        method: 'POST',
        body: new URLSearchParams(new FormData(event.target))
    }).then(
		{
			this.reset.bind(this);
			form.reset();
		}
	);
});