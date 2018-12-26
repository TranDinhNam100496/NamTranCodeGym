
var Temperature = function(celsius){
    this.Celsius = celsius ;
    this.getFahrenheit = function(){
        return this.Celsius * 1.8  +  32;
    } 
    this.getKelvin = function(){
        return this.Celsius + 273.15;
    }
}
var temperature = new Temperature(25);
var Fahrenheit = temperature.getFahrenheit() ;
var Kelvin = temperature.getKelvin();
document.write("Chuyển độ c sang độ f" + Fahrenheit + "</br>"); 
document.write ("Chuyển từ độ c sang độ k" + Kelvin);