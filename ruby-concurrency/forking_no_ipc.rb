# Child inherits resources from parent,
# but does not get update

names = %w(Larissa Marina Olivia Yeena Amanda)

puts "PID #{Process.pid}: I am the parent!"

fork do
  puts "PID #{Process.pid}: I am the child!"
  puts "PID #{Process.pid}: Names are #{names}"

  sleep(2)
  puts "PID #{Process.pid}: Names are still #{names}"
end

names = %w(Alvin Ian)
puts "PID #{Process.pid}: Names are now #{names}!"
puts "PID #{Process.pid}: I'm done!"
