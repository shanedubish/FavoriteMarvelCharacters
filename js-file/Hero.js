console.log('hello world');
$(() => {
$.ajax({
  url:`https://cors-anywhere.herokuapp.com/superheroapi.com/api/10215488179708651/search/batman`,

})
.then(
  (data) => {
    console.log(data);
  }
)
.catch(err=> {
  console.log(err);
})




})
