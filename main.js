var itemcontainer = document.querySelector('#itemcontainer')

var htmlstr = items.map(item => {
  var title;
if (item.title.length > 20) {
    title = item.title.substring(0, 20) + '...'
} else {
    title = item.title
}
var description;
if (item.description.length > 20) {
    description = item.description.substring(0, 20) + '...'
} else {
    description = item.description
}

var currency_symbol = '$'
if (item.currency_code === 'GBP') {
    currency_symbol = '&pound;'
}

return `<div class = "item">
  <img src="http://placehold.it/200/200"></img>
  <p class="name"><abbr title="${item.title}">${title}</abbr></p>
  <p class="price">${currency_symbol}${item.price.toFixed(2)}</p>
  <p class="desc">${description}</p>
</div>`


}).join('')

itemcontainer.innerHTML = htmlstr