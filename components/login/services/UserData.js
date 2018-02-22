angular.module('PruForce.services')

    .service('UserData', function () {
        var username, agentId, userType, licenseType, inboxLength;

        function setUserData(username, agentId, userType, licenseType) {
            this.username = username;
            this.agentId = agentId;
            this.userType = userType;
            this.licenseType = licenseType;
        }

        function getUserData() {
            var getUserArray = {
                'username': this.username,
                'agentId': this.agentId,
                'userType': this.userType,
                'licenseType': this.licenseType,
            };
            return getUserArray;
        }
        function setInbox(inboxLength){
            console.log("masuk"+inboxLength);
            this.inboxLength = inboxLength;
        }
        function getInbox(){
            var inbox ={
                'inboxLength':this.inboxLength
            }
            return inbox;
        }

        return {
            setUserData: setUserData,
            getUserData: getUserData,
            setInbox : setInbox,
            getInbox : getInbox
        }
    });

