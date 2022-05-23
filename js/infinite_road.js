document.addEventListener("DOMContentLoaded", main);

var sketch;
var context
var canvasWidth = 500;
var canvasHeight = canvasWidth * 0.5;
var fps = 30; // frames per second (refresh rate)
var dy = 0;
var car_dy = 0;

// DRAW STUFF HERE!500
function main() {
    sketch = document.getElementById("sketch");
    context = sketch.getContext("2d");

    // Animate
    setInterval(animate, fps); // call animate every fps milliseconds
}

function draw_square(x_position = canvasHeight, y_position = 0, square_width = 10, square_height = canvasHeight, square_color = '#000') {
    context.fillStyle = square_color;
    context.fillRect(x_position, y_position, square_width, square_height);
}

function draw_streaks(x_position = 50, y_position = 0, streak_width = 20, streak_height = (streak_width * 2), streak_color = '#fff') {
    for (let i = 0; i < 8; i += 2) {
        if (i % 2 === 0) {
            draw_square(x_position, y_position + (i * streak_height), streak_width, streak_height, streak_color);
        }
    }
}

function draw_car_up (x_position = 280, y_position = 115, car_width = 40, car_heigth = 75, body_color = '#1c3348', glass_color = '#e1d3c8') {
    // Car Body
    draw_square(x_position, y_position, car_width, car_heigth, body_color);

    car_glass_height = car_heigth - 60;
    car_windshield_width = car_width / 2;
    car_windshield_x_position = x_position + 10;

    // Front Windshield
    draw_square(car_windshield_x_position, (y_position + 10), car_windshield_width, car_glass_height, glass_color);

    car_window_width = car_glass_height / 5;
    car_window_right_x_position = x_position + 37;
    car_window_front_y_position = y_position + 23;
    car_window_back_y_position = y_position + 43;

    draw_square((x_position - 5), (car_window_front_y_position - 5), 5, 5, body_color);
    draw_square((car_window_right_x_position + 3), (car_window_front_y_position - 5), 5, 5, body_color);

    // Front Driver Window
    draw_square(x_position, car_window_front_y_position, car_window_width, car_glass_height, glass_color);
   
    // Front Right Window
    draw_square(car_window_right_x_position, car_window_front_y_position, car_window_width, car_glass_height, glass_color);
    
    // Back Left Passenger Window
    draw_square(x_position, car_window_back_y_position, car_window_width, car_glass_height, glass_color);

    // Back Right Passenger Window
    draw_square(car_window_right_x_position, car_window_back_y_position, car_window_width, car_glass_height, glass_color);

    // Back Windshield
    draw_square(car_windshield_x_position, (y_position + 60), car_windshield_width, car_glass_height, glass_color);
}

function draw_car_down (x_position = 170, y_position = 115, car_width = 40, car_heigth = 75, body_color = '#1c3348', glass_color = '#e1d3c8') {
    // Car Body
    draw_square(x_position, y_position, car_width, car_heigth, body_color);

    car_glass_height = car_heigth - 60;
    car_windshield_width = car_width / 2;
    car_windshield_x_position = x_position + 10;

    // Back Windshield
    draw_square(car_windshield_x_position, y_position, car_windshield_width, car_glass_height, glass_color);

    car_window_width = car_glass_height / 5;
    car_window_right_x_position = x_position + 37;
    car_window_back_y_position = y_position + 15;
    car_window_front_y_position = y_position + 35;

    draw_square((x_position - 5), (car_window_front_y_position + car_glass_height), 5, 5, body_color);
    draw_square((car_window_right_x_position + 3), (car_window_front_y_position + car_glass_height), 5, 5, body_color);

    // Back Driver Window
    draw_square(x_position, car_window_front_y_position, car_window_width, car_glass_height, glass_color);
   
    // Back Right Window
    draw_square(car_window_right_x_position, car_window_front_y_position, car_window_width, car_glass_height, glass_color);
    
    // Front Left Passenger Window
    draw_square(x_position, car_window_back_y_position, car_window_width, car_glass_height, glass_color);

    // Front Right Passenger Window
    draw_square(car_window_right_x_position, car_window_back_y_position, car_window_width, car_glass_height, glass_color);

    // Front Windshield
    draw_square(car_windshield_x_position, (y_position + 50), car_windshield_width, car_glass_height, glass_color);
}

function animate() {
    context.clearRect(0, 0, sketch.offsetWidth, sketch.offsetHeight); // clear the screen

    // Draw road
    draw_square(0, 0, (canvasHeight + 50), canvasHeight, '#b6a49f');
    draw_square(0, 0, 30, canvasHeight, '#ff0');

    let streak_height = 15;    
    draw_streaks(105, (dy * 2));
    draw_streaks(205, (dy * 2));

    if (dy < streak_height) {
        dy++;
    } else {
        dy = -dy;
    }

    // Draw cars
    car_width = 40;
    car_heigth = 75;

    draw_car_up(40, (135 + car_dy), car_width, car_heigth, '#58aa91', '#616365');
    draw_car_up(147, (30 + car_dy));
    draw_car_up(245, (85 - car_dy), car_width, car_heigth, '#fdd23b', '#231f20');

    car_dy = dy / 20;
}
