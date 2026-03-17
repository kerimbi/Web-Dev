from models import Coffee, Espresso, Latte, ColdBrew


def main():
    espresso = Espresso(name="Double Espresso", price=800, volume_ml=60, shots=2)
    latte = Latte(name="Vanilla Latte", price=1500, volume_ml=350, milk_type="oat")
    cold_brew = ColdBrew(name="Classic Cold Brew", price=1800, volume_ml=400, brew_hours=12, with_ice=True)
    black_latte = Latte(name="Black Latte", price=1600, volume_ml=300, milk_type="coconut")

    menu = [espresso, latte, cold_brew, black_latte]

    print("---Coffee Menu---")
    for coffee in menu:
        print(coffee)

    print("\n---Menu Descriptions---")
    for coffee in menu:
        print(coffee.describe())

    print("\n---Preparing Orders---")
    for coffee in menu:
        print(coffee.prepare())

    print(latte.add_syrup("vanilla"))
    print(black_latte.add_syrup("caramel"))

    cheapest = min(menu, key=lambda c: c.price)
    print(f"\n---Cheapest drink: {cheapest.name} — {cheapest.price} tenge---")

    total = sum(c.price for c in menu)
    print(f"---Total menu cost: {total} tenge---")

    print("---isinstance()---")
    for coffee in menu:
        print(f"{coffee.name} is Coffee: {isinstance(coffee, Coffee)}")


if __name__ == "__main__":
    main()