sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'applications/test/integration/FirstJourney',
		'applications/test/integration/pages/ApplicationsList',
		'applications/test/integration/pages/ApplicationsObjectPage',
		'applications/test/integration/pages/InstallationsObjectPage'
    ],
    function(JourneyRunner, opaJourney, ApplicationsList, ApplicationsObjectPage, InstallationsObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('applications') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheApplicationsList: ApplicationsList,
					onTheApplicationsObjectPage: ApplicationsObjectPage,
					onTheInstallationsObjectPage: InstallationsObjectPage
                }
            },
            opaJourney.run
        );
    }
);