(function ($) {
    $(document).ready(function () {
        $('#block-formblock-contact-site #edit-name').attr('placeholder', 'Name');
        $('#block-formblock-contact-site #edit-mail').attr('placeholder', 'Email');
        $('#block-formblock-contact-site #edit-subject').attr('placeholder', 'Subject');
        $('#block-formblock-contact-site #edit-message').attr('placeholder', 'Message');
        $('#block-formblock-contact-site #edit-submit').html('Send Message!');
    })
}(jQuery));