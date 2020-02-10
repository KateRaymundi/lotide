const tail = require ("../tail")
const assertEqual = require ("../assertEqual")


const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(tail(words)); // no need to capture the return value since we are not checking it
