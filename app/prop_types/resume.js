'use strict';

const React = require('react');
const PropTypes = React.PropTypes;

// ----------------------------------------------------------------------------
// COMPONENTS
// ----------------------------------------------------------------------------

module.exports.location = PropTypes.shape({
    address: PropTypes.string.isRequired,
    postalCode: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    countryCode: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired
}).isRequired;

module.exports.profile = PropTypes.shape({
    network: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}).isRequired;
module.exports.profiles = PropTypes.arrayOf(
    module.exports.profile
).isRequired;

module.exports.bulletPoints = PropTypes.arrayOf(
    PropTypes.string
).isRequired;

module.exports.image = PropTypes.shape({
    modal: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired
}).isRequired;

module.exports.description = PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: module.exports.bulletPoints
});

module.exports.descriptions = PropTypes.arrayOf(
    module.exports.description
).isRequired;

// ----------------------------------------------------------------------------
// PROP SETS
// ----------------------------------------------------------------------------

module.exports.navigation = PropTypes.object.isRequired;

module.exports.basics = PropTypes.shape({
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    summary: module.exports.bulletPoints,
    location: module.exports.location,
    profiles: module.exports.profiles
}).isRequired;

module.exports.work = PropTypes.shape({
    company: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    highlights: module.exports.bulletPoints
});
module.exports.workSet = PropTypes.arrayOf(
    module.exports.work
).isRequired;

module.exports.volunteer = PropTypes.shape({
    organization: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    highlights: module.exports.bulletPoints
});
module.exports.volunteerSet = PropTypes.arrayOf(
    module.exports.volunteer
).isRequired;

module.exports.education = PropTypes.shape({
    institution: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    studyType: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
    gpa: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    courses: module.exports.bulletPoints
});
module.exports.educationSet = PropTypes.arrayOf(
    module.exports.education
).isRequired;

module.exports.awards = PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    awarder: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired
});
module.exports.awardsSet = PropTypes.arrayOf(
    module.exports.awards
).isRequired;

module.exports.projects = PropTypes.shape({
    name: PropTypes.string.isRequired,
    publisher: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    website: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    image: module.exports.image,
    keywords: module.exports.bulletPoints
});
module.exports.projectsSet = PropTypes.arrayOf(
    module.exports.projects
).isRequired;

module.exports.skillDetails = PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired,
    keywords: module.exports.bulletPoints
});
module.exports.skillDetailsSet = PropTypes.arrayOf(
    module.exports.skillDetails
);

module.exports.skills = PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: module.exports.bulletPoints,
    skillDetails: module.exports.skillDetailsSet
});
module.exports.skillsSet = PropTypes.arrayOf(
    module.exports.skills
).isRequired;

module.exports.languages = PropTypes.shape({
    name: PropTypes.string.isRequired,
    level: PropTypes.string.isRequired
});
module.exports.languagesSet = PropTypes.arrayOf(
    module.exports.languages
).isRequired;

module.exports.interests = PropTypes.shape({
    name: PropTypes.string.isRequired,
    keywords: module.exports.bulletPoints
});
module.exports.interestsSet = PropTypes.arrayOf(
    module.exports.interests
).isRequired;

module.exports.references = PropTypes.shape({
    name: PropTypes.string.isRequired,
    position: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    reference: PropTypes.string.isRequired
});
module.exports.referencesSet = PropTypes.arrayOf(
    module.exports.references
).isRequired;
