console.log('hello world');
$(() => {

$('#info').on('click',  () => {
  event.preventDefault()
let nameInput = $('input[type="text"]').val()

$.ajax({
  url:`https://cors-anywhere.herokuapp.com/superheroapi.com/api/10215488179708651/search/${nameInput}`,

})
.then(
  (info) => {
    console.log(info[0]);
const $stats = $('.info')
const $statDiv = $('<div>').appendTo($stats)
const $appear = $('<p>').text(info[0]).appendTo($statDiv)
  }
)
.catch(err=> {
  console.log(err);
})

})


})
