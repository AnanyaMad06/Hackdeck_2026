from allocator import allocate_police

# ---- User input ----
total_police = int(input("Enter total police available: "))

# ---- 9 zones crime intensity ----
intensities = [
    1.5, 2.0, 2.3,
    3.0, 3.5, 4.0,
    4.2, 4.8, 5.0
]

result = allocate_police(
    total_police=total_police,
    intensities=intensities,
    min_police=5
)

print("\nPolice Allocation per Zone:")
for i, val in enumerate(result, start=1):
    print(f"Zone {i}: {val}")

print("\n Total Allocated:", sum(result))
