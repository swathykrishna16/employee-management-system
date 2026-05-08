function trafficLightSystem(currentSignal, isEmergencyVehicleApproaching){

    // Emergency vehicle condition
    if(isEmergencyVehicleApproaching){
        return "IMMEDIATE GREEN";
    }

    // Normal traffic signal conditions
    switch(currentSignal){

        case "RED":
            return "STOP";

        case "YELLOW":
            return "PREPARE TO STOP";

        case "GREEN":
            return "GO";

        default:
            return "INVALID SIGNAL";
    }
}


// Test Cases

console.log(
trafficLightSystem("RED", false)
);

console.log(
trafficLightSystem("YELLOW", false)
);

console.log(
trafficLightSystem("GREEN", false)
);

console.log(
trafficLightSystem("RED", true)
);