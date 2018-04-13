$(document).ready(function() {
    // ask the user if they want to use rgb or hex for generating colors
    var userInput = prompt("Welcome to the color randomizer 5000! Would you like to use RGB or hexadecimal colors? Please enter 'rgb' for RGB, or 'hex' for hexadecimal.");
    var colorScheme = userInput.toLowerCase();

    // if the user inputs 'rgb' into the prompt, I'm using the 'rgbGenerator()' function to generate the colors
    if (colorScheme == 'rgb' ) {
        // rgbGenerator generates 3 random numbers between 0(?) maybe 1, and 255. It then creates a string: "rgb(x, y, z)" using these numbers that is returned by the funtion
        function rgbGenerator() {
            var x = Math.floor(Math.random() * 255);
            var y = Math.floor(Math.random() * 255);
            var z = Math.floor(Math.random() * 255);
            var color = "rgb(" + x + ", " + y + ", " + z + ")";
            return color;
        }
        //jquery to change the colorz
            $('.div1').on('mousemove', () => {
                var newRgbColor = rgbGenerator();
                $('.div1').css('background-color', newRgbColor);
                $('.rgb1').text(newRgbColor);
            });
        
            $('.div2').on('mousemove', () => {
                var newRgbColor = rgbGenerator();
                $('.div2').css('background-color', newRgbColor);
                $('.rgb2').text(newRgbColor);
            });
        
            $('.div3').on('mousemove', () => {
                var newRgbColor = rgbGenerator();
                $('.div3').css('background-color', newRgbColor);
                $('.rgb3').text(newRgbColor);
            });

            $('.reset').on('click', () => {
                var resetColor = 'rgb(255, 255, 255)';
                $('.div1').css('background-color', resetColor);
                $('.div2').css('background-color', resetColor);
                $('.div3').css('background-color', resetColor);
                $('.rgb1').text(resetColor);
                $('.rgb2').text(resetColor);
                $('.rgb3').text(resetColor);
            });
    // if the user inputs 'hex' into the prompt, I'm using the 'hexGenerator()' function to generate the colors
    } else if (colorScheme == 'hex') {
        function hexGenerator() {
            //create an array of all the possible values within a hexadecimal 'string'
            var possibilities = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
            //a hex string has 6 characters. So create 6 variables that are set to a random element from the 'possibilities' array
            var a = possibilities[Math.floor(Math.random() * possibilities.length)];
            var b = possibilities[Math.floor(Math.random() * possibilities.length)];
            var c = possibilities[Math.floor(Math.random() * possibilities.length)];
            var d = possibilities[Math.floor(Math.random() * possibilities.length)];
            var e = possibilities[Math.floor(Math.random() * possibilities.length)];
            var f = possibilities[Math.floor(Math.random() * possibilities.length)];
            //create a variable to hold the hex 'string'
            var hex = "#" + a + b + c + d + e + f;
            //return hex so we can call this function and get hex later
            return hex;
        }

        //jquery to change the colorz
        $('.div1').on('mousemove', () => {
            var newHexColor = hexGenerator();
            $('.div1').css('background-color', newHexColor);
            $('.rgb1').text(newHexColor);
        });
    
        $('.div2').on('mousemove', () => {
            var newHexColor = hexGenerator();
            $('.div2').css('background-color', newHexColor);
            $('.rgb2').text(newHexColor);
        });
    
        $('.div3').on('mousemove', () => {
            var newHexColor = hexGenerator();
            $('.div3').css('background-color', newHexColor);
            $('.rgb3').text(newHexColor);
        });

        $('.reset').on('click', () => {
            var resetColor = '#ffffff';
            $('.div1').css('background-color', resetColor);
            $('.div2').css('background-color', resetColor);
            $('.div3').css('background-color', resetColor);
            $('.rgb1').text(resetColor);
            $('.rgb2').text(resetColor);
            $('.rgb3').text(resetColor);
        });
    }
});