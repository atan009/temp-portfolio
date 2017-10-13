/*
This is empty on purpose! Your code to build the resume will go here.
 */


//Bio Section
var bio = {
	"name": "Alex Tan",
	"role": "Technology Consultant",
	"contacts": {
		"mobile": "1-415-786-7198",
		"email": "atan009@ucr.edu",
		"github": "https://github.com/atan009",
		"location": "San Francisco"
	},
	"welcomeMessage": "Hello. This is my in-progress portfolio.",
	"skills": ["C++", "Android Studios",  "Git", 
	"Linux", "Matlab", "Vim", "Visual Studios"],
	"biopic": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAnQAAAAJDhlNDY1OTQzLWFiNjItNDIyMi04MTQ4LTFhZDYwYjc3MmNhOQ.jpg",
	display: function() {
		
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		$("#header").prepend(formattedRole);
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		$("#header").prepend(formattedName);

		var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
		$("#header").append(formattedBioPic);
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
		$("#header").append(formattedWelcomeMsg);

		var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
		$("#topContacts").append(formattedMobile);
		$("#footerContacts").append(formattedMobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
		$("#topContacts").append(formattedEmail);
		$("#footerContacts").append(formattedEmail);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
		$("#topContacts").append(formattedGithub);
		$("#footerContacts").append(formattedGithub);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
		$("#topContacts").append(formattedLocation);
		$("#footerContacts").append(formattedLocation);

		$("#header").append(HTMLskillsStart);
		for (var i = 0; i < bio.skills.length; i++) {
			var formattedSkills = HTMLskills.replace("%data%", bio.skills[i]);
			$("#header").append(formattedSkills);
		}
	}
};


bio.display();



//Education Section
var education = {
	"schools": [{
		"name": "University of California: Riverside",
		"location": "Riverside, CA",
		"degree": "BS",
		"majors": ["CS"],
		"dates": "2017",
	}],
	"onlineCourses": [{
		"title": "Connect Intensive - Front-End Web Developer Nanodegree Program",
		"school": "Udacity",
		"dates": "2017",
		"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
	}],
	display: function() {
		$("#education").append(HTMLschoolStart);

		//In-Person Courses
		for (var i = 0; i < education.schools.length; i++) {
			var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);

			var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			$(".education-entry").append(formattedSchoolName + formattedSchoolDegree);

			var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			$(".education-entry").append(formattedSchoolDates);

			var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
			$(".education-entry").append(formattedSchoolLocation);

			for (var k = 0; k < education.schools[i].majors.length; k++) {
				var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors[k]);
				$(".education-entry").append(formattedSchoolMajor);
			}
		}
		
		//Online-Courses
		$("#education").append(HTMLonlineClasses);
		$("#education").append(HTMLschoolStart);
		for (i = 0; i < education.onlineCourses.length; i++) {

			var formattedOnlinetitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);

			var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
			$(".education-entry").last().append(formattedOnlinetitle + formattedOnlineSchool);

			var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
			$(".education-entry").last().append(formattedOnlineDates);

			var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
			$(".education-entry").last().append(formattedOnlineURL);
		}
		
	}
};


education.display();



//Work Section
var work = {
	"jobs": [{
		"employer": "UCR Housing, Dining & Residential Services",
		"title": "Residential Technical Assistant",
		"location": "Riverside",
		"dates": "September 2014 - July 2015",
		"description": `Provided IT support for networking issues.
		 Set up infrastructure for large events.
		 Provided IT counseling services to study body and staff.
		 Maintained technical services of the residential area.`
	}],
	display: function() {
		$("#workExperience").append(HTMLworkStart);

		for (var i = 0; i < work.jobs.length; i++) {
			var formattedWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);

			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			$(".work-entry").append(formattedWorkEmployer + formattedWorkTitle);

			var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			$(".work-entry").append(formattedWorkDates);

			var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			$(".work-entry").append(formattedWorkLocation);

			var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
			$(".work-entry").append(formattedWorkDescription);
		}
	}
};


work.display();


//Projects Section
var projects = {
	"projects": [{
		"title": "College Confessions",
		"dates": "2016",
		"description": "Social network for universities in the US based on university email.",
		"images": ["https://lh3.googleusercontent.com/B1cz8wiqzcv6ZpqqYDBbwO7XncM7RrOr1Na6VqPNnn8rOHEtL5nWGzY-A0bmsK-zc9uk=h310-rw",
			"https://lh3.googleusercontent.com/V6OQcBVAvi-aycZhlMj7k6QxYYQP6UbQ9BUSU761hvFDLnCOqtM_9dEST-2Fl60EEA=h310-rw"]
	},
	{
		"title": "Simple Gratuity Calculator",
		"dates": "2016",
		"description": "A simplistic calculator designed for gratuity fees.",
		"images": ["https://lh3.googleusercontent.com/ZTpwl5Opa56Rto3s5O2I7J8MjShkHBjFSs2E2mxgQTvr6bxvVlAHENmCKCA_gY3g-Q=h310-rw",
			"https://lh3.googleusercontent.com/t-k0AZVcFWXPN5YKFvUhwQYVcytSm-60NM5SjL8BlJQs394ip73f03ChMufxMi46yA=h310-rw",
			"https://lh3.googleusercontent.com/a9ke9Mk36RoUNA_zm5nC1m9QwFvVrxJZc5PPVoGxJgkHCsF7cDAN4wFmasahlQY2BlQ=h310-rw"]
	},
	{
		"title": "8 Puzzle Solver",
		"dates": "2017",
		"description": "Uses the A* heuristic to solve the 8 puzzle showing steps.",
		"images": ["https://lh3.googleusercontent.com/Qr9khNX8xms8Ff-nq7gHlGyKUbGhLuBje72tPl6wuDIqKIyCSBef8gFBecn_2mJpTd8=h310-rw",
			"https://lh3.googleusercontent.com/lMu9lS5rIRdOjn3lVIjX9B5Um0oD_pL8Jy3uhmsSRbdrwQnAo8pRL9Xa6-D-9HqCis0=h310-rw",
			"https://lh3.googleusercontent.com/4otT7ki2-1JlkzEe1u-qaLuEHsBC16ahX8FJbbCH86jT5iSJU9_8wnGk94RV8edHLQ=h310-rw"]
	}],
	display: function() {
		$("#projects").append(HTMLprojectStart);

		for (var i = 0; i < projects.projects.length; i++) {
			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
			$(".project-entry").append(formattedProjectTitle);

			var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			$(".project-entry").append(formattedProjectDates);

			var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
			$(".project-entry").append(formattedProjectDescription);

			for (var k = 0; k < projects.projects[i].images.length; k++) {
				var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[k]);
				$(".project-entry").append(formattedProjectImage);
			}
		}
	}
};


projects.display();
$("#mapDiv").append(googleMap);