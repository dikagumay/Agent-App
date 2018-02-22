angular.module('PruForce.services')

    .service('ManagemenMenuAndIcon', function () {
        var agentCode, agentId, userType, licenseType;

        function setMenuAndIcon(agenCode, agentId, userType, license) {
            this.agentCode = agenCode;
            this.agentId = agentId;
            this.userType = agenCode;
            this.licenseType = licenseType;
            console.log(" agentCode :"+this.agentCode);
        }

        function getMenuAndIcon() {
            var getProfileArray = {
                'agenCode': this.agentCode,
                'agentId': this.agentId,
                'userType': this.userType,
                'license': this.licenseType
            };
            return getProfileArray;
        }

        return {
            setMenuAndIcon: setMenuAndIcon,
            getMenuAndIcon: getMenuAndIcon
        }
    });

