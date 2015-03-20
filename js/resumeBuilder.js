/*var name = 'Pratik Kasat';
var formattedName = HTMLheaderName.replace('%data%', name);
var role = 'Graduate Student at Arizona State University';
var formattedRole = HTMLheaderRole.replace('%data%', role);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);
var contact = 'pkasat@asu.edu';
var skills = ["Java", "JavaScript", "PHP", "C#"];*/


/*console.log(bio);
$('#main').append(bio);

var work = {};
work.position = 'Web Developer Intern';
work.employer = 'TAG Employer Services';
work.years = 0.7;*/

/*var education = {};
education['name'] = 'Arizona State University';
education['years'] = '2013-2015';
education['city'] = 'Tempe,Arizona,US';
$('#main').append(work.position);
$('#main').append(education['name']);*/


//Using JSON
var work = {
    "jobs": [{
        "employer": "TAG Employer Services",
        "title": "Web Developer Intern",
        "location": "Phoenix,Arizona",
        "dates": "Aug 2014 to Jan 2015",
        "description": "Some description here"

    }, {
        "employer": "Charles Schwab",
        "title": "Client Services Intern",
        "location": "Phoenix,Arizona",
        "dates": "June 2014 to Aug 2014",
        "description": "Some description here"

    }]
};

var projects = {

    "projects": [{

        "title": "Kaltura Video",
        "dates": "",
        "description": "Information retrieval",
        "images": "url"
    }]
};


var education = {
    "schools": [{
            "name": "Arizona State University",
            "years": "2013-2015",
            "city": "Tempe,Arizona,US",
            "degree": "MS"
        },

        {
            "name": "University of Mumbai",
            "years": "2010-2013",
            "city": "Mumbai,India",
            "degree": "BE"
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
        $(".work-entry:last").append(formattedworkDescription);
        $(".work-entry:last").append(formattedworkLocation);

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

displayBio();
displayWork();