with open('hosts_access_log_00.txt', 'r') as input_file:
    bytes = []
    for lines in input_file.readlines():
        words = lines.split()
        bytes.append(words[-1])

bytes = list(int(byte) for byte in bytes)
usable_bytes = []
sum = 0
for usable in bytes:
    if usable > 5000:
        usable_bytes.append(usable)
        sum += usable

print(usable_bytes, sum)
bytecount = '{}'.format(len(usable_bytes))
sum_state = '{}'.format(sum)

with open('bytes_hosts_access_log_00.txt', 'w') as output_file:
    output_file.write(bytecount +'\n'+ sum_state)