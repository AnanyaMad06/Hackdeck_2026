from . import allocate

total_officers = int(input("Enter total police available: "))

crime_intensities = [
    1.5, 2.0, 2.3,
    3.0, 3.5, 4.0,
    4.2, 4.8, 5.0
]

result = allocate(
    total_officers,
    crime_intensities,
    min_officers=5
)

print("\nPolice Allocation per Zone:")
for i, val in enumerate(result, start=1):
    print(f"Zone {i}: {val}")

print("\n Total Allocated:", sum(result))
