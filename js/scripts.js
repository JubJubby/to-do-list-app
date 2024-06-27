// original JS so I don't have to keep tabbing

// function newItem(){

//     //javascript
//     //1. Adding a new item to the list of items: 
//        let li = document.createElement("li");
//        let inputValue = document.getElementById("input").value;
//        let text = document.createTextNode(inputValue);
//        li.appendChild(text);
    
//        if (inputValue === '') {
//          alert("You must write something!");
//        } else {
//          let list = document.querySelector('#list');
//          list.appendChild(li);
//        }
    
//      //2. Crossing out an item from the list of items:
//        function crossOut() {
//              li.classList.toggle("strike");
//          }
    
//          li.addEventListener("dblclick",crossOut);
    
//      //3(i). Adding the delete button "X": 
//        let crossOutButton = document.createElement("crossOutButton");
//          crossOutButton.appendChild(document.createTextNode("X"));
//          li.appendChild(crossOutButton);
    
//          crossOutButton.addEventListener("click", deleteListItem);
//      //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
//        function deleteListItem(){
//              li.classList.add("delete")
//          }
//      // 4. Reordering the items: 
//        $('#list').sortable();
    
//     }

// // 1. adding a new item to the list of items:
// let li = $("<li></li>");
// let inputValue = $("#input").val();
// li.append(inputValue);

// // if nothing is typed
// if (inputValue === "") {
//     alert("You must write something!");
// } else {
//     let list = $("#list");
//     $("#list").append(list);
// }

// // 2. Crossing out an item from a list of items
// function crossOut() {
//     li.addClass("strike");
// }
// // Listener to cross out the item
// li.on("click", function crossOut() {
//     li.addClass("strike");
// });

// // 3. Adding a delete button "X"
// let deleteButton = $("<deleteButton></deleteButton>");
// deleteButton.append(document.createTextNode("X"));
// li.append(deleteButton);
// // Listener for the delete item function
// deleteButton.on("click", function deleteListItem() {
//     li.addClass("delete");
// });

// // 4. Reordering the items:
// $("list").sortable();



 
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();

