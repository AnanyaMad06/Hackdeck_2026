from allocator import allocate_police

total_police = 50
intensities = [2.0, 2.0, 3.0, 4.0, 5.0]

result = allocate_police(total_police, intensities, min_police=5)

print("🚓 Police Allocation:", result)
print("🔢 Total Allocated:", sum(result))
