# Momentum Clone - Vanilla Js

## Picking Quotes

    From quotes object array

## Get Time

    JavaScript Date.now() funtion

## Formatting Timer

    JavaScript String.padStart() funtion

## Add Image Dynamically

    First create element using document.createElement() function
    Then set the image source
    Then append element to the parent using appendChild() funtion
    prepend() funtion will add element to top of the parent

## Deleting element

    Add an event listener and call a function
    grab event as a parameter
    using that get the target parentElement
    then remove the parentElement

    const li = event.target.parentElement;
    li.remove();

## Save on local storage

    Only text can be saved on localstorage
    So we can user JSON.stringify(array) function to save the array as a text

## Convert saved text as an array

    JSON.parse(text) using we can convert the array shaped text as an array

## Foreach already giving us the item as a parameter

    todos.forEach(sayHello)

    function sayhello(item) {
        console.log("Hello", item);
    }

    Since that parameter already supplying, we can simplify this,

    parsedTodos.forEach((element) => paintTodo(element));

    into,

    parsedTodos.forEach(paintTodo);
