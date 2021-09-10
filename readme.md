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

## How Filter Works

    the function passing in filter should return true, if we want to keep that specific item

    function whichOne(item) {
        return item !== 3;
    }

    [1,2,3,4].filter(whichOne);

    So, when the item is 3, function will return false.

    and finally, filter will return a new array.

## Getting Current Location

    using navigator.geolocation.getCurrentPosition();

    the funtion basically asks for two function,
    first - the function what want to do if success (The end uer allows to give their geolocation)
    second = the function what want to do if not success.

## Weather Service

    OpenWeatherApi

## fetch()

    call the URL ->  comes with promise
