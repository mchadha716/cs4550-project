# Project Proposal

## Team Members and Project Idea
	Our team consists of Zialynn Anderson, Kate Rupar, Sanjana Dutt, and Mira Chadha. 

	We have decided to make an app similar to the Example Project Idea "MBTA Next Bus Tracker". Instead of notifying users about bus locations and arrivals, the app is going to focus on the expected arrival times and schedules for the trains on Northeastern campus - the Green and Orange lines. If these two trains lines are easy to implement, the app may also include other train lines throughout Boston or maybe bus stops close to campus. For this app, the MBTA API will be required to 
	obtain the specific trains (and maybe buses) and list their info to the user in list form in the app. The realtime behavior will be the app pushes live info updates about the trains (and maybe buses). Some persistent state that will be stored in a Postgres DB will be the user's default station, other saved stations, and maybe favorite destinations along the different line. Something "neat" the app is going to do is use the HTML Geolocation API to obtain the users' current position to show the trains (and maybe buses) closest to the user at that time. We may also include a feature that allows the user to type in a location, and the app would show info on the trains (and maybe buses) close to that specific area. 

## Experiment 1: MBTA API
	For this experiment, we tested to see how much realtime data we could access using the API. The most important data we wanted to obtain was the first expected arrival/departure time for a train or bus closest to the user, so information we needed to access using the API was the train station's location and the train's current position/time away from that station. Source code for this experiment can be found in both the server and web-ui folders of the mbta_tracker.

	From this experiment, we learned how to use the API to get the specific info and display that information to the web UI. Train lines themselves do not have GPS info, so we have to use individual stops. Individual stops, however, have latitude and longitude data that can be used to filter stops and predictions. We can use these filters to find train and bus stops nearby a given location. The default radius for "nearby" is 0.5 mi. In addition, it appears that the closest stops are returned first.

## Experiment 2: HTML Geolocation API
	For this experiment, we tested the ability to obtain the user's current location from JavaScript. Source code for this experiment can be found in the web-ui folder of the mbta_tracker.

	From this experimet, The device's current location is displayed after the user consents. There is a delay in obtaining the initial position of the device.

## Target Users
	We expect Northeastern students to use this app, since the MBTA trains and buses are very accessible on campus. Northeastern students will eventually have a co-op, and a lot of co-ops are in downtown Boston. These students will want an app that can tell them the realtime status of a train or bus, so they can prepare in the morning and be on time for their jobs.