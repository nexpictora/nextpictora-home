document.addEventListener("DOMContentLoaded", function () {
    function submitForm() {
        var name = document.getElementById('form5Example1').value;
        var email = document.getElementById('form5Example2').value;

        if (!name || !email) {
            alert('Please fill in both Name and Email fields.');
            return;
        }

        var subject = 'New Enquiry';
        var body = 'Name: ' + name + '\nEmail: ' + email;

        var mailtoLink = 'mailto:support@nexpictora.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

        window.location.href = mailtoLink;
    }

    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); 
        submitForm();
    });
});
