function setDate(num) {
	if (num < 0) return;
	if (num > data.length - 1) return;
	if (num == 0) {
		document.querySelector('.previous_week').classList.add('unclickable_week');
	} else {
		document.querySelector('.previous_week').classList.remove('unclickable_week');
	}
	if (num >= data.length - 1) {
		document.querySelector('.next_week').classList.add('unclickable_week');
	} else {
		document.querySelector('.next_week').classList.remove('unclickable_week');
	}
	document.getElementById('current_week').textContent = `${data[num].start} - ${data[num].end}`;
	let m = document.querySelector('.menu');
	m.innerHTML = '';
	var arr = data[num].items;
	for ( i=0; i<arr.length; i++) {
		var obj = menu[ arr[i] ];
		var item = document.createElement('div'); item.classList.add('item'); m.append(item);
		var name = document.createElement('div'); name.textContent = obj.name; name.classList.add('item_name');
		var info = document.createElement('i'); info.classList.add('fa-solid'); info.classList.add('fa-circle-info'); infoEvent(obj, info);
		var macros = document.createElement('div'); macros.textContent = `$${obj.price} | ${obj.calories} cal`;macros.classList.add('item_macros');
		var allergies = document.createElement('div'); allergies.classList.add('item_allergies');
		item.append(name, info, macros, allergies);
		for ( i2=0; i2<obj.tags.length; i2++ ) {
			var icon = document.createElement('i');
			icon.classList.add('fa-solid', 'fa-brand', 'allergen-icon');
			icon.classList.add( tagToIcon(obj.tags[i2]) );	
			allergies.append(icon);
		}
		var add = document.createElement('div'); add.textContent = 'Add Item'; add.classList.add('item_add'); addEvent(obj, data[num], add);
		item.append(add);
	}

	function infoEvent(obj, info) {
		info.addEventListener('click', function() {
			showInfo(obj);
		})
	}
	function addEvent(obj, d, elem) {
		elem.addEventListener('click', function() {
			d.order[ obj.id ] += 1;
			setOrder(currentWeek);
		})
	}

	setOrder(num);
	currentWeek = num;
}



function setOrder(week) {
	var o = document.querySelector('.all_orders');
	o.innerHTML = '';

	var total = 0;
	for ( I=0; I<4; I++ ) {
		var d = data[ I ];
		var arr = d.items;

		insertWeek(d, arr);

		var first = true;
		for ( i=0; i<arr.length; i++ ) {
			if ( d.order[ arr[i] ] > 0 ) {
				var item = document.createElement('div'); item.classList.add('order_item'); o.append(item);
				if (first) {
					first = false;
					item.classList.add('item_top');
				} 
				var name = document.createElement('div'); name.textContent = menu[ d.items[i] ].name; name.classList.add('order_item_name'); item.append(name);
				var right = document.createElement('div'); right.classList.add('order_item_right'); item.append(right);
				var plus = document.createElement('i'); plus.classList.add('fa-solid', 'fa-plus');
				var amt = document.createElement('div'); amt.textContent = d.order[ arr[i] ]; amt.classList.add('order_item_amount');
				var minus = document.createElement('i'); minus.classList.add('fa-solid', 'fa-minus');
				right.append(plus, amt, minus);
				plusEvent(plus, d.order, arr[i]);
				minusEvent(minus, d.order, arr[i]);

				total += d.order[ arr[i] ];
			}
		}
	}

	function insertWeek(d, arr) {
		for ( i=0; i<arr.length; i++ ) {
			if ( d.order[ arr[i] ] > 0 ) {
				var w = document.createElement('div');
				w.textContent = d.start;
				w.classList.add('order_week');
				o. append(w);
				return
			}
		}
	}
	
	function plusEvent(elem, order, id) {
		elem.addEventListener('click', () => {
			order[id] += 1;
			setOrder(week);
		})
	}

	function minusEvent(elem, order, id) {
		elem.addEventListener('click', () => {
			order[id] -= 1;
			setOrder(week);
		})
	}

	document.querySelector('.mobile_order_number').textContent = total;
}



function showInfo(obj) {
	var info = document.querySelector('.extra_info_container');
	info.classList.remove('hard-hide');
	document.querySelector('.info_name').textContent = obj.name;
	document.querySelector('.info_price').textContent = `$${obj.price}`;
	// container
	var c = document.querySelector('.info_allergen_container');
	c.innerHTML = '';
	for ( i=0; i<obj.tags.length; i++) {
		// allergen container
		var aC = document.createElement('div');
		aC.classList.add('info_allergen');
		document.querySelector('.info_allergen_container').append(aC);

		var icon = document.createElement('i');
		icon.classList.add('fa-solid', 'fa-brand', 'allergen-icon', 'null_icon', 'info_icon');
		icon.classList.add( tagToIcon(obj.tags[i]) );

		var text = document.createElement('div'); text.textContent = tagToText(obj.tags[i])

		aC.append(icon, text);
	}

	document.querySelectorAll('.info_macros_right')[0].textContent = `${obj.calories} cal`;
	document.querySelectorAll('.info_macros_right')[1].textContent = `${obj.protein}g`;
	document.querySelectorAll('.info_macros_right')[2].textContent = `${obj.carbohydrates}g`;
	document.querySelectorAll('.info_macros_right')[3].textContent = `${obj.fiber}g`;
	document.querySelectorAll('.info_macros_right')[4].textContent = `${obj.sugar}g`;
	document.querySelectorAll('.info_macros_right')[5].textContent = `${obj.fat}g`;
	document.querySelectorAll('.info_macros_right')[6].textContent = `${obj['saturated fat']}g`;

	document.querySelector('.info_ingredients_content').textContent = obj.ingredients.sort().join(', ').toUpperCase();
}



function checkout() {
	console.log(data);
	document.querySelector('.checkout_container').classList.remove('hard-hide');
	var subtotal = 0;
	var shipping = 0;
	var c = document.querySelector('.weeks_containers');
	c.innerHTML = '';
	for ( i=0; i<data.length; i++) {
		var week = document.createElement('div'); week.classList.add('checkout_week');
		checkWeek(week, i);
		for ( I=0; I<data[i].items.length; I++ ) {
			if ( data[i].order[ data[i].items[I] ] > 0 ) {
				var d = data[i];
				var cItem = document.createElement('div'); cItem.classList.add('checkout_item'); week.append(cItem);
				var price = document.createElement('div'); price.textContent = `$${menu[ d.items[I] ].price * d.order[ d.items[I] ]}`; price.classList.add('checkout_item_price');
				subtotal += menu[ d.items[I] ].price  *  d.order[ d.items[I] ];
				var name = document.createElement('div'); name.textContent = menu[ d.items[I] ].name; name.classList.add('checkout_item_name');
				var amt = document.createElement('div'); amt.textContent = d.order[ d.items[I] ]; amt.classList.add('checkout_item_amount');
				cItem.append(price, name, amt);
			}
		}

		document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
		document.getElementById('shipping').textContent = `$${shipping.toFixed(2)}`;
		document.getElementById('total').textContent = `$${ (subtotal + shipping).toFixed(2) }`;
	}

	function checkWeek(week, i) {
		for ( I=0; I<data[i].items.length; I++ ) {
			if (data[i].order[ data[i].items[I]] > 0) {
				c.append(week);
				var label = document.createElement('div');
				label.textContent = `Delivery for ${data[i].start}`;
				label.classList.add('checkout_week_label');
				week.append(label);
				shipping += 3.68;
				return;
			}
		}
	}
}


