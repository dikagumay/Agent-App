(function () {
    angular.module('PruForce').controller('DocumentController', ['$scope', '$ionicModal', 'InvoiceService', DocumentController]);

    function DocumentController($scope, $ionicModal, InvoiceService) {
        var vm = this;

        setDefaultsForPdfViewer($scope);

        // Initialize the modal view.
        $ionicModal.fromTemplateUrl('pdf-viewer.html', {
            scope: $scope,
            animation: 'slide-in-up',
            windowClass: 'fullmodal'
        }).then(function (modal) {
            vm.modal = modal;
        });

        vm.previewOutput = function () {
            var invoice = getDummyData();

            InvoiceService.createPdf(invoice)
                .then(function (pdf) {
                    var blob = new Blob([pdf], { type: 'application/pdf' });
                    $scope.pdfUrl = URL.createObjectURL(blob);

                    // Display the modal view
                    vm.modal.show();
                });
        };
        // Clean up the modal view.
        $scope.$on('$destroy', function () {
            vm.modal.remove();
        });

        vm.createPdf = function () {
            var invoice = getDummyData();

            InvoiceService.outputPdf(invoice)
                .then(function (pdf) {
                    var blob = new Blob([pdf], { type: 'application/pdf' });
                    $scope.pdfUrl = URL.createObjectURL(blob);
                });
        };

        return vm;
    }
    
    /*function getPdfControler($scope, $ionicModal, InvoiceService) {
        var vm = this;

        setDefaultsForPdfViewer($scope);

        vm.getPdfOutput = function () {
            var invoice = getDummyData();

            OutputService.getPdf(invoice)
                .then(function (pdf) {
                    var blob = new Blob([pdf], { type: 'application/pdf' });
                    $scope.pdfUrl = URL.createObjectURL(blob);

                    // Display the modal view
                    //vm.modal.show();
                });
        };
        return vm;
    }*/

    function setDefaultsForPdfViewer($scope, InvoiceService) {
        $scope.scroll = 0;
        $scope.loading = 'loading';

        $scope.getNavStyle = function(scroll) {
            if(scroll > 100) return 'pdf-controls fixed';
            else return 'pdf-controls';
        }

        $scope.onError = function (error) {
            console.error(error);
        };

        $scope.onLoad = function () {
            $scope.loading = '';
        };

        $scope.onProgress = function (progress) {
            console.log(progress);
        };


    }

    /*JsBarcode("#code39", "Hello", {format: "code39"});*/



    /*function downloadPdf() {
            console.log('okee');
            return $q(function () {
                var dd = createDocumentDefinition(invoice);
                var pdf = pdfMake.createPdf(dd);
                pdfMake.createPdf(pdf).download('sample.pdf');
            });
        }
        return {
            downloadPdf: downloadPdf
        }
    }*/

    function getDummyData() {
        return {
            Date: new Date().toLocaleDateString("en-IE", { year: "numeric", month: "long", day: "numeric" }),
            AddressFrom: {
                Name: chance.name(),
                Address: chance.address(),
                Country: chance.country({ full: true })
            },
            AddressTo: {
                Name: chance.name(),
                Address: chance.address(),
                Country: chance.country({ full: true })
            },
            Items: [
                { Description: 'iPhone 6S', Quantity: '1', Price: '€700' },
                { Description: 'Samsung Galaxy S6', Quantity: '2', Price: '€655' }
            ],
            Subtotal: '€2010',
            Shipping: '€6',
            Total: '€2016'
        };
    }
})();