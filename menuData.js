var data = [{
	start: numberToDate(getDayInWeek('Sunday', today() + 7)).split(',')[0],
	end: numberToDate(getDayInWeek('Saturday', today() + 7)).split(',')[0],
	id: 1,
	items: [0, 1, 2],
	order: {
		0: 0,
		1: 0,
		2: 0
	}
},{
	start: numberToDate(getDayInWeek('Sunday', today() + 14)).split(',')[0],
	end: numberToDate(getDayInWeek('Saturday', today() + 14)).split(',')[0],
	id: 2,
	items: [0, 1, 2],
	order: {
		0: 0,
		1: 0,
		2: 0
	}
},{
	start: numberToDate(getDayInWeek('Sunday', today() + 21)).split(',')[0],
	end: numberToDate(getDayInWeek('Saturday', today() + 21)).split(',')[0],
	id: 3,
	items: [0, 1, 2],
	order: {
		0: 0,
		1: 0,
		2: 0
	}
},{
	start: numberToDate(getDayInWeek('Sunday', today() + 28)).split(',')[0],
	end: numberToDate(getDayInWeek('Saturday', today() + 28)).split(',')[0],
	id: 0,
	items: [0, 2],
	order: {
			0: 0,
			2: 0
		}
}];

var menu = [
	{
		name: "Buffalo Chicken Wrap",
		id: 0,
		price: 8.76,
		calories: 438,
		fat: 15,
		"saturated fat": 6.5,
		carbohydrates: 39,
		fiber: 3,
		sugar: 5,
		protein: 29,
		tags: ['gluten', 'spicy'],
		ingredients: ['vegetable oil', 'butter', 'chicken', 'flour tortilla', 'iceberg lettuce', 'celery', 'hot pepper sauce', 'white vinegar', 'worcestershire sauce', 'cayenne pepper', 'garlic powder', 'salt']
	},{
		name: "Turkey Pesto Sandwich",
		id: 1,
		price: 8.76,
		calories: 743,
		fat: 30.9,
		"saturated fat": 14.7,
		carbohydrates: 39.9,
		fiber: 2.4,
		sugar: 4.7,
		protein: 73.2,
		tags: ['gluten', 'dairy'],
		ingredients: ['Sourdough', 'Provolone cheese', 'Turkey', 'Tomatoes', 'Olive oil', 'Garlic', 'Salt', 'Basil leaves', 'Parmesan cheese']
	},{
		name: "Mac n' Cheese",
		id: 2,
		price: 8.31,
		calories: 605,
		fat: 24,
		"saturated fat": 10,
		carbohydrates: 67,
		fiber: 16,
		sugar: 11,
		protein: 44,
		tags: ['gluten', 'dairy', 'vegetarian'],
		ingredients: ['Barilla protein+ Pasta', 'Cheddar cheese', 'Mozzarella cheese', 'Greek yogurt', 'Paprika', 'Garlic powder', 'Salt', 'Pepper', 'Water']
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
		default:
			return 'Rendering Error';
	}
}
