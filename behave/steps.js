const { Given, When, Then } = require('@cucumber/cucumber')
const assert = require('chai').assert

class Elevator {
    setFloors(numberOfFloors) {

    }

    setUndergroundFloors(numberOfUndergroundFloors) {

    }

    setCurrentFloor(floorIndex) {
        this.currentFloor = floorIndex
    }

    getCurrentFloor() {
        return this.currentFloor
    }

    navigate(passenger, floorIndex) {
        this.setCurrentFloor(floorIndex)
        passenger.setFloor(floorIndex)
    }
}

class Passenger {

    constructor() {
        this.insideElevator = false
      }

    setFloor(floorIndex) {
        this.currentFloor = floorIndex
    }

    getCurrentFloor() {
        return this.currentFloor
    }

    call(elevator) {
        elevator.setCurrentFloor(this.currentFloor)
    }

    walkThroughDoor(elevator) {
        this.insideElevator = !this.insideElevator
    }
}

Given('there are five floors', function () {
    this.elevator = new Elevator()
    this.elevator.setFloors(5)
})

Given('there is a single-floor basement', function () {    
    this.elevator.setUndergroundFloors(1)
})

Given('the passenger is on the ground floor', function () {    
    this.passenger = new Passenger()
    this.passenger.setFloor(0)
})

Given('the elevator is on the top floor', function () {    
    this.elevator.setCurrentFloor(3)
})

When('the passenger calls the elevator', function () {
    this.passenger.call(this.elevator)
})

Then('the elevator should arrive on the ground floor', function () {
    assert.equal(0, this.elevator.getCurrentFloor())
})

Given('the passenger is on the second floor', function () {
    this.passenger = new Passenger()
    this.passenger.setFloor(1)
})

Given('the elevator is on the second floor', function () {
    this.elevator.setCurrentFloor(1)
})

Then('the elevator should still be on the second floor', function () {
    assert.equal(1, this.elevator.getCurrentFloor())
})

Given('the elevator has seven floors', function () {
    this.elevator = new Elevator()
    this.elevator.setFloors(7)
})

Given('the elevator has no basement', function () {
    this.elevator.setUndergroundFloors(0)
})

When('the passenger navigates to the third floor', function () {
    this.elevator.navigate(this.passenger, 2)
})

Then('the passenger should be on the third floor', function () {
    assert.equal(2, this.passenger.getCurrentFloor())
})

Then('the elevator should be on the third floor', function () {
    assert.equal(2, this.elevator.getCurrentFloor())
})

When('the passenger navigates to the second floor', function () {
    this.elevator.navigate(this.passenger, 1)
})

Then('the passenger should be on the second floor', function () {
    assert.equal(1, this.passenger.getCurrentFloor())
})

Then('the elevator should be on the second floor', function () {
    assert.equal(1, this.elevator.getCurrentFloor())
})

Given('the passenger is outside of the elevator', function () {
    this.passenger = new Passenger()    
})

When('the passenger walks through the elevator door', function () {
    this.passenger.walkThroughDoor(this.elevator)
})

Then('the passenger should be inside of the elevator', function () {
    assert.equal(true, this.passenger.insideElevator)
})