# Explanation
# You will be building a calculator which can perform multiple arithmetic operations. Your program should allow the user to choose which operation to perform, enter the values on which the operation is performed, and output the result.
# Specification:
# A user should be given a menu of operations
# A user should be able to choose from the menu
# A user should be able to enter numbers to perform the operation on
# A user should be shown the result
# The menu should be displayed again, and process should continue until the user selects a quit option from the menu
# Phase 1
# Calculator functionality
# Calculator should be able to do basic arithmetic (+,-, *, /)
# Phase 2
# Advanced Calculator functionality
# Calculator should be able to do basic arithmetic (exponents, square roots)
puts 'Please choose the function of your calculator'
puts '1 = add'
puts '2 = minus'
puts '3 = multiple'
puts '4 = division'
puts 'choose the operator (1,2,3,4)'
operator = gets.chomp
puts 'What is the first number'
num1 = gets.chomp.to_f
puts 'What is the second number'
num2 = gets.chomp.to_f

if operator == '1'
  puts num1 + num2
elsif operator == '2'
  puts num1 - num2
elsif operator == '3'
  puts num1 * num2
elsif operator == '4'
  puts num1/num2
else
  puts 'invaid operator'
end


#Bonus
# Mortgage Calculator
# Calculate the monthly required payment given the other variables as input (look up the necessary variables)
#
# BMI Calculator
# Calculate the body mass index (BMI) for an individual, given their height and weight
#
# Trip Calculator
# Calculate a trip time and cost given inputs for
# distance
# miles per gallon
# price per gallon
# speed in miles per hour
