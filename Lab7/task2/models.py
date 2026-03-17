class Coffee:
    def __init__(self, name, price, volume_ml):
        self.name = name
        self.price = price
        self.volume_ml = volume_ml

    def describe(self):
        return f"{self.name} — {self.volume_ml}ml, {self.price} tenge"

    def prepare(self):
        return f"Preparing {self.name}..."

    def __str__(self):
        return f"{self.__class__.__name__}(name={self.name}, price={self.price}, volume={self.volume_ml}ml)"


class Espresso(Coffee):
    def __init__(self, name, price, volume_ml, shots):
        super().__init__(name, price, volume_ml)
        self.shots = shots

    def prepare(self):
        return f"Pulling {self.shots} shot(s) of espresso for {self.name}."

    def describe(self):
        return f"{self.name} — {self.shots} shot(s), {self.volume_ml}ml, {self.price} tenge"

    def __str__(self):
        return f"Espresso(name={self.name}, shots={self.shots}, price={self.price})"


class Latte(Coffee):
    def __init__(self, name, price, volume_ml, milk_type):
        super().__init__(name, price, volume_ml)
        self.milk_type = milk_type

    def prepare(self):
        return f"Brewing espresso, steaming {self.milk_type} milk for {self.name}."

    def describe(self):
        return f"{self.name} — {self.milk_type} milk, {self.volume_ml}ml, {self.price} tenge"

    def add_syrup(self, syrup):
        return f"Added {syrup} syrup to {self.name}. Enjoy!"

    def __str__(self):
        return f"Latte(name={self.name}, milk={self.milk_type}, price={self.price})"


class ColdBrew(Coffee):
    def __init__(self, name, price, volume_ml, brew_hours, with_ice):
        super().__init__(name, price, volume_ml)
        self.brew_hours = brew_hours
        self.with_ice = with_ice

    def prepare(self):
        ice_note = "served over ice" if self.with_ice else "served straight"
        return f"{self.name} brewed for {self.brew_hours}h, {ice_note}."

    def describe(self):
        ice = "with ice" if self.with_ice else "no ice"
        return f"{self.name} — cold brew {self.brew_hours}h, {ice}, {self.volume_ml}ml, {self.price} tenge"

    def __str__(self):
        return f"ColdBrew(name={self.name}, brew_hours={self.brew_hours}, price={self.price})"