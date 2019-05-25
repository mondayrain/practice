# Child inherits resources from parent,
# and gets updates through pipes.

names = %w(Larissa Marina Olivia Yeena Amanda)

# Pipes are a stream, so as long as the pipe stays
# open, each process will have an "open" stream 4eva
reader, writer = IO.pipe

puts "PID #{Process.pid}: I am the parent!"

# ----Child process work --------
fork do
  # We only want to read from the child, so we close the
  # "writer" end of the pipe.
  writer.close

  puts "PID #{Process.pid}: I am the child!"
  puts "PID #{Process.pid}: Names are #{names}"

  puts "PID #{Process.pid}: Waiting 5 seconds..."
  sleep(5)
  names = reader.read
  puts "PID #{Process.pid}: Names are now #{names}"

  # Close off other end of stream so the process terminates
  reader.close
end
# ---------------------------------

# We only want to write from the parent, so we close the
# "reader" end of the pipe.
reader.close

names = %w(Alvin Ian)
puts "PID #{Process.pid}: Names are now #{names}!"

puts "PID #{Process.pid}: Doing some 'expensive computation...' so the child will receive a time slice"
(1..1000).each { |num| num**num }

puts "PID #{Process.pid}: Writing update to pipe"

writer.write names

# Close off other end of stream so the process terminates
writer.close

puts "PID #{Process.pid}: I'm done!"
