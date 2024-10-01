let calculation = localStorage.getItem('calculation') || '';
        let calculatorScreen = document.querySelector('.js-calculator-screen');
        showOnScreen()

        function updateCalculation(value) {
            calculation += value;
            console.log(calculation);
            localStorage.setItem('calculation', calculation);
            showOnScreen()
        }

        // Optional: you can also create a function in order
        // to reuse this code.
        function saveCalculation() {
            localStorage.setItem('calculation', calculation);
            showOnScreen()
        }

        function showOnScreen() {
            calculatorScreen.innerHTML = calculation;
        }