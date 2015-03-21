//Using JSON
var work = {
    "jobs": [{
        "employer": "TAG Employer Services",
        "title": "Web Developer Intern",
        "location": "Phoenix,Arizona",
        "dates": "Aug 2014 to Jan 2015",
        "description": "Developed complex applications using Backbone, jQuery and underscore. Played with json and other complex data using javascript in order to give the user a highly dynamic experience. Developed and maintained SQL stored procedures and scripts. Learned about Agile practices from the ground up and how to apply them to the future roles."

    }, {
        "employer": "Charles Schwab",
        "title": "Client Services Intern",
        "location": "Phoenix,Arizona",
        "dates": "June 2014 to Aug 2014",
        "description": "Received training in Agile Software Development. Learned about the Code Migration Process for the CRM applications at Schwab.Participated in Daily Stand-up meetings, Sprint Reviews and Sprint Retrospectives to see team dynamics and work co-ordination amongst teams. Helped building the document library for SalesForce instances at Schwab using Microsoft SharePoint. Worked with experienced IT professionals to understand different roles and responsibilities. Learned about the work culture and best work practices in an organization. Took Strengths assessment test by Gallup to know more about my strengths and further areas of improvement. Learned about the Change Management Process and Release Management Process for the CRM applications at Schwab"

    }]
};

var projects = {

    "projects": [{

        "title": "Improving E-Learning Videos Using Personalization and Social Signals",
        "dates": "Feb 2014 - May 2014",
        "description": "Technologies Used: Kaltura API, Javascript, Jquery, HTML 5, CSS. Redesigned a Learning Management System(LMS) to make videos navigable and interactive for information retrieval. Allows instructors to easily upload lecture videos and add cue-points(chapters) to it. Provides an interface that allows students to navigate through the chapters and post their comments/questions on any given chapter that can be answered by the instructor or their peers. Email Subscription feature allows students and instructors to get notifications on their email when new comments are posted. Fixed defects in existing code and improved performance by making asynchronous requests when possible.",
        "images": []
    }, {
        "title": "MAG",
        "dates": "Feb 2014 - May 2014",
        "description": "Technologies used: PHP, HTML5 ,CSS, JavaScript, Jquery, Ajax, Google Maps API. Developed a mobile web application to help the victims of domestic violence to reach out to the nearest law enforcement center. Utilized google maps api to fetch the current location of user and display the nearest help center and all available services as markers on map. Fetched information about the nearest help centers from the MySql database. Created an interactive form for users to submit desired information in the database. Developed an interactive database for admin to approve,edit or delete any entry submitted by the user.",
        "images": []
    }]
};


var education = {
    "schools": [{
            "name": "Arizona State University",
            "years": "2013-2015",
            "major": "Computer Science",
            "degree": "Masters",
            "location": "Tempe,Arizona,US"
        },

        {
            "name": "University of Mumbai",
            "years": "2010-2013",
            "major": "Computer Science",
            "degree": "Bachelors",
            "location": "Mumbai,India"
        }
    ],
    "online": [{
        "name": "Udacity",
        "course": "Intro to JavaScript"
    }]
};

var bio = {
    "name": "Pratik Kasat",
    "role": "Graduate Student at Arizona State University",
    "contacts": {
        "mobile": "480-278-4782",
        "email": "pkasat@asu.edu",
        "github": "pratikkasat91",
        "location": "Tempe,Arizona"
    },
    "skills": ["Java", "JavaScript", "PHP", "C#"],
    "biopic": "images/fry.jpg",
    "message": "Hello, Welcome to my Website !"
};


function displayEducation() {

    for (var e in education.schools) {

        $('#education').append(HTMLschoolStart);

        var fschoolName = HTMLschoolName.replace("%data%", education.schools[e].name);
        var fschoolDegree = HTMLschoolDegree.replace("%data%", education.schools[e].degree);
        var fschoolNameDegree = fschoolName + fschoolDegree;
        var fschoolDates = HTMLschoolDates.replace("%data%", education.schools[e].years);
        var fschoolLocation = HTMLschoolLocation.replace("%data%", education.schools[e].location);
        var fschoolMajor = HTMLschoolMajor.replace("%data%", education.schools[e].major);

        $('.education-entry:last').append(fschoolNameDegree);
        $('.education-entry:last').append(fschoolDates);
        $('.education-entry:last').append(fschoolLocation);
        $('.education-entry:last').append(fschoolMajor);

    }

}



function displayWork() {

    for (i in work.jobs) {

        $("#workExperience").append(HTMLworkStart);
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        var formattedworkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedworkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        var formattedEmpTitle = formattedEmployer + formattedWorkTitle;
        $(".work-entry:last").append(formattedEmpTitle);
        $(".work-entry:last").append(formattedWorkDates);
        $(".work-entry:last").append(formattedworkLocation);
        $(".work-entry:last").append(formattedworkDescription);

    }

}

function displayBio() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $(formattedName).insertBefore('#topContacts');
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $(formattedRole).insertBefore('#topContacts');

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    $('#topContacts').append(formattedMobile);
    $('#topContacts').append(formattedEmail);
    $('#topContacts').append(formattedGithub);
    $('#topContacts').append(formattedLocation);

    $('#footerContacts').append(formattedMobile);
    $('#footerContacts').append(formattedEmail);
    $('#footerContacts').append(formattedGithub);
    $('#footerContacts').append(formattedLocation);

    var formattedbioPic = HTMLbioPic.replace("%data%", bio.biopic);
    $(formattedbioPic).insertBefore('#topContacts');
    var formattedWelcomeMessage = HTMLWelcomeMsg.replace("%data%", bio.message);
    $(formattedWelcomeMessage).insertAfter('#topContacts');

    if (bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill;

        for (var i = 0; i < bio.skills.length; i++) {

            formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
            $("#skills").append(formattedSkill);
        }

    }

}

function inName(name) {
    name = name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name.join(" ");
}

displayBio();
displayWork();


$('#main').append(internationalizeButton);

projects.display = function() {

    for (var project in projects.projects) {
        $("#projects").append(HTMLprojectStart);
        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedTitle);
        $(".project-entry:last").append(formattedDates);
        $(".project-entry:last").append(formattedDescription);
        if (projects.projects[project].images.length > 0) {
            for (var image in projects.projects[project].images) {
                var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
                $(".project-entry:last").append(formattedImage);
            }
        }

    }
}

projects.display();
displayEducation();
$('#mapDiv').append(googleMap);