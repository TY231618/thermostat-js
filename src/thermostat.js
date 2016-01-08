function Thermostat() {
  this.degrees = 20
  this.powerSaving = true
};

Thermostat.prototype.currentTemp = function() {
  return this.degrees;
};

Thermostat.prototype.upButton = function() {
  if (this.powerSaving === true && this.degrees >= 25) {
    throw new Error('Temperature cannot exceed 25');
  }
  if (this.powerSaving === false && this.degrees >= 32) {
    throw new Error('Temperature cannot exceed 32');
  }
  else {
    return this.degrees += 1;
  }
};

Thermostat.prototype.downButton = function() {
  if (this.degrees <= 10) {
    throw new Error('Temperature cannot fall below 10');
  }
  else {
    return this.degrees -= 1;
  }
};

Thermostat.prototype.powerSavingStatus = function() {
  return this.powerSaving;
};

Thermostat.prototype.powerSavingSwitch = function() {
  this.powerSaving = !this.powerSaving;
};


Thermostat.prototype.energyUsage = function() {
  if (this.degrees < 18) {
    return 'low-usage';
  }
  if (this.degrees >= 18 && this.degrees < 25) {
    return 'med-usage';
  }
  else {
    return 'high-usage';
  }
};

Thermostat.prototype.resetButton = function () {
  return this.degrees = 20;
};

Thermostat.prototype.converter = function (number) {
  return Math.round((number - 32) * (5/9) * 100) / 100;
};
