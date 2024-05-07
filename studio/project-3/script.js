// var fadeText = document.getElementById('fadeText');

// window.addEventListener('wheel', function(event) {
//   var position = fadeText.getBoundingClientRect().top;
//   const deltaY = event.deltaY;
//   if (deltaY > 0) {
//     // Scrolling down
//     fadeText.classList.add('hidden'); 
//     setTimeout(function() {
//       window.location.href = 'recipt.html'; 
//     }, 500); 
//   }
// });

let JSONdata = [
  {
    "brunch_spots": "Breakfast by Salt's Cure",
    "location": "27 1/2 Morton St",
    "area": "West Village",
    "timings": "8 AM - 3 PM",
    "favitems": "Oatmeal Griddle Cakes",
    "price_range": "$20–30",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Breakfast by Salt's Cure",
    "location": "368 Court Street",
    "area": "Carroll Gardens",
    "timings": "8 AM - 3 PM",
    "favitems": "Oatmeal Griddle Cakes",
    "price_range": "$20–30",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Flipper's",
    "location": "337 W Broadway Unit A",
    "area": "Soho",
    "timings": "9 AM - 6 PM",
    "favitems": "Souffle Pancakes",
    "price_range": "$20–30",
    "reservation_style": "Waitlist ",
    "links": "https://www.yelp.com/waitlist/flipper-s-new-york?party_size=2&utm_medium=waitlist_widget&utm_source=biz_details"
  },
  {
    "brunch_spots": "Sonnyboy",
    "location": "65 Rivington St",
    "area": "LES",
    "timings": "9 AM - 10 PM",
    "favitems": "Burrata + Fig Toast",
    "price_range": "$20–30",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.sonnyboynyc.com/reservations/"
  },
  {
    "brunch_spots": "Sunday In Brooklyn",
    "location": "348 Wythe Ave",
    "area": "Williamsburg",
    "timings": "9:30 AM - 10 PM",
    "favitems": "Sunday Pancakes",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://www.sundayinbrooklyn.com/menus/#brunch"
  },
  {
    "brunch_spots": "Jack's Wife Freda",
    "location": "226 Lafayette St",
    "area": "Soho",
    "timings": "8:30 AM - 9 PM ",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/jacks-wife-freda-soho?date=2024-04-22&seats=2"
  },
  {
    "brunch_spots": "Jack's Wife Freda",
    "location": "50 Carmine Street",
    "area": "West Village",
    "timings": "8:30 AM - 9 PM ",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/jacks-wife-freda-west-village?date=2024-04-22&seats=2"
  },
  {
    "brunch_spots": "Jack's Wife Freda",
    "location": "116 8th Avenue",
    "area": "Chelsea",
    "timings": "8:30 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/jacks-wife-freda-chelsea?date=2024-04-22&seats=2"
  },
  {
    "brunch_spots": "Jack's Wife Freda",
    "location": "72 University Pl",
    "area": "Union Square",
    "timings": "8:30 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/jacks-wife-freda-union-square?date=2024-04-22&seats=2"
  },
  {
    "brunch_spots": "Jack's Wife Freda",
    "location": "258 Wythe Ave",
    "area": "Willamsburg",
    "timings": "8:30 AM - 9 PM ",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/jacks-wife-freda-williamsburg?date=2024-04-22&seats=2"
  },
  {
    "brunch_spots": "La Grande Boucherie",
    "location": "145 West 53rd Street",
    "area": "Midtown",
    "timings": "9 AM - 12 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://www.opentable.com/r/la-grande-boucherie-new-york?ref=1068"
  },
  {
    "brunch_spots": "JoJo",
    "location": "160 East 64th Street",
    "area": "Upper East Side",
    "timings": "12 PM - 3 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/jojo?date=2024-04-23&seats=2"
  },
  {
    "brunch_spots": "Clinton St. Baking Co. & Restaurant",
    "location": "4 Clinton Street",
    "area": "LES",
    "timings": "9 AM - 4 PM",
    "price_range": "$20–30",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/clinton-st-baking-co?date=2024-04-23&seats=2"
  },
  {
    "brunch_spots": "Cecconi's Dumbo",
    "location": "55 Water Street",
    "area": "Dumbo",
    "timings": "11:30 AM - 10 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://www.opentable.com/r/cecconis-dumbo-brooklyn?ref=1068"
  },
  {
    "brunch_spots": "Dante ",
    "location": "551 Hudson Street",
    "area": "West Village",
    "timings": "11 AM - 10 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservations & Walk-ins",
    "links": "https://resy.com/cities/new-york-ny/venues/dante-west-village?seats=2&date=2024-04-23"
  },
  {
    "brunch_spots": "Pastis",
    "location": "52 Gansevoort Street",
    "area": "West Village",
    "timings": "11 AM - 10 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/pastis?date=2024-04-23&seats=2"
  },
  {
    "brunch_spots": "Twenty Three Grand",
    "location": "23 Grand Street",
    "area": "Soho",
    "timings": "10 AM -  4 PM ",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/twentythreegrand?date=2024-04-23&seats=2"
  },
  {
    "brunch_spots": "Bar Primi",
    "location": "325 Bowery",
    "area": "East Village",
    "timings": "11 AM - 3 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://www.sevenrooms.com/reservations/barprimi/gmb"
  },
  {
    "brunch_spots": "La Mercerie",
    "location": "53 Howard Street",
    "area": "Soho",
    "timings": "10 AM - 3 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/la-mercerie-at-the-guild?date=2024-04-23&seats=2"
  },
  {
    "brunch_spots": "The Dutch",
    "location": "131 Sullivan Street",
    "area": "Soho",
    "timings": "10 AM - 3 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://www.sevenrooms.com/reservations/thedutchnyc/gmb"
  },
  {
    "brunch_spots": "Dudley's",
    "location": "85 Orchard Street",
    "area": "LES",
    "timings": "9 AM - 12 PM",
    "price_range": "$20–30",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.opentable.com/r/dudleys-new-york?ref=1068"
  },
  {
    "brunch_spots": "The Butcher's Daughter",
    "location": "581 Hudson St",
    "area": "West Village",
    "timings": "8 AM - 9 PM",
    "price_range": "$20–30",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/the-butchers-daughter-west-village?seats=2&date=2024-04-23 "
  },
  {
    "brunch_spots": "The Butcher's Daughter",
    "location": "19 Kenmare St ",
    "area": "Nolita",
    "timings": "8 AM - 9 PM",
    "price_range": "$20–30",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.thebutchersdaughter.com/reservations/nolita "
  },
  {
    "brunch_spots": "The Butcher's Daughter",
    "location": "271 Metropolitan Ave",
    "area": "Williamsburg",
    "timings": "9 AM - 9 PM",
    "price_range": "$20–30",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.opentable.com/restref/client/?restref=1317235&lang=en-US&ot_source=Restaurant%20website&corrid=93f407dd-1858-46a6-8e0e-18a360691c13"
  },
  {
    "brunch_spots": "Friend of a Farmer",
    "location": "77 Irving Place",
    "area": "Gramercy Park",
    "timings": "9 AM - 4 PM",
    "price_range": "$20–30",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Friend of a Farmer",
    "location": "68 West 71st Street",
    "area": "Upper West Side",
    "timings": "9 AM - 4 PM",
    "price_range": "$20–30",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Bubby's",
    "location": "120 Hudson Street",
    "area": "Tribeca",
    "timings": "8 AM - 10 PM",
    "price_range": "$20–30",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Sarabeth's",
    "location": "40 Central Park South 56th street",
    "area": "Central Park",
    "timings": "8 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.sevenrooms.com/reservations/sarabethscps/ig?venues=sarabethsupperwestside%2Csarabethstribeca%2Csarabethscps%2Csarabethsparkavenuesouth "
  },
  {
    "brunch_spots": "Sarabeth's",
    "location": "423 Amsterdam Avenue",
    "area": "Upper West Side",
    "timings": "8 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.sevenrooms.com/reservations/sarabethscps/ig?venues=sarabethsupperwestside%2Csarabethstribeca%2Csarabethscps%2Csarabethsparkavenuesouth "
  },
  {
    "brunch_spots": "Sarabeth's",
    "location": "381 Park Avenue south 27th street",
    "area": "Park Avenue",
    "timings": "8 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.sevenrooms.com/reservations/sarabethscps/ig?venues=sarabethsupperwestside%2Csarabethstribeca%2Csarabethscps%2Csarabethsparkavenuesouth "
  },
  {
    "brunch_spots": "Sarabeth's",
    "location": "339 Greenwhich street",
    "area": "Tribeca",
    "timings": "8 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.sevenrooms.com/reservations/sarabethscps/ig?venues=sarabethsupperwestside%2Csarabethstribeca%2Csarabethscps%2Csarabethsparkavenuesouth "
  },
  {
    "brunch_spots": "Lafayette Grand Café & Bakery",
    "location": "380 Lafayette Street",
    "area": "Noho",
    "timings": "10 AM - 3:30 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.lafayetteny.com/reservations/"
  },
  {
    "brunch_spots": "Locanda Verde",
    "location": "377 Greenwich Street",
    "area": "Tribeca",
    "timings": "10 AM - 3 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://locandaverdenyc.com/reservations/"
  },
  {
    "brunch_spots": "Maman",
    "location": "239 Centre Street",
    "area": "Soho",
    "timings": "8 AM - 6 PM",
    "price_range": "$10–20",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Maman",
    "location": "155 east 44th street",
    "area": "Midtown",
    "timings": "8 AM - 6 PM",
    "price_range": "$10–20",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Maman",
    "location": "1424 3rd avenue",
    "area": "Upper East Side",
    "timings": "8 AM - 6 PM",
    "price_range": "$10–20",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Maman",
    "location": "429 Amsterdam avenue",
    "area": "Upper West Side",
    "timings": "8 AM - 6 PM",
    "price_range": "$10–20",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Rosemary's",
    "location": "18 Greenwich Avenue",
    "area": "West Village",
    "timings": "10 AM - 3:30 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/rosemarys?seats=2&date=2024-04-23 "
  },
  {
    "brunch_spots": "Rosemary's",
    "location": "350 1st Avenue",
    "area": "Gramercy Park",
    "timings": "10 AM - 3:30 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/rosemarys-east?seats=2&date=2024-04-23 \n"
  },
  {
    "brunch_spots": "Rosemary's",
    "location": "825 Third Ave",
    "area": "Midtown",
    "timings": "10 AM - 3:30 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation and Walk Ins",
    "links": " https://resy.com/cities/new-york-ny/venues/rosemarys-midtown?seats=2&date=2024-04-23 "
  },
  {
    "brunch_spots": "Upland",
    "location": "345 Park Avenue South",
    "area": "Kips Bay",
    "timings": "10 AM - 3 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/upland?seats=2&date=2024-04-23"
  },
  {
    "brunch_spots": "Tartine",
    "location": "253 West 11th Street",
    "area": "West Village",
    "timings": "10 AM - 4 PM",
    "price_range": "$20–30",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Bobo",
    "location": "181 West 10th Street",
    "area": "West Village",
    "timings": "11 AM - 3:30 PM",
    "price_range": "$50-100",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/bobo-nyc?seats=2&date=2024-04-23"
  },
  {
    "brunch_spots": "Jacob's Pickles",
    "location": "509 Amsterdam Avenue",
    "area": "Upper West Side ",
    "timings": "9 AM - 12 PM",
    "price_range": "$20–30",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/jacobs-pickles?date=2024-04-23&seats=2"
  },
  {
    "brunch_spots": "Malibu Farm",
    "location": "89 South Street",
    "area": "Financial District ",
    "timings": "10:30 AM - 3 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/malibu-farm?date=2024-04-23&seats=2"
  },
  {
    "brunch_spots": "The Little Owl",
    "location": "90 Bedford Street",
    "area": "West Village ",
    "timings": "9 AM - 3 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://www.opentable.com/r/little-owl-west-village?ref=1068"
  },
  {
    "brunch_spots": "Little Ruby's Cafe",
    "location": "225 West 4th Street",
    "area": "West Village",
    "timings": "9 AM - 12 PM",
    "price_range": "$20–30",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.opentable.com/restref/client/?restref=1311439&lang=en-US&ot_source=Restaurant%20website&corrid=7ff19c95-917d-4904-9e10-b8d6c59480e3 "
  },
  {
    "brunch_spots": "Little Ruby's Cafe",
    "location": "198 E 11th St",
    "area": "East Village",
    "timings": "9 AM - 12 PM",
    "favitems": "Ricotta Hotcakes, Hot Chocolate,Vodka Sause Pasta",
    "price_range": "$20–30",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://www.opentable.com/restref/client/?restref=1311601&lang=en-US&ot_source=Restaurant%20website&corrid=e95dae7f-3b59-46d0-9e04-a76ec3bb8201 "
  },
  {
    "brunch_spots": "The Smith",
    "location": "956 2nd Avenue 51st Street",
    "area": "Midtown",
    "timings": "9 AM - 11 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://www.opentable.com/the-smith-midtown?ref=1068"
  },
  {
    "brunch_spots": "The Smith",
    "location": "1900 Broadway 63rd Street",
    "area": "Upper West Side",
    "timings": "9 AM - 11 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://www.opentable.com/the-smith-midtown?ref=1068"
  },
  {
    "brunch_spots": "The Smith",
    "location": "55 3rd Avenue",
    "area": "East Village",
    "timings": "9 AM - 11 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://www.opentable.com/the-smith-midtown?ref=1068"
  },
  {
    "brunch_spots": "The Smith",
    "location": "1150 Broadway 27th Street",
    "area": "NoMad",
    "timings": "9 AM - 11 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://www.opentable.com/the-smith-midtown?ref=1068"
  },
  {
    "brunch_spots": "Hudson Clearwater",
    "location": "127 Orchard Street",
    "area": "West Village",
    "timings": "8 AM - 4 :30 PM",
    "price_range": "$30 - $60",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/hudson-clearwater?date=2024-04-23&seats=2"
  },
  {
    "brunch_spots": "Sadelle's",
    "location": "463 West Broadway",
    "area": "Soho",
    "timings": "8 AM - 5 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/sadelles?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "Vinegar Hill House",
    "location": "72 Hudson Avenue",
    "area": "Downtown Brooklyn",
    "timings": "10 AM - 3 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/vinegar-hill-house?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "La Pecora Bianca",
    "location": "20 West 40th",
    "area": "Bryant Park",
    "timings": "10 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/la-pecora-bianca-soho?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "La Pecora Bianca",
    "location": "1562 2nd Ave",
    "area": "Upper East Side",
    "timings": "10 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/la-pecora-bianca-soho?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "La Pecora Bianca",
    "location": "359 Columbus Avenue",
    "area": "Upper West Side",
    "timings": "10 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/la-pecora-bianca-soho?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "La Pecora Bianca",
    "location": "950 2nd Avenue",
    "area": "Midtown",
    "timings": "10 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/la-pecora-bianca-soho?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "La Pecora Bianca",
    "location": "1133 Broadway",
    "area": "NoMad",
    "timings": "10 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/la-pecora-bianca-soho?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "La Pecora Bianca",
    "location": "54 Prince Street",
    "area": "Soho",
    "timings": "10 AM - 9 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/la-pecora-bianca-soho?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "Maison Pickle",
    "location": "2315 Broadway",
    "area": "Upper West Side ",
    "timings": "9 AM - 10 PM",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/maison-pickle?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "Juliette",
    "location": "135 North 5th Street",
    "area": "Williamsburg",
    "timings": "10 AM - 4 PM ",
    "price_range": "$30–50",
    "reservation_style": "Reservation",
    "links": "https://www.opentable.com/r/juliette-brooklyn?ref=1068"
  },
  {
    "brunch_spots": "Allswell",
    "location": "124 Bedford Ave",
    "area": "Williamsburg",
    "timings": "11 AM - 4 PM",
    "price_range": "$20–30",
    "reservation_style": "Reservation",
    "links": "https://resy.com/cities/new-york-ny/venues/allswell?date=2024-04-26&seats=2"
  },
  {
    "brunch_spots": "The Golden Diner",
    "location": "123 Madison St",
    "area": "Two Bridges",
    "timings": "10 AM - 5 PM ",
    "price_range": "$20–30",
    "reservation_style": "Walk Ins Only."
  },
  {
    "brunch_spots": "Soho diner ",
    "location": "320 W Broadway",
    "area": "Soho",
    "timings": "7 AM - 4 PM",
    "price_range": "$20–30",
    "reservation_style": "Reservation and Walk Ins",
    "links": "https://resy.com/cities/new-york-ny/venues/soho-diner?date=2024-04-30&seats=2"
  }
]


let areaList = document.getElementById("area_list_text");
let areaListArray = [];

// Unique area arrays below:
let WestVillageArray = [];
let WilliamsburgArray = [];
let SohoArray = [];
let CarrollGardensArray = [];
let LESArray = [];
let ChelseaArray = [];
let UnionSquareArray = [];
let MidtownArray = [];
let UpperEastSideArray = [];
let DumboArray = [];
let EastVillageArray = [];
let NolitaArray = [];
let GramercyParkArray = [];
let TribecaArray = [];
let CentralParkArray = [];
let UpperWestSideArray = [];
let ParkAvenueArray = [];
let NohoArray = [];
let KipsBayArray = [];
let FinancialDistrictArray = [];
let NoMadArray = [];
let DowntownBrooklynArray = [];
let BryantParkArray = [];
let TwoBridgesArray = [];

//------------------------------------
let firstLocation;
let currentArea;

// x = y // sets a value
// x == y // evaluates a statement (return TRUE or FALSE)
// x === y // evaluates if x is EXACTLY equal to y (return TRUE or FALSE)

function populateSecondReceipt(secondReceiptLocation) {
  console.log(firstLocation.brunch_spots);
  let brunchSpot = document.getElementById("brunch_spot");
  let location = document.getElementById("location");
  let timings = document.getElementById("timings");
  let pricing = document.getElementById("price_range");
  let favitems = document.getElementById("favitems")
  let reservation = document.getElementById("reservation_style");
  let links = document.getElementById("links");

  brunchSpot.innerHTML = secondReceiptLocation.brunch_spots;
  location.innerHTML = secondReceiptLocation.location;
  timings.innerHTML = secondReceiptLocation.timings;
  pricing.innerHTML = secondReceiptLocation.price_range;

  if(!secondReceiptLocation.favitems) { // use the "not" operator to check for a value in firstLocation.favitems
    favitems.innerHTML = ""; 
  } else {
    favitems.innerHTML = secondReceiptLocation.favitems
  }

  if (secondReceiptLocation.reservation_style === "Walk Ins Only.") {
    reservation.innerHTML = "Walk Ins Only.";
  } else if (secondReceiptLocation.reservation_style === "Reservation and Walk Ins") {
    reservation.innerHTML = `Make a <a href="${secondReceiptLocation.links}" target="_blank">Reservation</a> or just Walk In`;
  } else {
    reservation.innerHTML = `<a href="${secondReceiptLocation.links}" target="_blank">Make A Reservation</a>`
  }
}

function updateArea(x) {
  currentArea = x.innerHTML
  if (currentArea === "West Village") { // if the the current item's area is equal to the string "West Village"
    firstLocation = WestVillageArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Williamsburg") {
    firstLocation = WilliamsburgArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Soho") {
    firstLocation = SohoArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Carroll Gardens") {
    firstLocation = CarrollGardensArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "LES") {
    firstLocation = LESArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Chelsea") {
    firstLocation = ChelseaArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Union Square") {
    firstLocation = UnionSquareArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Midtown") {
    firstLocation = MidtownArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Upper East Side") {
    firstLocation = UpperEastSideArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Dumbo") {
    firstLocation = DumboArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "East Village") {
    firstLocation = EastVillageArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Nolita") {
    firstLocation = NolitaArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Gramercy Park") {
    firstLocation = GramercyParkArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Tribeca") {
    firstLocation = TribecaArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Central Park") {
    firstLocation = CentralParkArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Upper West Side") {
    firstLocation = UpperWestSideArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Park Avenue") {
    firstLocation = ParkAvenueArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Noho") {
    firstLocation = NohoArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Kips Bay") {
    firstLocation = KipsBayArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Financial District") {
    firstLocation = FinancialDistrictArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "NoMad") {
    firstLocation = NoMadArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Downtown Brooklyn") {
    firstLocation = DowntownBrooklynArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Bryant Park") {
    firstLocation = BryantParkArray[0];
    populateSecondReceipt(firstLocation);
  } else if (currentArea === "Two Bridges") {
    firstLocation = TwoBridgesArray[0];
    populateSecondReceipt(firstLocation);
  }
}

for (let brunchSpot of JSONdata) { // for each item (AKA brunchSpot) of your data (AKA JSONdata), do the following
  if (brunchSpot.area === "West Village") { // if the the current item's area is equal to the string "West Village"
    WestVillageArray.push(brunchSpot); // add that item to the array called WestVillageArray
  } else if (brunchSpot.area === "Williamsburg") {
    WilliamsburgArray.push(brunchSpot);
  } else if (brunchSpot.area === "Soho") {
    SohoArray.push(brunchSpot);
  } else if (brunchSpot.area === "Carroll Gardens") {
    CarrollGardensArray.push(brunchSpot);
  } else if (brunchSpot.area === "LES") {
    LESArray.push(brunchSpot);
  } else if (brunchSpot.area === "Chelsea") {
    ChelseaArray.push(brunchSpot);
  } else if (brunchSpot.area === "Union Square") {
    UnionSquareArray.push(brunchSpot);
  } else if (brunchSpot.area === "Midtown") {
    MidtownArray.push(brunchSpot);
  } else if (brunchSpot.area === "Upper East Side") {
    UpperEastSideArray.push(brunchSpot);
  } else if (brunchSpot.area === "Dumbo") {
    DumboArray.push(brunchSpot);
  } else if (brunchSpot.area === "East Village") {
    EastVillageArray.push(brunchSpot);
  } else if (brunchSpot.area === "Nolita") {
    NolitaArray.push(brunchSpot);
  } else if (brunchSpot.area === "Gramercy Park") {
    GramercyParkArray.push(brunchSpot);
  } else if (brunchSpot.area === "Tribeca") {
    TribecaArray.push(brunchSpot);
  } else if (brunchSpot.area === "Central Park") {
    CentralParkArray.push(brunchSpot);
  } else if (brunchSpot.area === "Upper West Side") {
    UpperWestSideArray.push(brunchSpot);
  } else if (brunchSpot.area === "Park Avenue") {
    ParkAvenueArray.push(brunchSpot);
  } else if (brunchSpot.area === "Noho") {
    NohoArray.push(brunchSpot);
  } else if (brunchSpot.area === "Kips Bay") {
    KipsBayArray.push(brunchSpot);
  } else if (brunchSpot.area === "Financial District") {
    FinancialDistrictArray.push(brunchSpot);
  } else if (brunchSpot.area === "NoMad") {
    NoMadArray.push(brunchSpot);
  } else if (brunchSpot.area === "Downtown Brooklyn") {
    DowntownBrooklynArray.push(brunchSpot);
  } else if (brunchSpot.area === "Bryant Park") {
    BryantParkArray.push(brunchSpot);
  } else if (brunchSpot.area === "Two Bridges") {
    TwoBridgesArray.push(brunchSpot);
  }

  if (!areaListArray.includes(brunchSpot.area)) { // ! = NOT: if areaListArray DOES NOT include the current brunchSpot area, execute the following code
    areaList.innerHTML += `<p class="area_item" onclick="updateArea(this)">${brunchSpot.area}</p>`; //this is called a template literal
    areaListArray.push(brunchSpot.area);
  }
}

let areaCounter = 0;
function updateSecondReceipt(location) {
  if (currentArea === "West Village") { // if the the current item's area is equal to the string "West Village"
    populateSecondReceipt(WestVillageArray[areaCounter]);
  } else if (currentArea === "Williamsburg") {
   // UPDATE EACH OF THESE WITH populateSecondReceipt(___________Array[areaCounter]);
   populateSecondReceipt(WilliamsburgArray[areaCounter]);
  } else if (currentArea === "Soho") {
    populateSecondReceipt(SohoArray[areaCounter]);
  } else if (currentArea === "Carroll Gardens") {
    populateSecondReceipt(CarrollGardensArray[areaCounter]);
  } else if (currentArea === "LES") {
    populateSecondReceipt(LESArray[areaCounter]);
  } else if (currentArea === "Chelsea") {
    populateSecondReceipt(ChelseaArray[areaCounter]);
  } else if (currentArea === "Union Square") {
    populateSecondReceipt(UnionSquareArray[areaCounter]);
  } else if (currentArea === "Midtown") {
    populateSecondReceipt(MidtownArray[areaCounter]);
  } else if (currentArea === "Upper East Side") {
    populateSecondReceipt(UpperEastSideArray[areaCounter]);
  } else if (currentArea === "Dumbo") {
    populateSecondReceipt(DumboArray[areaCounter]);
  } else if (currentArea === "East Village") {
    populateSecondReceipt(EastVillageArray[areaCounter]);
  } else if (currentArea === "Nolita") {
    populateSecondReceipt(NolitaArray[areaCounter]);
  } else if (currentArea === "Gramercy Park") {
    populateSecondReceipt(GramercyParkArray[areaCounter]);
  } else if (currentArea === "Tribeca") {
    populateSecondReceipt(TribecaArray[areaCounter]);
  } else if (currentArea === "Central Park") {
    populateSecondReceipt(CentralParkArray[areaCounter]);
  } else if (currentArea === "Upper West Side") {
    populateSecondReceipt(UpperWestSideArray[areaCounter]);
  } else if (currentArea === "Park Avenue") {
    populateSecondReceipt(ParkAvenueArray[areaCounter]);
  } else if (currentArea === "Noho") {
    populateSecondReceipt(NohoArray[areaCounter]);
  } else if (currentArea === "Kips Bay") {
    populateSecondReceipt(KipsBayArray[areaCounter]);
  } else if (currentArea === "Financial District") {
    populateSecondReceipt(FinancialDistrictArray[areaCounter]);
  } else if (currentArea === "NoMad") {
    populateSecondReceipt(NoMadArray[areaCounter]);
  } else if (currentArea === "Downtown Brooklyn") {
    populateSecondReceipt(DowntownBrooklynArray[areaCounter]);
  } else if (currentArea === "Bryant Park") {
    populateSecondReceipt(BryantParkArray[areaCounter]);
  } else if (currentArea === "Two Bridges") {
    populateSecondReceipt(TwoBridgesArray[areaCounter]);
  } else {
    console.log("no match");
  }

  if(areaCounter < WestVillageArray.length - 1) {
    areaCounter++;
  } else {
    areaCounter = 0;
  }

}


// for the review button 
function submitReview() {
  const reviewText = document.getElementById('review-text').value;
  const reviewsList = document.querySelector('.reviews-list');

  // Create a new paragraph element to display the review
  const newReview = document.createElement('p');
  newReview.textContent = reviewText;

  // Append the new review to the reviews list
  reviewsList.appendChild(newReview);

  // Clear the textarea
  document.getElementById('review-text').value = '';
}


