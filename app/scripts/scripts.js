'use strict';

var app = new Vue({
    el: '#app',
    data: {
        foodItems: [{
            name: 'example',
            calories: 299,
            protein: 91,
            fats: 141,
            carbs: 57
        }, {
            name: 'example2',
            calories: 94,
            protein: 21,
            fats: 5,
            carbs: 68
        }, {
            name: 'example3',
            calories: 230,
            protein: 31,
            fats: 14,
            carbs: 47
        }],
        newFoodItems: [{
            name: '',
            calories: '',
            protein: '',
            fats: '',
            carbs: ''
        }]
    },
    computed: {
        totalCalories: function totalCalories() {
            var totalCalories = 0;
            for (var i = 0; i < this.foodItems.length; i++) {
                totalCalories += parseInt(this.foodItems[i].calories);
            }
            return totalCalories;
        },
        totalProtein: function totalProtein() {
            var totalProtein = 0;
            for (var i = 0; i < this.foodItems.length; i++) {
                totalProtein += parseInt(this.foodItems[i].protein);
            }
            return totalProtein;
        },
        totalFats: function totalFats() {
            var totalFats = 0;
            for (var i = 0; i < this.foodItems.length; i++) {
                totalFats += parseInt(this.foodItems[i].fats);
            }
            return totalFats;
        },
        totalCarbs: function totalCarbs() {
            var totalCarbs = 0;
            for (var i = 0; i < this.foodItems.length; i++) {
                totalCarbs += parseInt(this.foodItems[i].carbs);
            }
            return totalCarbs;
        }
    },
    methods: {
        addNewFood: function addNewFood() {
            if (app.dataExists()) {
                app.foodItems.push({
                    name: app.newFoodItems[0].name,
                    calories: app.newFoodItems[0].calories,
                    protein: app.newFoodItems[0].protein,
                    fats: app.newFoodItems[0].fats,
                    carbs: app.newFoodItems[0].carbs
                });
                app.newFoodItems[0].name = '';
                app.newFoodItems[0].calories = '';
                app.newFoodItems[0].protein = '';
                app.newFoodItems[0].fats = '';
                app.newFoodItems[0].carbs = '';
            }
        },
        dataExists: function dataExists() {
            if (app.newFoodItems[0].calories !== '' && app.newFoodItems[0].calories >= 0) {
                if (app.newFoodItems[0].name == '') {
                    app.newFoodItems[0].name = "No name";
                }
                if (app.newFoodItems[0].protein == '') {
                    app.newFoodItems[0].protein = 0;
                }
                if (app.newFoodItems[0].fats == '') {
                    app.newFoodItems[0].fats = 0;
                }
                if (app.newFoodItems[0].carbs == '') {
                    app.newFoodItems[0].carbs = 0;
                }
                return true;
            } else {
                alert('Please enter at least calories');
            }
        },
        removeRow: function removeRow(row) {
            app.foodItems.splice(row, 1);
        }
    }
});