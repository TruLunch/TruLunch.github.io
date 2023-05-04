var data = [{
	start: numberToDate(getDayInWeek('Sunday', today() + 7)).split(',')[0],
	end: numberToDate(getDayInWeek('Saturday', today() + 7)).split(',')[0],
	id: 1,
	items: [0, 2, 4],
	order: {
		0: 0,
		2: 0,
		4: 0
	}
},{
	start: numberToDate(getDayInWeek('Sunday', today() + 14)).split(',')[0],
	end: numberToDate(getDayInWeek('Saturday', today() + 14)).split(',')[0],
	id: 2,
	items: [1, 3, 2],
	order: {
		1: 0,
		2: 0,
		3: 0
	}
},{
	start: numberToDate(getDayInWeek('Sunday', today() + 21)).split(',')[0],
	end: numberToDate(getDayInWeek('Saturday', today() + 21)).split(',')[0],
	id: 3,
	items: [4, 0, 3],
	order: {
		0: 0,
		3: 0,
		4: 0
	}
},{
	start: numberToDate(getDayInWeek('Sunday', today() + 28)).split(',')[0],
	end: numberToDate(getDayInWeek('Saturday', today() + 28)).split(',')[0],
	id: 0,
	items: [0, 2, 3, 1, 4],
	order: {
			0: 0,
			1: 0,
			2: 0,
			3: 0,
			4: 0
		}
}];

var menu = [
	{
		name: "Buffalo Chicken Wrap",
		id: 0,
		price: 8.48,
		calories: 438,
		fat: 15,
		"saturated fat": 6.5,
		carbohydrates: 39,
		fiber: 3,
		sugar: 5,
		protein: 29,
		tags: ['gluten', 'celery', 'spicy'],
		image: 'buffalo-chicken-wrap.png',
		ingredients: ['vegetable oil', 'butter', 'chicken', 'flour tortilla', 'iceberg lettuce', 'celery', 'hot pepper sauce', 'white vinegar', 'worcestershire sauce', 'cayenne pepper', 'garlic powder', 'salt']
	},{
		name: "Turkey Pesto Sandwich",
		id: 1,
		price: 8.48,
		calories: 743,
		fat: 30.9,
		"saturated fat": 14.7,
		carbohydrates: 39.9,
		fiber: 2.4,
		sugar: 4.7,
		protein: 73.2,
		tags: ['gluten', 'dairy'],
		image: 'turkey-pesto.png',
		ingredients: ['Sourdough', 'Provolone cheese', 'Turkey', 'Tomatoes', 'Olive oil', 'Garlic', 'Salt', 'Basil leaves', 'Parmesan cheese']
	},{
		name: "Mac n' Cheese",
		id: 2,
		price: 7.98,
		calories: 605,
		fat: 24,
		"saturated fat": 10,
		carbohydrates: 67,
		fiber: 16,
		sugar: 11,
		protein: 44,
		tags: ['gluten', 'dairy', 'eggs', 'vegetarian'],
		image: 'mac-and-cheese.png',
		ingredients: ['Barilla protein+ Pasta', 'Cheddar cheese', 'Mozzarella cheese', 'Greek yogurt', 'Paprika', 'Garlic powder', 'Salt', 'ground pepper', 'Water']
	},{
		name: "Chicken Burrito Bowl",
		id: 3,
		price: 8.48,
		calories: 725,
		fat: 43,
		"saturated fat": 15,
		carbohydrates: 41,
		fiber: 8,
		sugar: 4,
		protein: 47,
		tags: ['dairy'],
		image: 'chicken-rice-bowl.png',
		ingredients: ['yellow onion', 'pepper', 'adobo sauce', 'garlic', 'chicken broth', 'chili powder', 'salt', 'cumin', 'oregano', 'ground pepper', 'chicken', 'white rice', 'iceberg lettuce', 'black beans', 'monterey jack', 'salsa']
	},{
		name: "Caesar Salad",
		id: 4,
		price: 7.48,
		calories: 417,
		fat: 28,
		"saturated fat": 6,
		carbohydrates: 30,
		fiber: 2,
		sugar: 4,
		protein: 10,
		tags: ['dairy', 'eggs', 'vegetarian'],
		image: 'caesar-salad.png',
		ingredients: ['mayonnaise', 'garlic', 'anchovy paste', 'worcestershire sauce', 'dijon mustard', 'salt', 'ground pepper', 'croutons', 'iceberg lettuce', 'parmesan cheese']
	}
]

function tagToIcon(tag) {
	switch (tag) {
		case 'gluten':
			return 'fa-wheat-awn';
			break;
		case 'dairy':
			return 'fa-cow';
			break;
		case 'eggs':
			return 'fa-egg';
			break;
		case 'nuts':
			return 'fa-tablets';
			break;
		case 'sesame':
			return 'fa-blackberry';
			break;
		case 'soy':
			return 'fa-spa';
			break;
		case 'fish':
			return 'fa-fish-fins';
			break;
		case 'vegetarian':
			return 'fa-seedling';
			break;
		case 'spicy':
			return 'fa-pepper-hot';
			break;
		case 'celery':
			return 'fa-wind';
			break;
		default:
			return 'fa-question';
	}
}

function tagToText(tag) {
	switch (tag) {
		case 'gluten':
			return 'Contains Gluten';
			break;
		case 'dairy':
			return 'Contains Dairy';
			break;
		case 'eggs':
			return 'Contains Eggs';
			break;
		case 'nuts':
			return 'Contains Nuts';
			break;
		case 'sesame':
			return 'Contains Sesame';
			break;
		case 'soy':
			return 'Contains Soy';
			break;
		case 'fish':
			return 'Contains Fish';
			break;
		case 'vegetarian':
			return 'Vegetarian';
			break;
		case 'spicy':
			return 'Spicy';
			break;
		case 'celery':
			return 'Contains Celery';
			break;
		default:
			return 'Rendering Error';
	}
}
