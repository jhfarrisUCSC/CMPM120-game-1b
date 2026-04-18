class Start extends Scene {
    create() {
        this.engine.setTitle(this.engine.storyData.Title); // TODO: replace this text using this.engine.storyData to find the story title
        this.engine.addChoice("Begin the story");


        // variables
        this.engine.treasureKey = false;
        this.engine.treasure = false;
        this.engine.officeKey = false;
        this.engine.passageUnlocked = false;
        this.engine.comboInput = "";
        this.engine.inputLength = 0;
        this.engine.correctCombo = "1453";
    }


    handleChoice() {
        this.engine.gotoScene(Location, this.engine.storyData.InitialLocation); // TODO: replace this text by the initial location of the story
    }
}


class Location extends Scene {
    create(key) {
        this.currentLocation = key;
       
        let locationData = this.engine.storyData.Locations[key]; // TODO: use `key` to get the data object for the current story location
        this.engine.show(locationData['Body']); // TODO: replace this text by the Body of the location data
       
        if('Choices' in locationData) { // TODO: check if the location has any Choices
            for(let choice of locationData.Choices) { // TODO: loop over the location's Choices
                this.engine.addChoice(choice.Text, choice); // TODO: use the Text of the choice
                // TODO: add a useful second argument to addChoice so that the current code of handleChoice below works
            }
        }
    }


    handleChoice(choice) {
        if (choice.Text == "The end") {
            this.engine.gotoScene(End);
        }
        // Office Key Mechanic
        else if((choice.Text == "Check the office") && (this.engine.officeKey == false)) {
            this.engine.show("> Looks like you need a big key…");
            this.engine.gotoScene(Location, "Lobby");
        }


        else if((choice.Text == "Return to friends") && (this.engine.treasure == false)) {
            this.engine.show("> You should grab something cool first, the creator didn't have the will to make multiple endings.");
            this.engine.gotoScene(Location, "Lobby");
        }


        else if((choice.Text == "Return to friends") && (this.engine.treasure == true)) {
            this.engine.show("> "+choice.Text);
            this.engine.gotoScene(Location, "Outside");
        }
       
        // Office
        else if(choice.Text == "Check the desk") {
            if (this.engine.treasureKey == false) {
                this.engine.show("> Looks like you need a small key to open the drawer…");
                this.engine.gotoScene(Location, "Office");
            } else {
                this.engine.treasure = true;
                this.engine.show("> "+choice.Text);
                this.engine.gotoScene(Location, "Treasure");
            }
        }
       
        // Treasure Key
        else if((choice.Text == "Check the bed") && (this.currentLocation == "Cell 1")) {
            this.engine.treasureKey = true;
            this.engine.show("> "+choice.Text);
            this.engine.gotoScene(Location, choice.Target);
        }
       
        // Office Key
        else if((choice.Text == "Check the cabinet") && (this.currentLocation == "Cell 3")) {
            this.engine.officeKey = true;
            this.engine.show("> "+choice.Text);
            this.engine.gotoScene(Location, choice.Target);
        }




        // Passcode
        else if ((choice.Text == "Check the shelf") && (this.engine.passageUnlocked == true)){
            this.engine.show("> "+choice.Text);
            this.engine.gotoScene(Location, "Cell 3");
        }
        else if(choice.Text == "[1]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "1";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }
        else if(choice.Text == "[2]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "2";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }
        else if(choice.Text == "[3]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "3";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }
        else if(choice.Text == "[4]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "4";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }
        else if(choice.Text == "[5]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "5";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }
        else if(choice.Text == "[6]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "6";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }
        else if(choice.Text == "[7]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "7";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }
        else if(choice.Text == "[8]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "8";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }
        else if(choice.Text == "[9]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "9";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }
        else if(choice.Text == "[0]") {
            if (this.engine.inputLength >= 4) {
                this.engine.inputLength = 0;
                this.engine.comboInput = "";
            }
            this.engine.inputLength = this.engine.inputLength +1;
            this.engine.comboInput = this.engine.comboInput + "0";
            this.engine.show("> CURRENT: [" + this.engine.comboInput + "]");
            if (this.engine.comboInput == this.engine.correctCombo) {
                this.engine.passageUnlocked = true;
                this.engine.gotoScene(Location, "Cell 3");
            }
            else {
                this.engine.gotoScene(Location, "Passcode");
            }
        }


        // Standard


        else if(choice) {
            this.engine.show("> "+choice.Text);
            this.engine.gotoScene(Location, choice.Target);
        }


    }
}


class End extends Scene {
    create() {
        this.engine.show("<hr>");
        this.engine.show(this.engine.storyData.Credits);
    }
}


Engine.load(Start, 'myStory.json');



