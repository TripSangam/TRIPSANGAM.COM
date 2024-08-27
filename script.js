// scripts.js

// Function to show or hide the guide profiles section
function toggleSafarBuddy() {
    const profiles = document.getElementById('guide-profiles');
    if (profiles.classList.contains('hidden')) {
        profiles.classList.remove('hidden');
    } else {
        profiles.classList.add('hidden');
    }
}

// Optional: Ensure the guide profiles section is hidden on page load
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('guide-profiles').classList.add('hidden');
});
document.querySelectorAll('.place').forEach(button => {
    button.addEventListener('click', function() {
        // Check if the list already exists
        let placesList = this.nextElementSibling;
        
        if (!placesList || placesList.tagName !== 'UL') {
            // Create the list of places
            placesList = document.createElement('ul');
            const places = [
                'Bawali Rajbari',
                'Victoria Memorial',
                'Haveli Mirza Galib',
                'Swami Vivekananda Temple',
                'Kumartuli',
                'Red Fort',
                'Bow Barracks',
                'Hawa Mahal',
                'Chintamoni Kar Bird Sanctuary',
                'Santiniketan',
                

                
                
            ];

            places.forEach(place => {
                const listItem = document.createElement('li');
                listItem.textContent = place;
                placesList.appendChild(listItem);
            });

            this.parentElement.appendChild(placesList);
        } else {
            // Toggle the visibility of the list
            placesList.style.display = placesList.style.display === 'none' ? 'block' : 'none';
        }
    });
});

  
