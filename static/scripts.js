$(document).ready(function () {
    var timeoutId; // Variable to store the timeout ID
    function handleChange() {
        clearTimeout(timeoutId); // Clear any previous timeout
        timeoutId = setTimeout(callFunction, 500); // Set a new timeout of 1 second
    }


    const textarea = document.getElementById("message"); // Replace "message" with the ID of your textarea element
    textarea.addEventListener("input", handleChange);
    $("#message").keypress(function (e) {
        if (e.which === 13) {
            e.preventDefault();
            $(this).closest("form").submit();
        }
    });


    $('#message-box').on('submit', function (e) {
        e.preventDefault();
        callFunction();
    });
});