// Ensure the DOM is fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', () => {

    // =========================================================
    // PART 2: JavaScript Functions - Scope, Parameters & Return Values
    // (Defining these first as they are fundamental building blocks)
    // =========================================================
    console.log("--- Part 2: JavaScript Functions ---");

    // Global variable: Accessible anywhere in this script
    let globalMessage = "I am a global variable, visible everywhere!";

    /**
     * Function to calculate the circumference of a circle.
     * Demonstrates: Parameters (radius), Return Value.
     * @param {number} radius - The radius of the circle.
     * @returns {number|string} The circumference or an error message if input is invalid.
     */
    function calculateCircumference(radius) {
        // Local variable: 'pi' is only accessible inside this function
        const pi = Math.PI;

        if (typeof radius !== 'number' || radius < 0) {
            console.error("Invalid input for calculateCircumference: Radius must be a non-negative number.");
            return "Invalid Radius"; // Return an error string
        }

        const circumference = 2 * pi * radius;
        return circumference; // Return the calculated value
    }

    // Get elements for circumference calculation
    const radiusInput = document.getElementById('radiusInput');
    const calculateCircumferenceBtn = document.getElementById('calculateCircumferenceBtn');
    const circumferenceResult = document.getElementById('circumferenceResult');

    calculateCircumferenceBtn.addEventListener('click', () => {
        const radius = parseFloat(radiusInput.value); // Get value and convert to number
        const result = calculateCircumference(radius); // Call the function

        if (typeof result === 'number') {
            circumferenceResult.textContent = result.toFixed(2); // Display with 2 decimal places
            circumferenceResult.style.color = "#27ae60"; // Green color for success
            console.log(`Calculated circumference for radius ${radius}: ${result.toFixed(2)}`);
        } else {
            circumferenceResult.textContent = result; // Display error message
            circumferenceResult.style.color = "#e74c3c"; // Red color for error
            console.warn(`Circumference calculation failed: ${result}`);
        }
    });

    /**
     * Function to demonstrate variable scope (global vs. local).
     * Demonstrates: Scope awareness.
     */
    function displayScopeDemo() {
        // Local variable: 'localVariable' is only accessible inside displayScopeDemo
        let localVariable = "I am a local variable, only visible inside this function.";

        console.log("\n--- Scope Demo Output ---");
        console.log("From inside the function:");
        console.log(`Global Message: "${globalMessage}"`); // Can access global variable
        console.log(`Local Variable: "${localVariable}"`); // Can access local variable

        // Attempting to access localVariable outside this function would result in an error.
        // console.log(anotherLocalVar); // This would cause an error if anotherLocalVar was declared in a different function

        console.log("--- End Scope Demo Output ---");
    }

    // Get element for scope demo
    const scopeDemoBtn = document.getElementById('scopeDemoBtn');
    scopeDemoBtn.addEventListener('click', () => {
        displayScopeDemo(); // Call the function to run the scope demo
        // console.log(localVariable); // This line would cause a ReferenceError if uncommented
        console.log("From outside the function, trying to access globalMessage:", globalMessage);
    });


    // =========================================================
    // PART 3: Combining CSS Animations with JavaScript
    // (Using JS to trigger CSS transitions/animations)
    // =========================================================
    console.log("\n--- Part 3: Combining CSS & JavaScript ---");

    // 1. Trigger Box Animation on Button Click
    const triggerBoxAnimationBtn = document.getElementById('triggerBoxAnimationBtn');
    const dynamicBox = document.getElementById('dynamicBox');

    triggerBoxAnimationBtn.addEventListener('click', () => {
        // Add the 'animate-active' class to trigger the CSS transition/animation
        dynamicBox.classList.add('animate-active');
        console.log("Animation class added to dynamicBox.");

        // After the animation duration (0.5s in CSS), remove the class
        // This allows the animation to be re-triggered on subsequent clicks
        setTimeout(() => {
            dynamicBox.classList.remove('animate-active');
            console.log("Animation class removed from dynamicBox.");
        }, 500); // Match this timeout to the CSS transition-duration
    });

    // 2. Interactive Modal Popup
    const openModalBtn = document.getElementById('openModalBtn');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const infoModal = document.getElementById('infoModal');

    // Function to open the modal
    function openModal() {
        infoModal.classList.remove('hidden'); // Remove 'hidden' to make it display: flex
        // Use a small delay before adding 'visible' to allow 'display' change to render
        // This ensures the CSS transition for opacity/transform works correctly
        setTimeout(() => {
            infoModal.classList.add('visible');
            console.log("Modal opened.");
        }, 10);
    }

    // Function to close the modal
    function closeModal() {
        infoModal.classList.remove('visible'); // Remove 'visible' to trigger fade/slide out
        // After the transition completes, add 'hidden' to remove it from document flow
        setTimeout(() => {
            infoModal.classList.add('hidden');
            console.log("Modal closed.");
        }, 300); // Match this timeout to the CSS transition-duration for modal-overlay
    }

    // Event listeners for modal buttons
    openModalBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);

    // Optional: Close modal if user clicks outside the modal content
    infoModal.addEventListener('click', (event) => {
        // If the click target is the modal overlay itself (not its content)
        if (event.target === infoModal) {
            closeModal();
        }
    });

    // Optional: Close modal with Escape key
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && infoModal.classList.contains('visible')) {
            closeModal();
        }
    });

    console.log("\nJavaScript setup complete. Interact with the page!");

}); // End of DOMContentLoaded listener