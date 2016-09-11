'use strict';

window.jQuery(document).ready(function ($) {
    const sections = $('section');
    const navigation_links = $('#nav-wrap a');
    sections.waypoint({
        handler: function (_event, direction) {
            const active_section = getActiveSection($(this), direction);
            var active_link = $('#nav-wrap a[href="#' + active_section.attr("id") + '"]');
            navigation_links.parent().removeClass("current");
            active_link.parent().addClass("current");
        },
        offset: '35%'
    });
});

function getActiveSection(active_section, direction) {
    switch (direction) {
        case 'up':
            return active_section.prev();
        default:
            return active_section;
    }
}
