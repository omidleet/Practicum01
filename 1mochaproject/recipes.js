/**
 * Created by Omidleet on 09/05/2017.
 */

// Sample recipes database
// Source: https://en.wikibooks.org/wiki/Cookbook
var recipes = [
    {
        name: 'Lasagne',
        category: 'Pasta',
        procedure: 'Steps for making lasagne'
    },
    {
        name: 'Calzone',
        category: 'Pizza',
        procedure: 'Steps to make calzone (pizza)'
    },
    {
        name: 'Tuna Salad',
        category: 'Salad',
        procedure: [
            'Mix ingredients in a bowl',
            'Chill before serving'
        ]
    }
];
module.exports = recipes;
