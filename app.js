const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

document.addEventListener("DOMContentLoaded", () => {
    console.log("Schedule Page Loaded");

    const dates = document.querySelectorAll('.date'); // All the day buttons
    const times = document.querySelectorAll('.time'); // All the time buttons
    const nextButton = document.getElementById('next-button'); // Next button
    const roomModal = document.getElementById('room-modal'); // The room selection modal
    const reservationModal = document.getElementById('reservation-modal'); // The reservation modal
    const backButton = document.getElementById('back-button'); // Back button for room modal
    const closeRoomModal = document.getElementById('close-room-modal'); // Close button for room modal
    const closeReservationModal = document.getElementById('close-reservation-modal'); // Close button for reservation modal
    const successModal = document.getElementById('successModal'); // Success modal for confirmation
    const closeSuccessModal = document.getElementById('closeSuccessModal'); // Close button for success modal

    let selectedDay = null; // Variable to track the selected day
    let selectedTime = null; // Variable to track the selected time
    let selectedRoom = null; // Variable to track the selected room

    // Function to handle day selection
    dates.forEach(date => {
        date.addEventListener('click', () => {
            // Remove selected class from all dates
            dates.forEach(d => d.classList.remove('selected'));
            // Add selected class to the clicked date
            date.classList.add('selected');
            selectedDay = date.dataset.day;
            checkNextButton();
        });
    });

    // Function to handle time selection
    times.forEach(time => {
        time.addEventListener('click', () => {
            // Remove selected class from all times
            times.forEach(t => t.classList.remove('selected'));
            // Add selected class to the clicked time
            time.classList.add('selected');
            selectedTime = time.innerText;
            checkNextButton();
        });
    });

    // Function to check if both day and time are selected
    function checkNextButton() {
        if (selectedDay && selectedTime) {
            nextButton.classList.add('ready');
            nextButton.disabled = false;
        } else {
            nextButton.classList.remove('ready');
            nextButton.disabled = true;
        }
    }

    // Show the room modal when "Next" is clicked
    nextButton.addEventListener('click', () => {
        if (selectedDay && selectedTime) {
            roomModal.style.display = 'flex'; // Show room selection modal
        }
    });

    // Function to handle room selection
    const roomButtons = document.querySelectorAll('.room');
    roomButtons.forEach(button => {
        button.addEventListener('click', () => {
            selectedRoom = button.dataset.room;
            // Close room modal and show reservation modal
            roomModal.style.display = 'none';
            reservationModal.style.display = 'flex';
        });
    });

    // Handle back button in room modal to go back to scheduling
    backButton.addEventListener('click', () => {
        roomModal.style.display = 'none';
    });

    // Close the room modal when clicking the close button
    closeRoomModal.addEventListener('click', () => {
        roomModal.style.display = 'none';
    });

    // Close the reservation modal when clicking the close button
    closeReservationModal.addEventListener('click', () => {
        reservationModal.style.display = 'none';
    });

    // Handle form submission for reservation
    const reservationForm = document.getElementById('reservation-form');
    reservationForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // You can handle the form data here, e.g., send it to a server

        // After submission, show success modal
        reservationModal.style.display = 'none';
        successModal.style.display = 'flex';
    });

    // Close the success modal when clicking the close button
    closeSuccessModal.addEventListener('click', () => {
        successModal.style.display = 'none';
    });
});

document.getElementById("homeButton").addEventListener("click", function() {
    window.location.href = "index.html"; 
});


const galleryImages = document.querySelectorAll('.gallery__img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.querySelector('.close');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.style.display = 'none';
    }
});