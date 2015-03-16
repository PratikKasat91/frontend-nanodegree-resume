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
        "dates": "Aug 2014 to Jan 2015"

    }, {
        "employer": "Charles Schwab",
        "title": "Client Services Intern",
        "location": "Phoenix,Arizona",
        "dates": "June 2014 to Aug 2014"

    }]
}

var projects = {

    "projects": [{

        "title": "Kaltura Video",
        "dates": "",
        "description": "Information retrieval",
        "images": "url"
    }]
}


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
    "biopic": "url"
}