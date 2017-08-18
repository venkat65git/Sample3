/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojchart'],
        function (oj, ko, $)
        {
            function ChartModel() {
                var self = this;

                /* toggle button variables */
                self.stackValue = ko.observable('off');
                self.orientationValue = ko.observable('vertical');

                /* chart data */
            
                var barSeries = [{items: [32,55,20]}]; 

              
                var barGroups = ["Java", "JavaScript", "C"];

                self.barSeriesValue = ko.observableArray(barSeries);
                self.barGroupsValue = ko.observableArray(barGroups);

            
            }

            var chartModel = new ChartModel();

            return chartModel;
        });	