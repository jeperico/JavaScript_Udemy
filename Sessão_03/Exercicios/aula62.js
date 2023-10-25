const FizzBuzz = (number) => typeof(number) == "number" ? (number % 3 == 0 && number % 5 == 0 ? "FizzBuzz" : (number % 3 == 0 ? "Fizz" : (number % 5 == 0 ? "Buzz" : number))) : NaN;

for(i = 1; i <= 100; i++) console.log(FizzBuzz(i));
