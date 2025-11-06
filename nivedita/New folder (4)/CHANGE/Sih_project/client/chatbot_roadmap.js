document.addEventListener('DOMContentLoaded', () => {
    const roadmapSelect = document.getElementById('roadmapSelect');
    const roadmapTitle = document.getElementById('roadmapTitle');
    const stepsContainer = document.getElementById('stepsContainer');
    let allRoadmaps = {};

    // Function to display a roadmap
    const displayRoadmap = (title) => {
        const steps = allRoadmaps[title];
        if (!steps) {
            stepsContainer.innerHTML = '<p>Please select a roadmap to view its steps.</p>';
            roadmapTitle.textContent = '';
            return;
        }

        roadmapTitle.textContent = title;
        stepsContainer.innerHTML = ''; // Clear previous steps

        steps.forEach((step, index) => {
            const stepElement = document.createElement('div');
            stepElement.classList.add('step');

            stepElement.innerHTML = `
                <div class="step-number">${index + 1}</div>
                <div class="step-content">
                    <h3>${step.title}</h3>
                    <p>${step.advice}</p>
                </div>
            `;

            stepsContainer.appendChild(stepElement);
        });
    };

    // Fetch all roadmaps and populate the dropdown
    fetch('chatbot_roadmap.json')
        .then(response => response.json())
        .then(data => {
            allRoadmaps = data;
            const roadmapTitles = Object.keys(allRoadmaps);

            if (roadmapTitles.length > 0) {
                roadmapTitles.forEach(title => {
                    const option = document.createElement('option');
                    option.value = title;
                    option.textContent = title;
                    roadmapSelect.appendChild(option);
                });
                // Display the first roadmap by default
                displayRoadmap(roadmapTitles[0]);
                roadmapSelect.value = roadmapTitles[0];
            } else {
                stepsContainer.innerHTML = '<p>No roadmaps have been saved yet. Go to the AI Advisor to create one!</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching roadmap data:', error);
            stepsContainer.innerHTML = '<p>Could not load roadmap data. Please try again later.</p>';
        });

    // Event listener for dropdown changes
    roadmapSelect.addEventListener('change', (event) => {
        const selectedTitle = event.target.value;
        if (selectedTitle) {
            displayRoadmap(selectedTitle);
        } else {
            stepsContainer.innerHTML = '<p>Please select a roadmap to view its steps.</p>';
            roadmapTitle.textContent = '';
        }
    });

    // Event listener for the delete button
    const deleteButton = document.getElementById('deleteButton');
    deleteButton.addEventListener('click', () => {
        const selectedTitle = roadmapSelect.value;
        if (!selectedTitle) {
            alert('Please select a roadmap to delete.');
            return;
        }

        if (confirm(`Are you sure you want to delete the "${selectedTitle}" roadmap?`)) {
            fetch('/clear', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ topic: selectedTitle }),
            })
            .then(response => response.json())
            .then(data => {
                if (data.ok) {
                    // Reload the page to reflect the changes
                    location.reload();
                } else {
                    alert('Failed to delete the roadmap.');
                }
            })
            .catch(error => {
                console.error('Error deleting roadmap:', error);
                alert('An error occurred while deleting the roadmap.');
            });
        }
    });
});
