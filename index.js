let elem = document.querySelector('#carrousel');
let testimonials = [
  {
    img: 'https://m.media-amazon.com/images/I/51Y6HpNRJJL._AC_UX450_UY450_SR450,450_.jpg',
    link: 'https://www.amazon.com/dp/B085M3S554/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B085M3S554&pd_rd_w=b3nLS&pf_rd_p=9fd3ea7c-b77c-42ac-b43b-c872d3f37c38&pd_rd_wg=pm8kV&pf_rd_r=2AQZRADKZZJ366TVGQNN&pd_rd_r=7292f7e4-72bd-48e3-a7c5-34b06f068b7a&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUUk0WEcxQUE1MzZEJmVuY3J5cHRlZElkPUEwNjU1MzIwR1k3NzE2S0VBODJYJmVuY3J5cHRlZEFkSWQ9QTA4NjkyNTA0SFVXUEJEM0pCRVMmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    star:'blabla',
    price: '12.99$'
  },
  {
    img: 'https://m.media-amazon.com/images/I/51Y6HpNRJJL._AC_UX450_UY450_SR450,450_.jpg',
    link: 'https://www.amazon.com/dp/B085M3S554/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B085M3S554&pd_rd_w=b3nLS&pf_rd_p=9fd3ea7c-b77c-42ac-b43b-c872d3f37c38&pd_rd_wg=pm8kV&pf_rd_r=2AQZRADKZZJ366TVGQNN&pd_rd_r=7292f7e4-72bd-48e3-a7c5-34b06f068b7a&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUUk0WEcxQUE1MzZEJmVuY3J5cHRlZElkPUEwNjU1MzIwR1k3NzE2S0VBODJYJmVuY3J5cHRlZEFkSWQ9QTA4NjkyNTA0SFVXUEJEM0pCRVMmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    star:'blabla',
    price: '12.99$'
  },
  {
    img: 'https://m.media-amazon.com/images/I/51Y6HpNRJJL._AC_UX450_UY450_SR450,450_.jpg',
    link: 'https://www.amazon.com/dp/B085M3S554/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B085M3S554&pd_rd_w=b3nLS&pf_rd_p=9fd3ea7c-b77c-42ac-b43b-c872d3f37c38&pd_rd_wg=pm8kV&pf_rd_r=2AQZRADKZZJ366TVGQNN&pd_rd_r=7292f7e4-72bd-48e3-a7c5-34b06f068b7a&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUUk0WEcxQUE1MzZEJmVuY3J5cHRlZElkPUEwNjU1MzIwR1k3NzE2S0VBODJYJmVuY3J5cHRlZEFkSWQ9QTA4NjkyNTA0SFVXUEJEM0pCRVMmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    star:'blabla',
    price: '12.99$'
  },
  {
    img: 'https://m.media-amazon.com/images/I/51Y6HpNRJJL._AC_UX450_UY450_SR450,450_.jpg',
    link: 'https://www.amazon.com/dp/B085M3S554/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B085M3S554&pd_rd_w=b3nLS&pf_rd_p=9fd3ea7c-b77c-42ac-b43b-c872d3f37c38&pd_rd_wg=pm8kV&pf_rd_r=2AQZRADKZZJ366TVGQNN&pd_rd_r=7292f7e4-72bd-48e3-a7c5-34b06f068b7a&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUUk0WEcxQUE1MzZEJmVuY3J5cHRlZElkPUEwNjU1MzIwR1k3NzE2S0VBODJYJmVuY3J5cHRlZEFkSWQ9QTA4NjkyNTA0SFVXUEJEM0pCRVMmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    star:'blabla',
    price: '12.99$'
  },
  {
    img: 'https://m.media-amazon.com/images/I/51Y6HpNRJJL._AC_UX450_UY450_SR450,450_.jpg',
    link: 'https://www.amazon.com/dp/B085M3S554/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B085M3S554&pd_rd_w=b3nLS&pf_rd_p=9fd3ea7c-b77c-42ac-b43b-c872d3f37c38&pd_rd_wg=pm8kV&pf_rd_r=2AQZRADKZZJ366TVGQNN&pd_rd_r=7292f7e4-72bd-48e3-a7c5-34b06f068b7a&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUUk0WEcxQUE1MzZEJmVuY3J5cHRlZElkPUEwNjU1MzIwR1k3NzE2S0VBODJYJmVuY3J5cHRlZEFkSWQ9QTA4NjkyNTA0SFVXUEJEM0pCRVMmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    star:'blabla',
    price: '12.99$'
  },
  {
    img: 'https://m.media-amazon.com/images/I/51Y6HpNRJJL._AC_UX450_UY450_SR450,450_.jpg',
    link: 'https://www.amazon.com/dp/B085M3S554/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B085M3S554&pd_rd_w=b3nLS&pf_rd_p=9fd3ea7c-b77c-42ac-b43b-c872d3f37c38&pd_rd_wg=pm8kV&pf_rd_r=2AQZRADKZZJ366TVGQNN&pd_rd_r=7292f7e4-72bd-48e3-a7c5-34b06f068b7a&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUUk0WEcxQUE1MzZEJmVuY3J5cHRlZElkPUEwNjU1MzIwR1k3NzE2S0VBODJYJmVuY3J5cHRlZEFkSWQ9QTA4NjkyNTA0SFVXUEJEM0pCRVMmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    star:'blabla',
    price: '12.99$'
  },
  {
    img: 'https://m.media-amazon.com/images/I/51Y6HpNRJJL._AC_UX450_UY450_SR450,450_.jpg',
    link: 'https://www.amazon.com/dp/B085M3S554/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B085M3S554&pd_rd_w=b3nLS&pf_rd_p=9fd3ea7c-b77c-42ac-b43b-c872d3f37c38&pd_rd_wg=pm8kV&pf_rd_r=2AQZRADKZZJ366TVGQNN&pd_rd_r=7292f7e4-72bd-48e3-a7c5-34b06f068b7a&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUUk0WEcxQUE1MzZEJmVuY3J5cHRlZElkPUEwNjU1MzIwR1k3NzE2S0VBODJYJmVuY3J5cHRlZEFkSWQ9QTA4NjkyNTA0SFVXUEJEM0pCRVMmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    star:'blabla',
    price: '12.99$'
  },
  {
    img: 'https://m.media-amazon.com/images/I/51Y6HpNRJJL._AC_UX450_UY450_SR450,450_.jpg',
    link: 'https://www.amazon.com/dp/B085M3S554/ref=sspa_dk_detail_0?psc=1&pd_rd_i=B085M3S554&pd_rd_w=b3nLS&pf_rd_p=9fd3ea7c-b77c-42ac-b43b-c872d3f37c38&pd_rd_wg=pm8kV&pf_rd_r=2AQZRADKZZJ366TVGQNN&pd_rd_r=7292f7e4-72bd-48e3-a7c5-34b06f068b7a&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUEyUUk0WEcxQUE1MzZEJmVuY3J5cHRlZElkPUEwNjU1MzIwR1k3NzE2S0VBODJYJmVuY3J5cHRlZEFkSWQ9QTA4NjkyNTA0SFVXUEJEM0pCRVMmd2lkZ2V0TmFtZT1zcF9kZXRhaWwmYWN0aW9uPWNsaWNrUmVkaXJlY3QmZG9Ob3RMb2dDbGljaz10cnVl',
    star:'blabla',
    price: '12.99$'
  },
 
]

let cards = '';

testimonials.forEach(el => {
  let template = `
    <div class="card-prod card-prod img">
    <img src=${el.img}>
  `
  
  cards += template;
});

elem.insertAdjacentHTML('befoeend', cards);

// ARROWS

var right = document.getElementById('carrousel-right');

var left = document.getElementById('carrousel-left')

right.addEventListener('click', function(){
  elem.scrollLeft += 800
})

left.addEventListener('click', function(){
  elem.scrollLeft -= 800
})